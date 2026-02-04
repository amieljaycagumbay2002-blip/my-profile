function initHeader() {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // sticky shadow effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 5);
  });
}
  