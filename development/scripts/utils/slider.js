import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Подключает базовые стили Swiper

export default function slider() {
  document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "fade",
      speed: 1000,
    });
  });
};
