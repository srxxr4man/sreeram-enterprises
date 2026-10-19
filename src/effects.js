// src/effects.js
document.documentElement.classList.add('js');

function initEffects() {
  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  const observe = () =>
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el));
  observe();

  // Re-scan when React renders new sections
  new MutationObserver(observe).observe(document.body, { childList: true, subtree: true });

  // Cursor spotlight on glass cards
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest?.('.glass-card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEffects);
} else {
  initEffects();
}