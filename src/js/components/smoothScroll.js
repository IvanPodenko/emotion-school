import SmoothScroll from "smooth-scroll";
const options = {
  speed: 310, // Скорость прокрутки (по умолчанию 500)
  offset: 125, // Смещение от якоря (по умолчанию 0)
  easing: "easeOut", // Функция плавности (по умолчанию 'easeInOutQuart')
  updateURL: false, // Обновление URL (по умолчанию true)
};
const scroll = new SmoothScroll('a[href*="#"]', options);
