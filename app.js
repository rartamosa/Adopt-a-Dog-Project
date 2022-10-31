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
const adoptButton = document.querySelector(".dogs-container__dogs-list_button");
const basketContainer = document.querySelector(".basket_quantity");

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

adoptButton.forEeach((singleAdopt) => {
  singleAdopt.addEventListener("click", (event) => {
    basket.innerHTML += `
    <div class="shop_item">
              <img
                class="shop_img"
                data-id="${event.target.dataset._id}"
                title="my-dog"
                alt="my-dog"
                src=""
              />
              <span class="shop_img__desc">
                <h4 class="shop_img_name">Fluffy</h4>
                <h5 class="shop_img_gender">Male</h5>
                <h6 class="shop_img_size">Small</h6>
              </span>
              <button class="delete">
                <i class="gg-trash"></i>
              </button>
            </div>
    `;
  });
  const deleteButton = document.querySelector(".delete");
});


