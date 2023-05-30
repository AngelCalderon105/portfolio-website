const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
        menu.classList.remove('bg-black');
    }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
             
        });
        menu.classList.add('hidden');
    });
});




