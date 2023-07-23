const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const body = document.body;

themeToggleCheckbox.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

// Check local storage to see if the theme was previously set
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  themeToggleCheckbox.checked = true;
  body.classList.add('dark-theme');
} else {
  themeToggleCheckbox.checked = false;
  body.classList.remove('dark-theme');
}
