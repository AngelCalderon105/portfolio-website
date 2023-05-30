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
        navbar.classList.add('md:bg-black', 'top-0', 'fixed');
    } else {
        navbar.classList.remove('md:bg-black', 'top-0', 'fixed');
        navbar.classList.add('md:bg-transparent');
    }
});