import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

(function () {
  const burger = document?.querySelectorAll("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");

  burger?.forEach((el) => {
    el?.addEventListener("click", (e) => {
      el?.classList.toggle("burger--active");
      menu?.classList.toggle("menu--active");

      if (menu?.classList.contains("menu--active")) {
        el?.setAttribute("aria-expanded", "true");
        el?.setAttribute("aria-label", "Закрыть меню");
        disableScroll();
      } else {
        el?.setAttribute("aria-expanded", "false");
        el?.setAttribute("aria-label", "Открыть меню");
        enableScroll();
      }
    });
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    enableScroll();
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.forEach((elem) => {
        elem?.setAttribute("aria-expanded", "false");
        elem?.setAttribute("aria-label", "Открыть меню");
        elem.classList.remove("burger--active");
        elem?.classList.add("active-burger");
      });
      menu.classList.remove("menu--active");
      enableScroll();
    });
  });
})();
