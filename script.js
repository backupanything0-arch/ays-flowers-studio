const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

// Open / close with the hamburger
toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

// Close after a link is chosen
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

// Close with the Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    setMenu(false);
    toggle.focus();
  }
});

// Reset if the window is widened to desktop size
window.matchMedia('(min-width: 900px)').addEventListener('change', e => {
  if (e.matches) setMenu(false);
});