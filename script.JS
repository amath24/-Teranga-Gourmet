// Sélection des éléments
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const body = document.body;

// Événement click pour afficher/masquer le menu
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  body.classList.toggle('menu-open');
  toggle.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    body.classList.remove('menu-open');
    toggle.classList.remove('active');
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !toggle.contains(e.target) && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
    body.classList.remove('menu-open');
    toggle.classList.remove('active');
  }
});
