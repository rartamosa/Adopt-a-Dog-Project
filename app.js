const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");
const hamburgerOpen = document.querySelector(".hamburger_open");
const hamburgerClose = document.querySelector(".hamburger_close");
const basket = document.querySelector(".shop");
const openBasket = document.querySelector(".basket_container");
const closeBasket = document.querySelector(".shop_close");
const sortingButton = document.querySelector(".dogs-container__sorting-button");
const filterButton = document.querySelector(".dogs-container__filter");

sortingButton.addEventListener("click", () => {
  const sortingOptions = document.querySelector(
    ".dogs-container__sorting-options"
  );
  sortingOptions.classList.toggle("sorting_open");
});

filterButton.addEventListener("click", () => {
  const filterOptions = document.querySelector(
    ".dogs-container__filter-options"
  );
  filterOptions.classList.toggle("filtering_open");
});

hamburgerOpen.addEventListener("click", () => {
  body.style.position = "fixed";
  navigation.classList.add("visible");
});

hamburgerClose.addEventListener("click", () => {
  body.style.position = "static";
  navigation.classList.remove("visible");
});

openBasket.addEventListener("click", () => {
  body.style.position = "fixed";
  basket.classList.add("visible");
});

closeBasket.addEventListener("click", () => {
  body.style.position = "static";
  basket.classList.remove("visible");
});
