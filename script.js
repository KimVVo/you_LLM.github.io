// Example: Toggle navigation menu on mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// JavaScript to change the CSS file on click event
document.getElementById('changeThemeButton').addEventListener('click', function() {
    const link = document.getElementById('themeStylesheet');
    if (link.getAttribute('href') === 'light.css') {
        link.setAttribute('href', 'dark.css');
    } else {
        link.setAttribute('href', 'light.css');
    }
});
