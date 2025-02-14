// Initializing variables
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector(".slider-container");

// Function to update slider position and border color
function updateSlider() {
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Array of colors for dynamic border glow effect
    const colors = ["#ff5733", "#33ff57", "#5733ff"]; 
    sliderContainer.style.boxShadow = `0px 0px 20px ${colors[currentIndex]}`;
}

// Function for next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

// Function for previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Initial call to set the first slide color
updateSlider();
