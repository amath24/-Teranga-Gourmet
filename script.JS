// Sélection des éléments
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// Événement click pour afficher/masquer le menu
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
