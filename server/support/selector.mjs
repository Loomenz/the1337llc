// Picks the model for each chat message with simple rules (no extra AI call).
// Opus for the hard ones (upset, a problem with work we did, repeats, long or many-part); Haiku for the rest.

export const MODELS = {
  fast: 'claude-haiku-5-5',
  smart: 'claude-opus-5-5',
};

const UPSET_WORDS = /\b(angry|furious|ridiculous|unacceptable|terrible|awful|worst|scam|lied|lying|disappointed|frustrated|fed up|wtf|damn|hell)\b/i;
const PROBLEM_WORDS = /\b(site (is )?down|website (is )?down|hacked|not working|broken|refund|cancel(l?ing)?|charged twice|overcharged|lawyer|attorney|chargeback|complain(t|ing)?|never (heard|got) back|no one (answered|replied))\b/i;

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function isShouting(text) {
  const letters = text.replace(/[^A-Za-z]/g, '');
  return letters.length >= 12 && letters.replace(/[^A-Z]/g, '').length / letters.length > 0.7;
}

/** `turns` ({ role, text }) oldest first; the last one is the visitor's new message. */
export function pickModel(turns) {
  const last = turns[turns.length - 1]?.text || '';

  if (UPSET_WORDS.test(last) || isShouting(last) || /\?{3,}|!{3,}/.test(last)) {
    return { model: MODELS.smart, reason: 'upset' };
  }
  if (PROBLEM_WORDS.test(last)) {
    return { model: MODELS.smart, reason: 'problem' };
  }
  const now = normalize(last);
  const repeated = turns
    .slice(0, -1)
    .some((t) => t.role === 'user' && now.length >= 10 && normalize(t.text) === now);
  if (repeated) return { model: MODELS.smart, reason: 'repeated' };
  if (last.length > 400 || (last.match(/\?/g) || []).length >= 3) {
    return { model: MODELS.smart, reason: 'long' };
  }
  return { model: MODELS.fast, reason: 'everyday' };
}
