const track = document.querySelector('.carousel-track');
const heroimage = document.querySelector('.heroimg');

let currentIndex = 0;
let intervalId;

function startSlideshow() {
stopSlideshow(); // Prevent multiple intervals
intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % 2;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 4000);
}

function stopSlideshow() {
clearInterval(intervalId);
track.style.transform = 'translateX(0%)';
}

function handleResize() {
if (window.innerWidth <= 1200) {
    startSlideshow();
} else {
    stopSlideshow();
}
}

// Initial check
handleResize();

// Rerun on resize
window.addEventListener('resize', handleResize);

const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
navItems.classList.toggle('active');
});

hamburger.addEventListener('click', () => {
    heroimage.classList.toggle('shifted');
});
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000);

let currentSlide = 0;

function runSlideshow() {
    const slides = document.querySelectorAll('.slide');
    if (window.innerWidth >= 1200) {
        // Reset all slides to visible when not in mobile
        slides.forEach(slide => slide.classList.add('active'));
        return;
    }

    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });

    currentSlide = (currentSlide + 1) % slides.length;
}

// Initial run
runSlideshow();
let interval = setInterval(runSlideshow, 3000);

// Re-check on window resize
window.addEventListener('resize', () => {
    clearInterval(interval);
    runSlideshow();
    interval = setInterval(runSlideshow, 3000);
});