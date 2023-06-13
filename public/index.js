const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('nav');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        navbar.classList.add('bg-black');
       
    } else {
        menu.classList.add('hidden');
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
       
        navbar.classList.add('bg-black');
    } else {
        navbar.classList.remove('bg-black');
       
    }
});


// Get list items and cards
const roleItem = document.getElementById('roleItem');
const skillsItem = document.getElementById('skillsItem');
const extraCurricularItem = document.getElementById('extraCurricularItem');
const roleCard = document.getElementById('roleCard');
const skillsCard = document.getElementById('skillsCard');
const extraCurricularCard = document.getElementById('extraCurricularCard');

// Create an array of cards for easy access
const cards = [roleCard, skillsCard, extraCurricularCard];
const items = [roleItem, skillsItem, extraCurricularItem];

// Function to hide all cards
function hideAllCards() {
    cards.forEach(card => {
        card.style.animation = '';
        card.classList.add('hidden');

    });
    items.forEach(item => {
        item.classList.remove('text-blue-500','underline');

    })
}

// Function to show a card with animation
function showCard(card) {
    card.classList.remove('hidden');
    card.style.animation = 'slideInFromRight .7s forwards';
}

// Add click event listeners to list items
roleItem.addEventListener('click', () => {
    hideAllCards();
    showCard(roleCard);
    roleItem.classList.add('text-blue-500','underline');
});

skillsItem.addEventListener('click', () => {
    hideAllCards();
    showCard(skillsCard);
    skillsItem.classList.add('text-blue-500','underline');
});

extraCurricularItem.addEventListener('click', () => {
    hideAllCards();
    showCard(extraCurricularCard);
    extraCurricularItem.classList.add('text-blue-500','underline');
});
