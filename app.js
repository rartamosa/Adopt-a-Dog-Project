const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");
const hamburgerOpen = document.querySelector(".hamburger_open");
const hamburgerClose = document.querySelector(".hamburger_close");
const basket = document.querySelector(".shop");
const openBasket = document.querySelector(".basket_container");
const closeBasket = document.querySelector(".shop_close");
const sortingButton = document.querySelector(".dogs-container__sorting-button");
const filterButton = document.querySelector(".dogs-container__filter");
const filterOptions = document.querySelector(".dogs-container__filter-options");
const filterClose = document.querySelector(".filter-close");

const URL = "https://dogs-api-group-project-1.herokuapp.com";

sortingButton.addEventListener("click", () => {
  const sortingOptions = document.querySelector(
    ".dogs-container__sorting-options"
  );
  sortingOptions.classList.toggle("sorting_open");
});

filterButton.addEventListener("click", () => {
  filterOptions.classList.add("filtering_open");
  body.classList.add("position");
});

hamburgerOpen.addEventListener("click", () => {
  body.classList.add("position");
  navigation.classList.add("visible");
});

hamburgerClose.addEventListener("click", () => {
  navigation.classList.remove("visible");
  body.classList.remove("position");
});

openBasket.addEventListener("click", () => {
  body.classList.add("position");
  basket.classList.add("visible");
});

closeBasket.addEventListener("click", () => {
  basket.classList.remove("visible");
  body.classList.remove("position");
});

filterClose.addEventListener("click", () => {
  filterOptions.classList.remove("filtering_open");
  body.classList.remove("position");
});
