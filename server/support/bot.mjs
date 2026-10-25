import Anthropic from '@anthropic-ai/sdk';
import { readFileSync } from 'node:fs';
import { MODELS, pickModel } from './selector.mjs';

// Site facts the bot answers from. Edited in D:\projects\chat-bots\knowledge\the1337llc.md
// and copied to src/data/support-knowledge.md by that project's sync script; don't edit the copy directly.
const KNOWLEDGE_FILE = new URL('../../src/data/support-knowledge.md', import.meta.url);
let knowledge = null;
function getKnowledge() {
  if (knowledge === null) knowledge = readFileSync(KNOWLEDGE_FILE, 'utf8');
  return knowledge;
}

let client = null;
function getClaude() {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  if (!client) client = new Anthropic({ timeout: 20_000, maxRetries: 1 });
  return client;
}

export const OFFLINE_REPLY =
  "Sorry, the chat can't answer right now. Email ryan@the1337llc.com or use the [Contact](/#contact) form and we'll reply within one business day.";

/**
 * Turns the visitor's chat into Claude messages: last 6 turns, starting with the visitor,
 * same-role turns merged so roles alternate, ending with the visitor's new message.
 */
export function toClaudeMessages(turns) {
  const out = [];
  for (const t of turns.slice(-6)) {
    const text = t.text.trim();
    if (!text) continue;
    if (!out.length && t.role !== 'user') continue;
    const prev = out[out.length - 1];
    if (prev && prev.role === t.role) prev.content += '\n\n' + text;
    else out.push({ role: t.role, content: text });
  }
  return out;
}

/** One Claude call. Returns the reply text, or null when there is no key, the call fails or the model declines. */
async function askClaude(model, messages) {
  const claude = getClaude();
  if (!claude) return null;

  const params = {
    model,
    max_tokens: 1024,
    output_config: { effort: 'low' }, // answers are 2 to 4 sentences
    system: [{ type: 'text', text: getKnowledge(), cache_control: { type: 'ephemeral' } }],
    messages,
  };

  try {
    // Opus can hand a declined request to another model on Anthropic's side; Haiku can't.
    const response = model === MODELS.smart
      ? await claude.beta.messages.create({ ...params, betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' })
      : await claude.messages.create(params);

    const u = response.usage;
    console.log(`[SupportBot] ${model} tokens: in ${u.input_tokens}, cached ${u.cache_read_input_tokens ?? 0}, out ${u.output_tokens}`);
    if (response.stop_reason === 'refusal') {
      console.warn(`[SupportBot] ${model} declined (${response.stop_details?.category ?? 'no category'})`);
      return null;
    }
    const text = response.content.map((b) => (b.type === 'text' ? b.text : '')).join('').trim();
    return text || null;
  } catch (err) {
    console.warn(`[SupportBot] ${model} call failed: ${err.message}`);
    return null;
  }
}

/** Answers the visitor's newest message. Haiku or Opus by the selector; Opus retries a failed Haiku; then the offline reply. */
export async function answerChat(turns) {
  const messages = toClaudeMessages(turns);
  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return { reply: OFFLINE_REPLY, model: null, reason: 'no question' };
  }

  const pick = pickModel(turns);
  let reply = await askClaude(pick.model, messages);
  let model = pick.model;
  let reason = pick.reason;
  if (!reply && pick.model !== MODELS.smart) {
    reply = await askClaude(MODELS.smart, messages);
    model = MODELS.smart;
    reason = `${pick.reason}, retry`;
  }
  if (!reply) {
    console.warn('[SupportBot] No answer from Claude, sent the offline reply');
    return { reply: OFFLINE_REPLY, model: null, reason: 'offline' };
  }
  console.log(`[SupportBot] Answered by ${model} (${reason})`);
  return { reply, model, reason };
}
