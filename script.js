// Slider
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}
prev.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});
next.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Scroll Animations
const animatedSections = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) section.classList.add('visible');
    });
});

// M-Pesa Donation Simulation
document.getElementById('donate-btn').addEventListener('click', () => {
    alert("Thank you! A prompt will open on your phone for M-Pesa donation.");
});
