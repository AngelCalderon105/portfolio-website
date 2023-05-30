const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('bg-black');
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
             
        });
        menu.classList.add('hidden');
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const offsetHeight = document.querySelector('header').offsetHeight;

    if (window.pageYOffset > offsetHeight) {
        navbar.classList.remove('md:bg-transparent');
        navbar.classList.add('md:bg-black', 'md:top-0', 'md:fixed');
    } else {
        navbar.classList.remove('md:bg-black', 'md:top-0', 'md:fixed');
        navbar.classList.add('md:bg-transparent');
    }
});

window.addEventListener("load", setElementHeight);
window.addEventListener("resize", setElementHeight);

function setElementHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    let element = document.getElementById('home');
    if (element) {
        element.style.height = 'calc(var(--vh) * 100)';
    }
}
