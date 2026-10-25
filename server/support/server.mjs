// Website chat endpoint for the1337llc.com. The site itself stays static (nginx serves dist/);
// nginx proxies only /api/support here. Listens on 127.0.0.1 so it can't be reached from outside.
//   POST /api/support  { messages: [{ role: "user" | "assistant", text }] } -> { reply } or { error }
//   GET  /api/support/health -> { ok: true }
// Run: node server/support/server.mjs   (ANTHROPIC_API_KEY from the environment; PORT default 3137)
import http from 'node:http';
import { pathToFileURL } from 'node:url';
import { handleChatRequest, clientIp } from './handler.mjs';

const MAX_BODY_BYTES = 32_000;

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
}

export function createServer() {
  return http.createServer((req, res) => {
    const path = (req.url || '').split('?')[0].replace(/\/+$/, '');
    if (req.method === 'GET' && path === '/api/support/health') return send(res, 200, { ok: true });
    if (path !== '/api/support') return send(res, 404, { error: 'Not found' });
    if (req.method !== 'POST') return send(res, 405, { error: 'Use POST' });

    let raw = '';
    let tooBig = false;
    req.on('data', (chunk) => {
      if (tooBig) return;
      raw += chunk;
      if (raw.length > MAX_BODY_BYTES) {
        tooBig = true;
        send(res, 413, { error: 'This chat is too long. Please refresh the page to start a new one.' });
        req.destroy();
      }
    });
    req.on('end', async () => {
      if (tooBig) return;
      let body;
      try {
        body = JSON.parse(raw);
      } catch {
        return send(res, 400, { error: 'Please type a question.' });
      }
      try {
        const result = await handleChatRequest(body, clientIp(req.headers));
        send(res, result.status, result.body);
      } catch (err) {
        console.error('[SupportBot] Request failed:', err.message);
        send(res, 500, { error: 'Sorry, something went wrong. Email the1337llc@gmail.com.' });
      }
    });
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT) || 3137;
  createServer().listen(port, '127.0.0.1', () => {
    console.log(`[SupportBot] Listening on 127.0.0.1:${port}${process.env.ANTHROPIC_API_KEY ? '' : ' (no ANTHROPIC_API_KEY: offline replies only)'}`);
  });
}
