(function () {
  const property = window.PropertySite || {};
  const year = new Date().getFullYear();

  document.querySelectorAll('[data-property]').forEach((node) => {
    const key = node.getAttribute('data-property');
    if (property[key] !== undefined && property[key] !== '') node.textContent = property[key];
  });

  document.querySelectorAll('[data-mailto]').forEach((node) => {
    node.setAttribute('href', `mailto:${property.contactEmail || ''}`);
    node.textContent = property.contactEmail || 'Contact for details';
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = year;
  });

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
