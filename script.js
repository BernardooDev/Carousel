const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const prev = carousel.querySelector('.prev');
const next = carousel.querySelector('.next');

let currentSlide = 0;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

prev.addEventListener('click', function() {
  goToSlide(currentSlide - 1);
});

next.addEventListener('click', function() {
  goToSlide(currentSlide + 1);
});

goToSlide(0);