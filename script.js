const movingText = document.querySelector('.home-hero-title');
const movingDescr = document.querySelector('.home-hero-descr');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const maxPosition = 100;
  const maxScroll = Math.min(scrollPosition * 0.5, maxPosition);
  movingText.style.transform = `translateX(${maxScroll}vw)`;
  movingDescr.style.transform = `translateX(-${maxScroll}vw)`;
});

const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

elements.forEach(el => observer.observe(el));

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY == 0) {
    header.classList.remove('scrolled');
  } else {
    header.classList.add('scrolled');
  }
});

const menu = document.querySelector('.header-mobile');
const menuShow = document.querySelector('.header-burger');
const menuHide = document.querySelector('.header-mobile-burger');

menuShow.addEventListener("click", function () {
  menu.classList.add('header-mobile-show');
})

menuHide.addEventListener("click", function () {
  menu.classList.remove('header-mobile-show');
})

const modal = document.querySelector('.modal');
const modalShow = document.querySelectorAll('.modal-show');
const modalHide = document.querySelector('.modal-form-close');

modalShow.forEach(el => el.addEventListener("click", function () {
  modal.classList.add('modal-visible');
}))

modalHide.addEventListener("click", function () {
  modal.classList.remove('modal-visible');
})