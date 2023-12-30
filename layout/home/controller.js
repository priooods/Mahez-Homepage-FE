$(document).ready(function () {
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const swiper = new Swiper(".swiper", {
    speed: 400,
    autoplay: false,
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: -50,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: -50,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
  next.addEventListener("click", function () {
    swiper.slideNext();
  });
  prev.addEventListener("click", function () {
    swiper.slidePrev();
  });
});
