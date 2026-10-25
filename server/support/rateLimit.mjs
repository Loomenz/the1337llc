// Abuse and cost protection for the public chat (visitors aren't logged in).
// In memory: the chat runs as one Node process on the VPS, so one counter is the whole picture.
// Per IP: a short burst limit and a daily limit. Site-wide: a daily cap on Claude calls.

const minute = new Map();
const daily = new Map();
let day = '';

function limits() {
  return {
    perMinute: Number(process.env.SUPPORT_LIMIT_PER_MINUTE) || 8,
    perIpDay: Number(process.env.SUPPORT_LIMIT_PER_IP_DAY) || 60,
    perDay: Number(process.env.SUPPORT_LIMIT_PER_DAY) || 500,
  };
}

const today = (now) => new Date(now).toISOString().slice(0, 10);

/** Counts one chat message from `ip`. Returns { ok: false, message } when a limit is hit. */
export function takeChatSlot(ip, now = Date.now()) {
  const { perMinute, perIpDay, perDay } = limits();

  if (today(now) !== day) {
    day = today(now);
    daily.clear();
  }

  const recent = (minute.get(ip) || []).filter((t) => now - t < 60_000);
  if (recent.length >= perMinute) {
    minute.set(ip, recent);
    return { ok: false, message: "You're sending messages quickly. Please wait a minute and try again." };
  }
  if ((daily.get(ip) || 0) >= perIpDay) {
    return { ok: false, message: "That's the chat limit for today. Email the1337llc@gmail.com or use the contact form." };
  }
  if ((daily.get('*') || 0) >= perDay) {
    return { ok: false, message: 'The chat is resting for today. Email the1337llc@gmail.com or use the contact form.' };
  }

  recent.push(now);
  minute.set(ip, recent);
  daily.set(ip, (daily.get(ip) || 0) + 1);
  daily.set('*', (daily.get('*') || 0) + 1);

  if (minute.size > 5000) {
    for (const [k, v] of minute) if (!v.length || now - v[v.length - 1] > 60_000) minute.delete(k);
  }
  return { ok: true };
}

/** Tests only. */
export function resetLimits() {
  minute.clear();
  daily.clear();
  day = '';
}
