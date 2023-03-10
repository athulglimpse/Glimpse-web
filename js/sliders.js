var swiper = new Swiper(".test-swiper", {
  slidesPerView: 1,
  spaceBetween: 100,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    860: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  },
});
var blogsWiper = new Swiper(".blog-swiper", {
  slidesPerView: 1,
  spaceBetween: 100,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    860: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
  },
});
const portfolioswiper = new Swiper(".portfolio-swiper", {
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let sliderImage = document.querySelectorAll(".portfolio-swiper-slide");
sliderImage.forEach(
  (image, i) =>
    (image.style.backgroundImage = `url(https://glimpse-web.s3.ap-northeast-1.amazonaws.com/images/portfolio/${
      i + 1
    }.webp)`)
);
