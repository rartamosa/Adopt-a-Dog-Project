const navigation = document.querySelector(".navigation");
const hamburgerOpen = document.querySelector(".hamburger_open");
const hamburgerClose = document.querySelector(".hamburger_close");

hamburgerOpen.addEventListener("click", () => {
   navigation.classList.add("visible");
});

hamburgerClose.addEventListener("click", () => {
    navigation.classList.remove("visible");
})