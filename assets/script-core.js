document.addEventListener('DOMContentLoaded', () => {
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  const toggleOpen = (el) => {
    if (!el) return false;
    const open = !el.classList.contains('open');
    el.classList.toggle('open', open);
    return open;
  };

  $$('[data-expand]').forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      const card = btn.closest('.tc-card') || btn.parentElement;
      const box = document.getElementById(btn.dataset.expand) || (card ? card.querySelector('.expand') : null);
      if (!box) return;
      const open = toggleOpen(box);
      btn.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  const rope = document.getElementById('rope');
  const ropeWrap = document.getElementById('ropeWrap');
  const panel = document.getElementById('panel');
  const closeMenu = () => {
    if (!ropeWrap || !panel) return;
    ropeWrap.classList.remove('open');
    ropeWrap.classList.add('closing');
    panel.classList.remove('open');
    rope.classList.add('up');
    setTimeout(() => ropeWrap.classList.remove('closing'), 280);
  };
  if (rope && ropeWrap && panel) {
    const toggleMenu = () => {
      if (ropeWrap.classList.contains('open')) closeMenu();
      else {
        ropeWrap.classList.add('open');
        panel.classList.add('open');
        rope.classList.remove('up');
      }
    };
    rope.addEventListener('click', toggleMenu);
    rope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
      if (!ropeWrap.classList.contains('open')) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(closeMenu, 30);
    }, { passive: true });
    document.addEventListener('click', (e) => {
      if (ropeWrap.classList.contains('open') && !rope.contains(e.target) && !panel.contains(e.target)) closeMenu();
    });
  }

  $$('[data-open-album]').forEach(btn => btn.addEventListener('click', () => {
    const card = btn.closest('.albumcard');
    if (card) card.classList.add('sheet-open');
  }));
  $$('[data-close-album]').forEach(btn => btn.addEventListener('click', () => {
    const card = btn.closest('.albumcard');
    if (card) card.classList.remove('sheet-open');
  }));
  $$('[data-open-detail]').forEach(btn => btn.addEventListener('click', () => {
    const card = btn.closest('.team-card');
    if (card) card.classList.add('sheet-open');
  }));
  $$('[data-close-detail]').forEach(btn => btn.addEventListener('click', () => {
    const card = btn.closest('.team-card');
    if (card) card.classList.remove('sheet-open');
  }));

  $$('.track-toggle').forEach(btn => btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.track);
    if (!target) return;
    const open = toggleOpen(target);
    btn.classList.toggle('open', open);
  }));

  const track = document.getElementById('galleryTrack');
  const prev = document.querySelector('.gallery-prev');
  const next = document.querySelector('.gallery-next');
  if (track && prev && next) {
    const slides = [...track.children];
    let i = 0;
    const show = () => { track.style.transform = `translateX(${-i * 100}%)`; };
    prev.addEventListener('click', () => { i = (i - 1 + slides.length) % slides.length; show(); });
    next.addEventListener('click', () => { i = (i + 1) % slides.length; show(); });
    show();
  }
});
