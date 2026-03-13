const swiper = new Swiper('.review-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});