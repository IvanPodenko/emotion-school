import Swiper from'swiper';
import { Navigation, Autoplay } from "swiper/modules";

const swiper = new Swiper(".price__swiper", {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".js-button-prev",
    prevEl: ".js-button-next",
  },
});
