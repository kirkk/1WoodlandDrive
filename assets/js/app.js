(function () {
  const p = window.PROPERTY || {};
  document.querySelectorAll('[data-property]').forEach((el) => {
    const key = el.getAttribute('data-property');
    if (p[key]) el.textContent = p[key];
  });
  document.querySelectorAll('[data-mailto]').forEach((el) => {
    if (p.email) el.setAttribute('href', `mailto:${p.email}`);
  });
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
