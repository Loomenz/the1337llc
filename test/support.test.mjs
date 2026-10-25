// Website chat endpoint against a fake Claude API on localhost (real SDK, no network).
// Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';

const calls = [];
let reply = () => ({ status: 500, json: {} });
const claude = http.createServer((req, res) => {
  let raw = '';
  req.on('data', (c) => (raw += c));
  req.on('end', () => {
    const body = JSON.parse(raw || '{}');
    calls.push({ url: req.url, body });
    const out = reply(body);
    res.writeHead(out.status, { 'content-type': 'application/json' });
    res.end(JSON.stringify(out.json));
  });
});

const message = (model, text, extra = {}) => ({
  status: 200,
  json: {
    id: 'msg_test', type: 'message', role: 'assistant', model,
    content: text ? [{ type: 'text', text }] : [],
    stop_reason: 'end_turn', stop_details: null,
    usage: { input_tokens: 40, output_tokens: 20, cache_read_input_tokens: 2000 },
    ...extra,
  },
});
const refusal = (model) => message(model, '', { stop_reason: 'refusal', stop_details: { type: 'refusal', category: 'general_harms', explanation: 'test' } });
const badRequest = { status: 400, json: { type: 'error', error: { type: 'invalid_request_error', message: 'nope' } } };

let handler, selector, limits, bot, app, appUrl;
test.before(async () => {
  await new Promise((r) => claude.listen(0, '127.0.0.1', r));
  process.env.ANTHROPIC_BASE_URL = `http://127.0.0.1:${claude.address().port}`;
  process.env.ANTHROPIC_API_KEY = 'test-key';
  handler = await import('../server/support/handler.mjs');
  selector = await import('../server/support/selector.mjs');
  limits = await import('../server/support/rateLimit.mjs');
  bot = await import('../server/support/bot.mjs');
  app = (await import('../server/support/server.mjs')).createServer();
  await new Promise((r) => app.listen(0, '127.0.0.1', r));
  appUrl = `http://127.0.0.1:${app.address().port}`;
});
test.after(() => { claude.close(); app.close(); });
test.beforeEach(() => { calls.length = 0; limits.resetLimits(); });

const ask = (text, history = [], ip = '1.2.3.4') =>
  handler.handleChatRequest({ messages: [...history, { role: 'user', text }] }, ip);

test('everyday question goes to Haiku with the knowledge cached in the system prompt', async () => {
  reply = (b) => message(b.model, 'Starter is $1,200. See [Free Google check](/free-audit/).');
  const out = await ask('how much for a website');
  assert.equal(out.status, 200);
  assert.match(out.body.reply, /1,200/);
  const body = calls[0].body;
  assert.equal(body.model, 'claude-haiku-5-5');
  assert.equal(body.system[0].cache_control.type, 'ephemeral');
  assert.match(body.system[0].text, /1337 LLC/);
  assert.equal(body.output_config.effort, 'low');
  assert.deepEqual(body.messages, [{ role: 'user', content: 'how much for a website' }]);
});

test('Haiku declines -> Opus once with server-side fallback', async () => {
  reply = (b) => (b.model === 'claude-haiku-5-5' ? refusal(b.model) : message(b.model, 'Happy to help.'));
  const out = await ask('Do you do logos?');
  assert.equal(out.body.reply, 'Happy to help.');
  assert.deepEqual(calls.map((c) => c.body.model), ['claude-haiku-5-5', 'claude-opus-5-5']);
  assert.equal(calls[1].body.fallbacks, 'default');
  assert.match(calls[1].url, /beta=true/);
});

