const hamburger = document.querySelector('.hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    hamburger.classList.toggle('open');
});