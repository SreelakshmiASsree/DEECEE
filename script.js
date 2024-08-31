document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.harmbtn');
    const navLinks = document.querySelector('.nav_links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});