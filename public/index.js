const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('nav');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        navbar.classList.add('bg-black');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('bg-black');
        navbar.classList.remove('bg-black');

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
   
    const offsetHeight = document.querySelector('header').offsetHeight;

    if (window.pageYOffset > offsetHeight) {
        navbar.classList.remove('md:bg-transparent');
        navbar.classList.add('md:bg-black', 'md:top-0', 'md:fixed');
    } else {
        navbar.classList.remove('md:bg-black', 'md:top-0', 'md:fixed');
        navbar.classList.add('md:bg-transparent');
    }
});


