const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");
const hamburgerOpen = document.querySelector(".hamburger_open");
const hamburgerClose = document.querySelector(".hamburger_close");
const basket = document.querySelector(".shop");
const openBasket = document.querySelector(".basket_container");
const closeBasket = document.querySelector(".shop_close");

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
