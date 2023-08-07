const themeToggle = document.getElementById('themeToggle');
const navLinks = document.getElementById('navLinks');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  navLinks.classList.toggle('show');
});

// Close the navigation menu when a link is clicked (for mobile view)
navLinks.addEventListener('click', () => {
  navLinks.classList.remove('show');
});
window.alert("hello world");