 const toggleButton = document.getElementsByClassName('toggle-button')[0]
 const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active')
 })

 // popup
const openPopupButton = document.getElementById('open-popup-btn');
const closePopupButton = document.getElementById('close-popup-btn');
const popup = document.querySelector('.popup');

// Show popup when button is clicked
openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Hide popup when close button is clicked
closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Hide popup when user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});


// about scroll down

const scrollToAboutButton = document.getElementById('scroll-to-about');
const aboutSection = document.getElementById('about-scroll');

scrollToAboutButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});


// caraousel 


const slides = document.querySelectorAll('.carousel-slide');
const prev = document.querySelector('.carousel-prev');
const next = document.querySelector('.carousel-next');
let index = 0;


// Set initial active slide
slides[index].classList.add('active');



// Auto advance to next slide every 10 seconds
setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 10000);



