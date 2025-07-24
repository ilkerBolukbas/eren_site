const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;
let autoSlide;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAuto();
});
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAuto();
});

function startAuto() {
  autoSlide = setInterval(nextSlide, 4500);
}
function resetAuto() {
  clearInterval(autoSlide);
  startAuto();
}

showSlide(current);
startAuto();


