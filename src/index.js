const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
})

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


const navbar = document.querySelector('nav');
const section1 = document.querySelector('#section1');
const section1OffsetTop = section1.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= section1OffsetTop) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.classList.add('bg-black');
    } else {
        navbar.style.position = 'static';
        navbar.classList.add('bg-transparent');
    }
});
