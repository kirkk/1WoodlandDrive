(function () {
  const property = window.PropertySite || {};
  const grid = document.querySelector('[data-gallery-grid]');
  const filterWrap = document.querySelector('[data-gallery-filters]');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeButton = document.querySelector('.lightbox-close');
  if (!grid || !property.gallery) return;

  const categories = ['All', ...new Set(property.gallery.map((item) => item.category))];
  if (filterWrap) {
    filterWrap.innerHTML = categories.map((cat, idx) => `<button class="filter-button${idx === 0 ? ' active' : ''}" data-filter="${cat}">${cat}</button>`).join('');
  }

  function render(category = 'All') {
    const items = category === 'All' ? property.gallery : property.gallery.filter((item) => item.category === category);
    grid.innerHTML = items.map((item, index) => `
      <button class="gallery-card" data-index="${property.gallery.indexOf(item)}" aria-label="Open ${item.title}">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <span>${item.category}</span>
        <strong>${item.title}</strong>
      </button>
    `).join('');
  }

  render();

  if (filterWrap) {
    filterWrap.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) return;
      filterWrap.querySelectorAll('button').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      render(button.dataset.filter);
    });
  }

  grid.addEventListener('click', (event) => {
    const card = event.target.closest('.gallery-card');
    if (!card || !lightbox) return;
    const item = property.gallery[Number(card.dataset.index)];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;
    lightboxCaption.textContent = `${item.title} • ${item.category}`;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
  });

  function close() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.removeAttribute('src');
  }

  closeButton?.addEventListener('click', close);
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
})();
