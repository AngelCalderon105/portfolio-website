const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('nav');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-transparent');
    } else {
        menu.classList.add('hidden');
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-transparent');
       

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
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-black');
    } else {
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-transparent');
    }
});


