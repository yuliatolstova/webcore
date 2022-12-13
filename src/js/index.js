import "../scss/style.scss";

const popupLinks = document.querySelectorAll(".popup-link");

for (let i = 0; i < popupLinks.length; i++) {
  const popupLink = popupLinks[i];
  popupLink.addEventListener("click", function (e) {
    e.preventDefault();
    const popupName = popupLink.getAttribute("href").replace("#", "");
    const currentPopup = document.getElementById(popupName);
    popupOpen(currentPopup);
  });
}

function popupOpen(currentPopup) {
  const popupActive = document.querySelector(".open");
  if (popupActive) {
    popupClose(popupActive);
  }

  currentPopup.classList.add("open");
  currentPopup.addEventListener("click", function (e) {
    e.preventDefault();
    if (!e.target.closest(".popup__content")) {
      popupClose(e.target.closest(".popup"));
    }
  });
}

const popupCloseIcons = document.querySelectorAll(".close");

for (let i = 0; i < popupCloseIcons.length; i++) {
  const closeIcon = popupCloseIcons[i];
  closeIcon.addEventListener("click", function (e) {
    e.preventDefault();
    popupClose(e.target.closest(".popup"));
  });
}

function popupClose(popupActive) {
  popupActive.classList.remove("open");
}

//swiper
import Swiper, { Pagination } from "swiper";
// import Swiper and modules styles
Swiper.use([Pagination]);

var swiper = Swiper;
var init = false;

function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");
  let tablet = window.matchMedia("(min-width: 769px)and (max-width: 1120px)");
  let descktop = window.matchMedia("(min-width: 1121px)");
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        spaceBetween: 16,
        centerSlides: true,
        slidesPerView: "auto",
        slidesOffsetAfter: 70,
      });
    }
  } else if (tablet.matches) {
    swiper.destroy();
    init = false;
  } else if (descktop.matches) {
    swiper.destroy();
    init = false;
  }
}

window.addEventListener("load", function () {
  swiperMode();
});

window.addEventListener("resize", function () {
  swiperMode();
});

//exapnd

let btns = document.querySelectorAll(".button-expand");

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  const swiperName = btn.getAttribute("data-target");
  const currnetSwiperId = document.getElementById(swiperName);

  const btnText = btn.querySelector(".button-expand__text");
  const arrow = btn.querySelector(".arrow");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currnetSwiperId.classList.contains("max-height")) {
      currnetSwiperId.classList.remove("max-height");
      arrow.classList.remove("down");
      arrow.classList.add("up");
      btnText.textContent = "Скрыть";
    } else {
      currnetSwiperId.classList.add("max-height");
      arrow.classList.add("down");
      arrow.classList.remove("up");
      btnText.textContent = "Показать все";
    }
  });
}
