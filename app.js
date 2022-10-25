const navigation = document.querySelector(".navigation");
const hamburgerOpen = document.querySelector(".hamburger_open");
const hamburgerClose = document.querySelector(".hamburger_close");
const basket = document.querySelector(".shop");
const openBasket = document.querySelector(".basket_container");
const closeBasket = document.querySelector(".shop_close");

hamburgerOpen.addEventListener("click", () => {
   navigation.classList.add("visible");
});

hamburgerClose.addEventListener("click", () => {
    navigation.classList.remove("visible");
});

openBasket.addEventListener("click", () => {
    basket.classList.add("visible");
});

closeBasket.addEventListener("click", () => {
    basket.classList.remove("visible");
});