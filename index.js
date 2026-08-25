const hamburger = document.getElementById('hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  links.classList.toggle('active');
});

const themeToggle = document.getElementById('theme-toggle');

function toggleTheme() {
  if (themeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
}

themeToggle.addEventListener('change', toggleTheme);

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  themeToggle.checked = true;
}
