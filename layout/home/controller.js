$(document).ready(function () {
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const swiper = new Swiper(".swiper", {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: -300,
    autoplay: false,
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
  });
  next.addEventListener("click", function () {
    swiper.slideNext();
  });
  prev.addEventListener("click", function () {
    swiper.slidePrev();
  });
});
