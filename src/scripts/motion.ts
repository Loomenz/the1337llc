import 'lenis/dist/lenis.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
function smoothScroll() {
  const lenis = new Lenis({ anchors: { offset: -90 }, lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Section headlines rise in letter by letter as they scroll into view.
function headlines() {
  document.querySelectorAll<HTMLElement>('.head h2, #process h2, .contact h2, .cta-box h2').forEach((h) => {
    h.closest('.reveal')?.classList.add('in');
    SplitText.create(h, {
      type: 'words,chars',
      mask: 'words',
      wordsClass: 'sw',
      charsClass: 'char',
      autoSplit: true,
      onSplit: (s) => {
        // Each letter paints its own slice of the gradient so split .grad text still looks continuous.
        const box = h.getBoundingClientRect();
        h.querySelectorAll<HTMLElement>('.grad .char').forEach((c) => {
          const r = c.getBoundingClientRect();
          c.style.backgroundSize = `${box.width}px 100%`;
          c.style.backgroundPosition = `${box.left - r.left}px 0`;
        });
        return gsap.from(s.chars, {
        yPercent: 110,
        rotate: 6,
        opacity: 0,
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.018,
          scrollTrigger: { trigger: h, start: 'top 85%', once: true },
        });
      },
    });
  });
}

// Systems cards pin under the header and stack; earlier cards sink back as the next one arrives.
function stackCards() {
  gsap.matchMedia().add('(min-width: 981px)', () => {
    const cards = gsap.utils.toArray<HTMLElement>('.stack > .tile');
    cards.forEach((card, i) => {
      card.style.setProperty('--i', String(i));
      const next = cards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.94 + i * 0.006,
        filter: 'brightness(.6)',
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 75%', end: () => `top ${110 + (i + 1) * 14}px`, scrub: true },
      });
    });
  });
}

// Hero terminal drifts slower than the page for a bit of depth.
function parallax() {
  gsap.to('.hero .term', {
    yPercent: -18,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
}

// Particle network behind the hero that reacts to the pointer.
function particles() {
  const canvas = document.getElementById('particles') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;
  const colors = ['57,255,136', '34,211,238', '139,92,246'];
  const mouse = { x: -9999, y: -9999 };
  let w = 0, h = 0, dpr = 1, running = true;
  let pts: { x: number; y: number; vx: number; vy: number; c: string; r: number }[] = [];

  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas!.clientWidth; h = canvas!.clientHeight;
    canvas!.width = w * dpr; canvas!.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(90, (w * h) / 16000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      c: colors[Math.floor(Math.random() * colors.length)], r: Math.random() * 1.6 + 0.6,
    }));
  }

  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 140) { p.vx += (dx / d) * 0.06; p.vy += (dy / d) * 0.06; }
      p.vx *= 0.985; p.vy *= 0.985;
      if (Math.hypot(p.vx, p.vy) < 0.12) { p.vx += (Math.random() - 0.5) * 0.05; p.vy += (Math.random() - 0.5) * 0.05; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(${a.c},${(1 - d / 130) * 0.22})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      ctx.fillStyle = `rgba(${a.c},.8)`;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(frame);
  }

  size();
  addEventListener('resize', size);
  canvas.parentElement!.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  canvas.parentElement!.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  // stop drawing while the hero is off screen
  new IntersectionObserver(([e]) => {
    const was = running;
    running = e.isIntersecting;
    if (running && !was) requestAnimationFrame(frame);
  }).observe(canvas);
  requestAnimationFrame(frame);
}

export function initMotion() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('motion');
  smoothScroll();
  particles();
  parallax();
  stackCards();
  document.fonts.ready.then(headlines);
}
