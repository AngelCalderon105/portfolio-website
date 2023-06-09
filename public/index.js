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
        item.classList.remove('text-blue-500');

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
    roleItem.classList.add('text-blue-500');
});

skillsItem.addEventListener('click', () => {
    hideAllCards();
    showCard(skillsCard);
    skillsItem.classList.add('text-blue-500');
});

extraCurricularItem.addEventListener('click', () => {
    hideAllCards();
    showCard(extraCurricularCard);
    extraCurricularItem.classList.add('text-blue-500');
});


// Get the slides and the buttons
let slides = Array.from(document.getElementsByClassName('slide'));
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

// Set the current slide index
let currentSlide = 0;

// Function to update the slide visibility
function updateSlides() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.remove('md:hidden');
            slide.style.animation = 'slideInFromRight .7s forwards';
        } else {
            slide.classList.add('md:hidden');
        }
    });
}

// Event listener for the next button
nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlides();
});

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlides();
});

// Update the slides initially
updateSlides();

//////////////////////////////////////////////////////////////
// Get the slides and the buttons
let roleSlides = Array.from(document.getElementsByClassName('roleSlide'));
let rolePrevBtn = document.getElementById('rolePrevBtn');
let roleNextBtn = document.getElementById('roleNextBtn');

// Set the current slide index
let currentRoleSlide = 0;

// Function to update the slide visibility
function updateRoleSlides() {
    roleSlides.forEach((slide, index) => {
        if (index === currentRoleSlide) {
            slide.classList.remove('md:hidden');
            slide.style.animation = 'slideInFromRight .7s forwards';
        } else {
            slide.classList.add('md:hidden');
        }
    });
}

// Event listener for the next button
roleNextBtn.addEventListener('click', () => {
    currentRoleSlide++;
    if (currentRoleSlide >= roleSlides.length) {
        currentRoleSlide = 0;
    }
    updateRoleSlides();
});

// Event listener for the previous button
rolePrevBtn.addEventListener('click', () => {
    currentRoleSlide--;
    if (currentRoleSlide < 0) {
        currentRoleSlide = roleSlides.length - 1;
    }
    updateRoleSlides();
});

// Update the slides initially
updateRoleSlides();
