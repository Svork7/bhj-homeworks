// Обьявляем переменные
const sliders = Array.from(document.querySelectorAll(".slider__item")),
  prev = document.querySelector(".slider__arrow_prev"),
  next = document.querySelector(".slider__arrow_next"),
  sliderItemActive = document.querySelector(".slider__item_active");
let slideActive = 0;
prev.onclick = () => {
  slideActive - 1 < 0 ? (slideActive = sliders.length - 1) : (slideActive -= 1);
  index(slideActive);
};

next.onclick = () => {
  slideActive + 1 <= sliders.length - 1
    ? (slideActive += 1)
    : (slideActive = 0);
  index(slideActive);
};

function index(i) {
  [...sliders].findIndex((item) =>
    item.classList.remove("slider__item_active")
  );
  const slide = Array.from(document.querySelectorAll(".slider__item"));
  slide[i].classList.add("slider__item_active");
}
