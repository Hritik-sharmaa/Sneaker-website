const bar = document.getElementById("bar");
const nav = document.querySelector(".navbar .options ul");
const close = document.getElementsByClassName("close");

if (bar && nav) {
  bar.addEventListener("click", () => {
    nav.classList.toggle("run");
  });
}
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", () => {
    nav.classList.remove("run");
  });
}

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 90,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
