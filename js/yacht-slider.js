const yachtSwiper = new Swiper('.yacht-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 800,
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 25,
      allowTouchMove: false,
      simulateTouch: false,
    },
  },
});