test('both fail -> offline reply with the email and contact form', async () => {
  reply = () => badRequest;
  const out = await ask('Hello?');
  assert.equal(out.body.reply, bot.OFFLINE_REPLY);
  assert.match(out.body.reply, /the1337llc@gmail\.com/);
  assert.match(out.body.reply, /\/#contact/);
});

test('history: leading bot turns dropped, roles alternate', async () => {
  reply = (b) => message(b.model, 'ok');
  await ask('and the Growth plan?', [
    { role: 'assistant', text: 'Hi! Ask me anything.' },
    { role: 'user', text: 'What is in the Care plan?' },
    { role: 'assistant', text: 'Hosting and edits.' },
  ]);
  assert.deepEqual(calls[0].body.messages.map((m) => m.role), ['user', 'assistant', 'user']);
});

test('message length cap and bad input are refused before Claude', async () => {
  assert.equal((await ask('x'.repeat(501))).status, 400);
  assert.equal((await handler.handleChatRequest({ messages: [] }, 'a')).status, 400);
  assert.equal((await handler.handleChatRequest({ messages: [{ role: 'system', text: 'hi' }] }, 'a')).status, 400);
  assert.equal((await handler.handleChatRequest({ messages: [{ role: 'assistant', text: 'hi' }] }, 'a')).status, 400);
  assert.equal(calls.length, 0);
});

test('per-IP minute limit and site-wide daily cap', async () => {
  reply = (b) => message(b.model, 'ok');
  for (let i = 0; i < 8; i++) assert.equal((await ask(`question ${i}`)).status, 200);
  assert.equal((await ask('one more')).status, 429);
  assert.equal((await ask('other visitor', [], '5.6.7.8')).status, 200);

  limits.resetLimits();
  process.env.SUPPORT_LIMIT_PER_DAY = '2';
  try {
    assert.equal((await ask('a', [], '10.0.0.1')).status, 200);
    assert.equal((await ask('b', [], '10.0.0.2')).status, 200);
    assert.equal((await ask('c', [], '10.0.0.3')).status, 429);
  } finally {
    delete process.env.SUPPORT_LIMIT_PER_DAY;
  }
});

test('HTTP: POST answers, health is up, wrong method, bad JSON and huge bodies are refused, IP from X-Real-IP', async () => {
  reply = (b) => message(b.model, 'Hi there.');
  const post = (body, headers = {}) => fetch(`${appUrl}/api/support`, { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body });

  const ok = await post(JSON.stringify({ messages: [{ role: 'user', text: 'hello' }] }), { 'x-real-ip': '9.9.9.9' });
  assert.equal(ok.status, 200);
  assert.deepEqual(await ok.json(), { reply: 'Hi there.' });
  assert.equal(ok.headers.get('cache-control'), 'no-store');

  assert.equal((await fetch(`${appUrl}/api/support/health`)).status, 200);
  assert.equal((await fetch(`${appUrl}/api/support`)).status, 405);
  assert.equal((await fetch(`${appUrl}/other`)).status, 404);
  assert.equal((await post('{not json')).status, 400);
  assert.equal((await post('x'.repeat(40_000))).status, 413);

  assert.equal(handler.clientIp({ 'x-real-ip': '9.9.9.9', 'x-forwarded-for': '1.1.1.1' }), '9.9.9.9');
  assert.equal(handler.clientIp({ 'x-forwarded-for': '1.1.1.1, 2.2.2.2' }), '1.1.1.1');
  assert.equal(handler.clientIp({}), 'unknown');
});

test('selector: Opus for upset, problems, repeats and long messages; Haiku otherwise', () => {
  const pick = (text, history = []) => selector.pickModel([...history, { role: 'user', text }]);
  assert.equal(pick('Do you build sites for plumbers?').model, 'claude-haiku-5-5');
  assert.equal(pick('This is ridiculous').reason, 'upset');
  assert.equal(pick('WHY IS MY SITE STILL NOT FIXED').reason, 'upset');
  assert.equal(pick('hello???').reason, 'upset');
  assert.equal(pick('My website is down since this morning').reason, 'problem');
  assert.equal(pick('I want a refund').reason, 'problem');
  assert.equal(pick('how long does a site take', [{ role: 'user', text: 'How long does a site take?' }]).reason, 'repeated');
  assert.equal(pick('a '.repeat(250)).reason, 'long');
  assert.equal(pick('Price? Timeline? Hosting?').reason, 'long');
});
