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
        rotationX: -6,
        transformPerspective: 1400,
        filter: 'brightness(.72)',
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 75%', end: () => `top ${110 + (i + 1) * 14}px`, scrub: true },
      });
    });
  });
}

export function initMotion() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('motion');
  smoothScroll();
  stackCards();
  document.fonts.ready.then(headlines);
}
