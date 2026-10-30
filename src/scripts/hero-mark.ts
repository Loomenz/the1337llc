// The 1337 growth-bars mark as a slowly turning 3D particle sculpture.
// Points fly in and assemble on load, scatter away from the pointer, then spring back.

const BARS = [7.4, 22.2, 22.2, 51.8]; // bar heights from the logo (viewBox 55 x 52)
const DEPTH = 10;
const LIGHT = [236, 236, 236];
const GREY = [160, 160, 160];

type P = { x: number; y: number; z: number; sx: number; sy: number; sz: number; d: number; ox: number; oy: number; vx: number; vy: number; c: string };

// Spread points over the six faces of each bar, weighted by face area.
function sample(n: number): P[] {
  const faces: { o: number[]; u: number[]; v: number[]; a: number }[] = [];
  BARS.forEach((h, i) => {
    const x0 = i * 15, x1 = x0 + 10, y0 = 51.8 - h, z0 = -DEPTH / 2, z1 = DEPTH / 2;
    const add = (o: number[], u: number[], v: number[]) => faces.push({ o, u, v, a: Math.hypot(...u) * Math.hypot(...v) });
    add([x0, y0, z1], [10, 0, 0], [0, h, 0]); add([x0, y0, z0], [10, 0, 0], [0, h, 0]);
    add([x0, y0, z0], [0, 0, DEPTH], [0, h, 0]); add([x1, y0, z0], [0, 0, DEPTH], [0, h, 0]);
    add([x0, y0, z0], [10, 0, 0], [0, 0, DEPTH]);
  });
  const total = faces.reduce((s, f) => s + f.a, 0);
  const pts: P[] = [];
  for (const f of faces) {
    const k = Math.round((f.a / total) * n);
    for (let j = 0; j < k; j++) {
      // bias toward edges so the bar outlines read crisply
      const edge = (t: number) => (Math.random() < 0.35 ? (Math.random() < 0.5 ? 0 : 1) + (Math.random() - 0.5) * 0.04 : t);
      const a = edge(Math.random()), b = edge(Math.random());
      const x = f.o[0] + f.u[0] * a + f.v[0] * b - 27.5;
      const y = f.o[1] + f.u[1] * a + f.v[1] * b - 26;
      const z = f.o[2] + f.u[2] * a + f.v[2] * b;
      const t = 1 - (y + 26) / 51.8;
      const col = LIGHT.map((g, i) => Math.round(g + (GREY[i] - g) * t)).join(',');
      const th = Math.random() * Math.PI * 2, ph = Math.acos(Math.random() * 2 - 1), r = 140 + Math.random() * 120;
      pts.push({ x, y, z, sx: r * Math.sin(ph) * Math.cos(th), sy: r * Math.cos(ph), sz: r * Math.sin(ph) * Math.sin(th),
        d: Math.random() * 0.5, ox: 0, oy: 0, vx: 0, vy: 0, c: col });
    }
  }
  return pts;
}

export function heroMark() {
  const canvas = document.getElementById('mark3d') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const host = canvas.closest('section')!;
  const mouse = { x: -9999, y: -9999, nx: 0, ny: 0 };
  let w = 0, h = 0, dpr = 1, cx = 0, cy = 0, scale = 1, pts: P[] = [], running = true;
  const t0 = performance.now();
  const dust = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), s: Math.random() * 0.00012 + 0.00004, r: Math.random() }));

  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas!.clientWidth; h = canvas!.clientHeight;
    canvas!.width = w * dpr; canvas!.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const wide = w > 980;
    cx = wide ? w * 0.75 : w * 0.7;
    cy = wide ? h * 0.52 : h * 0.26;
    scale = wide ? Math.min((w * 0.3) / 55, (h * 0.66) / 52) : Math.min((w * 0.44) / 55, (h * 0.26) / 52);
    if (!pts.length || (pts.length > 3000) !== wide) pts = sample(wide ? 4800 : 1800);
  }

  const ease = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

  function frame(now: number) {
    if (!running) return;
    const time = reduce ? 4000 : now - t0;
    ctx.clearRect(0, 0, w, h);

    // drifting dust for depth
    ctx.fillStyle = 'rgba(155,155,155,.35)';
    for (const d of dust) {
      const y = (d.y - time * d.s) % 1, yy = (y < 0 ? y + 1 : y) * h;
      ctx.fillRect(d.x * w, yy, 1 + d.r, 1 + d.r);
    }

    // slow turn, leaning toward the pointer
    mouse.nx += ((mouse.x > -9000 ? (mouse.x / w - 0.5) : 0) - mouse.nx) * 0.04;
    mouse.ny += ((mouse.y > -9000 ? (mouse.y / h - 0.5) : 0) - mouse.ny) * 0.04;
    const ry = Math.sin(time * 0.00025) * 0.55 - 0.35 + mouse.nx * 0.5;
    const rx = -0.18 + mouse.ny * 0.25;
    const cyR = Math.cos(ry), syR = Math.sin(ry), cxR = Math.cos(rx), sxR = Math.sin(rx);
    const f = 220;

    ctx.globalCompositeOperation = 'lighter';
    for (const p of pts) {
      const k = ease(Math.max(0, (time / 1000 - 0.2 - p.d) / 2));
      const x = p.sx + (p.x - p.sx) * k, y = p.sy + (p.y - p.sy) * k, z = p.sz + (p.z - p.sz) * k;
      // rotate Y then X
      const x1 = x * cyR + z * syR, z1 = -x * syR + z * cyR;
      const y2 = y * cxR - z1 * sxR, z2 = y * sxR + z1 * cxR;
      const persp = f / (f + z2);
      const px = cx + x1 * scale * persp, py = cy + y2 * scale * persp;

      // pointer pushes points away; a spring pulls them home
      if (!reduce) {
        const dx = px + p.ox - mouse.x, dy = py + p.oy - mouse.y, dd = dx * dx + dy * dy;
        if (dd < 12000) { const m = (1 - dd / 12000) * 1.6 / Math.sqrt(dd + 1); p.vx += dx * m; p.vy += dy * m; }
        p.vx = (p.vx - p.ox * 0.04) * 0.88; p.vy = (p.vy - p.oy * 0.04) * 0.88;
        p.ox += p.vx; p.oy += p.vy;
      }
      const a = (0.25 + 0.6 * (1 - (z2 + 30) / 60)) * (0.3 + 0.7 * k);
      ctx.fillStyle = `rgba(${p.c},${a.toFixed(2)})`;
      const s = 1.6 * persp;
      ctx.fillRect(px + p.ox, py + p.oy, s, s);
    }
    ctx.globalCompositeOperation = 'source-over';
    if (!reduce) requestAnimationFrame(frame);
  }

  size();
  addEventListener('resize', size);
  if (reduce) { requestAnimationFrame(frame); return; }
  host.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  host.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  // stop drawing while the hero is off screen
  new IntersectionObserver(([e]) => {
    const was = running;
    running = e.isIntersecting;
    if (running && !was) requestAnimationFrame(frame);
  }).observe(canvas);
  requestAnimationFrame(frame);
}
