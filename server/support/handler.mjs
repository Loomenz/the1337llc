import { answerChat } from './bot.mjs';
import { takeChatSlot } from './rateLimit.mjs';

// Checks a chat request from the public site before anything reaches Claude.
export const MAX_MESSAGE_CHARS = 500; // the visitor's new message
export const MAX_HISTORY_CHARS = 1500; // each earlier turn (bot answers included)
export const MAX_TURNS = 12;

/** The visitor's IP as nginx passes it (nginx sets X-Real-IP from the connection). */
export function clientIp(headers) {
  const real = headers['x-real-ip'];
  const fwd = headers['x-forwarded-for'];
  return (typeof real === 'string' && real.trim()) ||
    (typeof fwd === 'string' && fwd.split(',')[0].trim()) ||
    'unknown';
}

function parseTurns(body) {
  const raw = body?.messages;
  if (!Array.isArray(raw) || raw.length === 0) return 'Please type a question.';
  if (raw.length > MAX_TURNS * 2) return 'This chat is too long. Please refresh the page to start a new one.';

  const turns = [];
  for (const m of raw.slice(-MAX_TURNS)) {
    if ((m?.role !== 'user' && m?.role !== 'assistant') || typeof m?.text !== 'string') return 'Please type a question.';
    turns.push({ role: m.role, text: m.text.slice(0, MAX_HISTORY_CHARS) });
  }

  const last = raw[raw.length - 1];
  if (last.role !== 'user' || !last.text.trim()) return 'Please type a question.';
  if (last.text.length > MAX_MESSAGE_CHARS) {
    return `Please keep your message under ${MAX_MESSAGE_CHARS} characters, or email ryan@the1337llc.com.`;
  }
  turns[turns.length - 1] = { role: 'user', text: last.text };
  return turns;
}

/** Returns { status, body: { reply } | { error } }. */
export async function handleChatRequest(body, ip) {
  const turns = parseTurns(body);
  if (typeof turns === 'string') return { status: 400, body: { error: turns } };

  const slot = takeChatSlot(ip);
  if (!slot.ok) return { status: 429, body: { error: slot.message } };

  const { reply } = await answerChat(turns);
  return { status: 200, body: { reply } };
}
