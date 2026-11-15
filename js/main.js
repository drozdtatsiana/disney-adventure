// Слайдер "top impressions you will get"
const sliderEl = document.querySelector(".swiper");

if (sliderEl && typeof Swiper !== "undefined") {
  new Swiper(sliderEl, {
    effect: "fade",
    loop: true,

    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },

    // на мобильных стрелки скрыты, переключаем точками
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// Карточки "our other tours": активная раскрывается
const items = document.querySelectorAll(".tours__item");

function activateItem(element) {
  items.forEach((el) => el.classList.remove("tours__item--active"));
  element.classList.add("tours__item--active");
}

items.forEach((element) => {
  element.addEventListener("click", () => activateItem(element));
  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activateItem(element);
    }
  });
});

// Бургер-меню
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu__btn");

if (menu && menuBtn) {
  function setMenu(open) {
    menu.classList.toggle("menu--active", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  menuBtn.addEventListener("click", () => {
    setMenu(!menu.classList.contains("menu--active"));
  });

  menu.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
}