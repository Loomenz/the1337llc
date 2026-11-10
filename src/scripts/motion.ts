import 'lenis/dist/lenis.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Smooth inertial scrolling driven by GSAP's ticker
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
        const box = h.getBoundingClientRect();
        h.querySelectorAll<HTMLElement>('.grad .char').forEach((c) => {
          const r = c.getBoundingClientRect();
          c.style.backgroundSize = `${box.width}px 100%`;
          c.style.backgroundPosition = `${box.left - r.left}px 0`;
        });
        return gsap.from(s.chars, {
          yPercent: 110,
          rotate: 5,
          opacity: 0,
          duration: 0.85,
          ease: 'expo.out',
          stagger: 0.016,
          scrollTrigger: { trigger: h, start: 'top 86%', once: true },
        });
      },
    });
  });
}

export function initMotion() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('motion');
  smoothScroll();
  document.fonts.ready.then(headlines);
}
