const CH = '!<>-_\\/[]{}=+*^?#01337';

// Scrambles el's text into `to`, one character at a time.
export function scramble(el: HTMLElement, to: string, dur = 900) {
  const from = el.textContent || '';
  const len = Math.max(from.length, to.length);
  let start: number | null = null;
  const q = [...Array(len)].map((_, i) => ({ f: from[i] || '', t: to[i] || '', s: Math.random() * dur * .4, e: dur * .4 + Math.random() * dur * .6 }));
  function tick(ts: number) {
    if (!start) start = ts;
    const t = ts - start;
    let out = '', done = 0;
    q.forEach((c) => {
      if (t >= c.e) { done++; out += c.t; }
      else if (t >= c.s) out += '<span style="color:var(--dim)">' + CH[Math.floor(Math.random() * CH.length)] + '</span>';
      else out += c.f;
    });
    el.innerHTML = out;
    if (done < q.length) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
