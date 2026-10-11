const html = document.documentElement;
const themeButton = document.getElementById('theme-toggle');

themeButton.addEventListener('click', function () {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    themeButton.textContent = 'Dar