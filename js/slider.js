const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;
const slideWidth = slider.clientWidth;

nextButton.addEventListener('click', () => {
    if (currentSlide < 2) {
        currentSlide++;
        updateSlider();
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

function updateSlider() {
    const translateValue = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${translateValue}px)`;
}
