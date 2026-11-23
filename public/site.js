/* Flagrr site: shared behaviour for the inner pages (smooth scroll, nav, get-the-app sheet, mobile menu, reveals) */
(function () {
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const touch = matchMedia('(hover: none)').matches;
gsap.registerPlugin(ScrollTrigger);
if (reduce) document.documentElement.classList.add('reduce');
let lenis = null;
if (!reduce && window.Lenis) {
  lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
  lenis.on('scroll', () => ScrollTrigger.update());
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const id = a.getAttribute('href'); if (id.length < 2) return; const el = document.querySelector(id); if (!el) return; e.preventDefault();
  if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 }); else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}));
if (location.hash.length > 1) addEventListener('load', () => { const el = document.querySelector(location.hash); if (el) setTimeout(() => { if (lenis) lenis.scrollTo(el, { offset: -80, immediate: true }); else el.scrollIntoView(); ScrollTrigger.refresh(); }, 60); });
function drawTopo2(sel, tone) {
  const c = typeof sel === 'string' ? document.querySelector(sel) : (sel || document.querySelector('.topo2')); if (!c) return;
  const W = c.clientWidth, H = c.clientHeight, dpr = Math.min(window.devicePixelRatio || 1, 2);
  c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
  const g = c.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
  const hash = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };
  const sm = (t) => t * t * (3 - 2 * t);
  const vn = (x, y) => { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const a = hash(xi, yi), b = hash(xi + 1, yi), c2 = hash(xi, yi + 1), d = hash(xi + 1, yi + 1), u = sm(xf), v = sm(yf);
    return a + (b - a) * u + (c2 - a) * v + (a - b - c2 + d) * u * v; };
  const fbm = (x, y) => vn(x, y) * 0.55 + vn(x * 2.1 + 5.2, y * 2.1 + 1.3) * 0.28 + vn(x * 4.3 + 9.7, y * 4.3 + 7.1) * 0.17;
  const cell = 9, cols = Math.ceil(W / cell) + 2, rows = Math.ceil(H / cell) + 2, f = new Float32Array(cols * rows);
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) f[y * cols + x] = fbm(x * cell / 430, y * cell / 430);
  const levels = 26;
  for (let l = 1; l < levels; l++) {
    const th = 0.18 + l * (0.68 / levels);
    g.beginPath();
    for (let y = 0; y < rows - 1; y++) for (let x = 0; x < cols - 1; x++) {
      const a = f[y * cols + x], b = f[y * cols + x + 1], cc = f[(y + 1) * cols + x + 1], d = f[(y + 1) * cols + x];
      const idx = (a > th ? 8 : 0) | (b > th ? 4 : 0) | (cc > th ? 2 : 0) | (d > th ? 1 : 0);
      if (idx === 0 || idx === 15) continue;
      const X = x * cell, Y = y * cell;
      const top = [X + cell * (th - a) / (b - a), Y], right = [X + cell, Y + cell * (th - b) / (cc - b)];
      const bottom = [X + cell * (th - d) / (cc - d), Y + cell], left = [X, Y + cell * (th - a) / (d - a)];
      const seg = (p, q) => { g.moveTo(p[0], p[1]); g.lineTo(q[0], q[1]); };
      switch (idx) {
        case 1: case 14: seg(left, bottom); break;
        case 2: case 13: seg(bottom, right); break;
        case 3: case 12: seg(left, right); break;
        case 4: case 11: seg(top, right); break;
        case 5: seg(left, top); seg(bottom, right); break;
        case 6: case 9: seg(top, bottom); break;
        case 7: case 8: seg(left, top); break;
        case 10: seg(left, bottom); seg(top, right); break;
      }
    }
    g.strokeStyle = tone === 'lime' ? (l % 5 === 0 ? 'rgba(205,222,92,.12)' : 'rgba(205,222,92,.045)') : (l % 5 === 0 ? 'rgba(31,66,52,.16)' : 'rgba(31,66,52,.07)');
    g.lineWidth = l % 5 === 0 ? 1.1 : 0.8; g.stroke();
  }
}
function makeEdge(svg, trigger, ph0) {
  const EW = 1440, EH = 200;
  const wave = (u, ph, k) => 0.5 + 0.2 * Math.sin(u * 6.1 + ph) + 0.12 * Math.sin(u * 13.7 - ph * 1.6 + k) + 0.06 * Math.sin(u * 29.3 + ph * 2.2 + k * 2);
  const path = (ph, off, k, close) => { let d = ''; for (let i = 0; i <= 80; i++) { const u = i / 80; d += (i ? 'L' : 'M') + (u * EW).toFixed(1) + ' ' + ((wave(u, ph, k) * 0.6 + off) * EH).toFixed(1); } return close ? d + `L${EW} ${EH + 4}L0 ${EH + 4}Z` : d; };
  const pf = svg.querySelector('.fill'), pl = svg.querySelector('.lime'), pls = ['.l0', '.l1', '.l2'].map((s) => svg.querySelector(s));
  const draw = (ph) => { pf.setAttribute('d', path(ph, 0.38, 0, true)); pl.setAttribute('d', path(ph, 0.38, 0, false)); pls.forEach((p, i) => p.setAttribute('d', path(ph * (1 - i * 0.15) + (i + 1) * 0.55, 0.38 - (i + 1) * 0.16, (i + 1) * 1.3, false))); };
  draw(ph0);
  if (!reduce) ScrollTrigger.create({ trigger, start: 'top bottom', end: 'top top', onUpdate: (s) => draw(ph0 + s.progress * 2.4) });
}
/* ---------- wayfinding: get-the-app, mobile menu, club-mode nav button ---------- */
(function () {
  const STORE = { ios: 'https://apps.apple.com/za/app/flagrr/id6796048910', android: 'https://play.google.com/store/apps/details?id=com.flagrr.loyalty&hl=en' };
  const MAIL = 'mailto:emile@ewosolutions.com?subject=Flagrr%20walkthrough%20for%20our%20club';
  const ua = navigator.userAgent, isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1), isAnd = /Android/.test(ua);
  const nav = document.querySelector('.nav'), sheet = document.getElementById('getapp'), menu = document.getElementById('mmenu'), burger = document.querySelector('.mburger');
  let lastFocus = null;
  const openSheet = () => { lastFocus = document.activeElement; sheet.hidden = false; if (lenis) lenis.stop(); gsap.fromTo(sheet.querySelector('.gapp-box'), { y: 30, autoAlpha: 0, scale: 0.97 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.45, ease: 'power3.out' }); gsap.fromTo(sheet.querySelector('.gapp-scrim'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }); sheet.querySelector('.gapp-x').focus(); };
  const closeSheet = () => { if (sheet.hidden) return; if (lenis && menu.hidden) lenis.start(); gsap.to(sheet.querySelector('.gapp-box'), { y: 20, autoAlpha: 0, duration: 0.25, ease: 'power2.in', onComplete: () => { sheet.hidden = true; if (lastFocus) lastFocus.focus({ preventScroll: true }); } }); };
  sheet.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeSheet, true));
  document.querySelectorAll('[data-getapp]').forEach((a) => {
    a.href = isAnd ? STORE.android : STORE.ios;
    a.addEventListener('click', (e) => {
      if (a.classList.contains('ncta') && nav.classList.contains('clubmode')) return; /* the nav button books a walkthrough on the club side */
      if (isIOS || isAnd) return; /* phones go straight to their store */
      e.preventDefault(); closeMenu(); openSheet();
    });
  });
  /* mobile menu */
  function openMenu() { menu.hidden = false; burger.setAttribute('aria-expanded', 'true'); burger.setAttribute('aria-label', 'Close menu'); document.body.classList.add('menu-open'); if (lenis) lenis.stop();
    gsap.fromTo(menu, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.55, ease: 'power3.inOut' });
    gsap.fromTo(menu.querySelectorAll('.mm-links a, .mm-ctas, .mm-login'), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.45, delay: 0.2, ease: 'power3.out' }); }
  function closeMenu() { if (menu.hidden) return; burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Open menu'); document.body.classList.remove('menu-open');
    gsap.to(menu, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.45, ease: 'power3.inOut', onComplete: () => { menu.hidden = true; } }); if (lenis && sheet.hidden) lenis.start(); }
  burger.addEventListener('click', () => (menu.hidden ? openMenu() : closeMenu()));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { if (!a.hasAttribute('data-getapp')) closeMenu(); }, true));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSheet(); closeMenu(); } });
  /* on the club side the nav button becomes "Book a walkthrough" */
  const ncta = document.querySelector('.ncta');
  new MutationObserver(() => { const club = nav.classList.contains('clubmode'); ncta.href = club ? MAIL : (isAnd ? STORE.android : STORE.ios); if (club) ncta.removeAttribute('target'); else ncta.target = '_blank'; }).observe(nav, { attributes: true, attributeFilter: ['class'] });
  if (nav.classList.contains('clubmode')) { ncta.href = MAIL; ncta.removeAttribute('target'); }
})();

