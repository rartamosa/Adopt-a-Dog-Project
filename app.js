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
const basketContainer = document.querySelector(".basket_quantity");
const dogsList = document.querySelector(".dogs-container__dogs-list");

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

let arrayOfDogs = [];

const fetchDogs = () => {
  fetch(`${URL}/dogs`)
    .then((res) => res.json())
    .then((data) => {
      arrayOfDogs = data.records;
      dogsList.innerHTML = "";
      data.records.forEeach((dog) => {
        dogsList.innerHTML += `
        <div class="dogs-container__dogs-list_example">
        <img
          src="${dog.image}"
          alt="${dog.name}"
          title="${dog.name}"
          class="dogs-container__dogs-list_img"
        />
        <div class="dogs-container__dogs-list_details">
          <h3 class="dogs-container__dogs-list_name">${dog.name}</h3>
          <div class="dogs-container__dogs-list_gender-size">
            <div class="dogs-container__dogs-list_info">
              <span class="dogs-container__dogs-list_1stline">
                <p class="dogs-container__dogs-list_feature">Gender:</p>
                <p class="dogs-container__dogs-list_desc">${dog.gender}</p>
              </span>
              <p class="dogs-container__dogs-list_dot">.</p>
              <span class="dogs-container__dogs-list_2ndline">
                <p class="dogs-container__dogs-list_feature">Size:</p>
                <p class="dogs-container__dogs-list_desc">${dog.size}</p>
              </span>
            </div>
            <button class="dogs-container__dogs-list_button" data-id="${dog._id}">Adopt</button>
          </div>
        </div>
      </div>
        `;
      });
      const adoptButton = document.querySelector(".dogs-container__dogs-list_button");
      adoptButton.forEeach((singleAdopt) => {
        singleAdopt.addEventListener("click", (event) => {
          basket.innerHTML += `
          <div class="shop_item" data-id="${event.target.dataset.id}">
              <img
                class="shop_img"
                data-id="${event.target.dataset.id}"
                title="${event.target.dataset.name}"
                alt="${event.target.dataset.name}"
                src="${event.target.dataset.image}"
              />
              <span class="shop_img__desc">
                <h4 class="shop_img_name">${event.target.dataset.name}</h4>
                <h5 class="shop_img_gender">${event.target.dataset.gender}</h5>
                <h6 class="shop_img_size">${event.target.dataset.size}</h6>
              </span>
              <button class="delete" data-id="${event.target.dataset.id}">
                <i class="gg-trash"></i>
              </button>
            </div>
    `;
        });
        const deleteButton = document.querySelector(".delete");
        deleteButton.forEeach((singleDelete) => {
          singleDelete.addEventListener("click", (event) => {
            const itemInBasket = document.querySelector(".shop_item");
            itemInBasket.innerHTML = "";
          })
        })
      });
    });
};

fetchDogs();

// basketContainer.innerText = arrayOfDogsInCart.length;
