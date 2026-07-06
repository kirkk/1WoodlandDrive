(function () {
  const modal = document.querySelector('.lightbox');
  if (!modal) return;
  const image = modal.querySelector('img');
  const caption = modal.querySelector('.lightbox-caption');
  document.querySelectorAll('[data-lightbox]').forEach((btn) => {
    btn.addEventListener('click', () => {
      image.src = btn.getAttribute('data-full');
      image.alt = btn.querySelector('img')?.alt || 'Property photo';
      caption.textContent = btn.querySelector('img')?.alt || '';
      modal.showModal();
    });
  });
  modal.querySelector('[data-close]').addEventListener('click', () => modal.close());
})();