const fe = document.querySelector('.foot-edge'); if (fe) makeEdge(fe, '.foot', 1.3);
/* magnetic buttons */
if (!touch && !reduce) document.querySelectorAll('.magnetic').forEach((el) => {
  const qx = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1,0.4)' }), qy = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1,0.4)' });
  el.addEventListener('mousemove', (e) => { const r = el.getBoundingClientRect(); qx((e.clientX - r.left - r.width / 2) * 0.28); qy((e.clientY - r.top - r.height / 2) * 0.4); });
  el.addEventListener('mouseleave', () => { qx(0); qy(0); });
});

/* nav turns light over cream sections */
document.querySelectorAll('[data-nav="light"]').forEach((sec) => ScrollTrigger.create({ trigger: sec, start: 'top 70px', end: 'bottom 70px', toggleClass: { targets: '.nav', className: 'light' } }));
/* headline lines rise out of their masks; [data-rv] blocks lift in */
if (!reduce) {
  document.querySelectorAll('.rv-lines').forEach((h) => gsap.fromTo(h.querySelectorAll('.line>span'), { yPercent: 150 }, { yPercent: 0, stagger: 0.09, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 88%', once: true } }));
  document.querySelectorAll('[data-rv]').forEach((el) => gsap.fromTo(el.children.length && el.hasAttribute('data-rv-kids') ? el.children : el, { y: 36, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
}
/* FAQ: one open at a time, animated height */
document.querySelectorAll('.faq').forEach((list) => {
  const items = [...list.querySelectorAll('.fq')];
  const set = (it, open) => { const a = it.querySelector('.fa'), b = it.querySelector('.fq-b'); b.setAttribute('aria-expanded', String(open)); it.classList.toggle('open', open);
    if (reduce) { a.style.height = open ? 'auto' : '0px'; return; }
    gsap.to(a, { height: open ? 'auto' : 0, duration: 0.5, ease: 'power3.inOut', onComplete: () => ScrollTrigger.refresh() }); };
  items.forEach((it) => { it.querySelector('.fa').style.height = '0px'; it.querySelector('.fq-b').addEventListener('click', () => { const open = !it.classList.contains('open'); items.forEach((o) => o !== it && o.classList.contains('open') && set(o, false)); set(it, open); }); });
});
/* inner-page hero: the title rises, a contour line draws across, the photo settles and drifts */
(function () {
  const h = document.querySelector('.phero'); if (!h) return;
  const c = h.querySelector('.ph-topo'); if (c) { drawTopo2(c, 'lime'); addEventListener('resize', () => drawTopo2(c, 'lime')); }
  const p = h.querySelector('.ph-line path');
  if (p) { let d = ''; for (let i = 0; i <= 90; i++) { const u = i / 90; d += (i ? 'L' : 'M') + (u * 1440).toFixed(1) + ' ' + (80 + 34 * Math.sin(u * 5.3 + 0.6) + 16 * Math.sin(u * 13.1 + 2) + 6 * Math.sin(u * 27.7)).toFixed(1); } p.setAttribute('d', d); }
  if (reduce) return;
  gsap.fromTo(h.querySelectorAll('.ptitle .line>span'), { yPercent: 150 }, { yPercent: 0, stagger: 0.1, duration: 1.3, ease: 'power4.out', delay: 0.15 });
  gsap.fromTo(h.querySelectorAll('[data-hin]'), { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.08, duration: 1, ease: 'power3.out', delay: 0.55 });
  const img = h.querySelector('.ph-bg img');
  if (img) { gsap.fromTo(img, { scale: 1.14 }, { scale: 1.02, duration: 2.6, ease: 'power2.out' }); gsap.to(img, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: h, start: 'top top', end: 'bottom top', scrub: true } }); }
  if (p) { const L = p.getTotalLength(); gsap.fromTo(p, { strokeDasharray: L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut', delay: 0.35 }); gsap.to('.ph-line', { yPercent: -60, ease: 'none', scrollTrigger: { trigger: h, start: 'top top', end: 'bottom top', scrub: true } }); }
  gsap.to(h.querySelector('.ph-in'), { y: -70, autoAlpha: 0, ease: 'none', scrollTrigger: { trigger: h, start: '45% top', end: 'bottom top', scrub: true } });
})();
/* closing bands: the photo drifts as the band passes */
if (!reduce) document.querySelectorAll('.band .ph-bg img').forEach((img) => gsap.fromTo(img, { yPercent: -8, scale: 1.12 }, { yPercent: 8, scale: 1.02, ease: 'none', scrollTrigger: { trigger: img.closest('.band'), start: 'top bottom', end: 'bottom top', scrub: true } }));
window.FL = { reduce, touch, lenis, drawTopo2, makeEdge, fmt: (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') };
})();

/* ---------- instagram strip (every page): live on flagrr.com ---------- */
(function () {
function initInstagram() {
  const sec = document.querySelector('.ig'); if (!sec) return;
  const grid = sec.querySelector('.ig-grid');
  const IG = sec.querySelector('.ig-follow svg').outerHTML;
  const PLAY = '<svg class="ig-kind" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5.5v13l10.5-6.5z"/></svg>';
  const STACK = '<svg class="ig-kind" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M7 3h11a3 3 0 0 1 3 3v11M4 7h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 1-2z"/></svg>';
  const esc = (t) => String(t || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  if (true) {
    fetch('/api/instagram', { headers: { accept: 'application/json' } })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        const posts = d && Array.isArray(d.posts) ? d.posts.filter((p) => p.image && p.permalink).slice(0, 6) : [];
        if (posts.length < 6) return;
        grid.innerHTML = posts.map((p) => {
          const alt = esc((p.alt || p.caption || 'Flagrr on Instagram').split('\n')[0].slice(0, 120));
          const kind = p.type === 'VIDEO' ? PLAY : p.type === 'CAROUSEL_ALBUM' ? STACK : '';
          return '<li><a class="ig-tile" href="' + esc(p.permalink) + '" target="_blank" rel="noopener"><img src="' + esc(p.image) + '" alt="' + alt + '" loading="lazy" decoding="async">' + kind + '<span class="ig-ov" aria-hidden="true">' + IG + '</span></a></li>';
        }).join('');
        if (window.ScrollTrigger) ScrollTrigger.refresh();
      })
      .catch(() => {});
  }
  if (FL.reduce) return;
  gsap.fromTo('.igh .line>span', { yPercent: 150 }, { yPercent: 0, duration: 1.1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.ig', start: 'top 75%', once: true } });
  gsap.from(['.ig .eyebrow', '.ig-side'], { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.ig', start: 'top 75%', once: true } });
  gsap.from('.ig-grid li', { y: 60, autoAlpha: 0, duration: 1, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '.ig-grid', start: 'top 88%', once: true } });
}
initInstagram();
})();
