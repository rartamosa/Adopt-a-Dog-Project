// Global variables
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
const dogsContainer = document.querySelector(".dogs-container__dogs-list");
const paginationNavigation = document.querySelector(
  ".dogs-container__pagination"
);
let pageNumber = 1;
const basketContainer = document.querySelector(".basket_quantity");
const header = document.querySelector(".header");

sortingButton.addEventListener("click", () => {
  const sortingOptions = document.querySelector(
    ".dogs-container__sorting-options"
  );
  sortingOptions.classList.toggle("sorting_open");
});

filterButton.addEventListener("click", () => {
  filterOptions.classList.add("filtering_open");
  body.classList.add("position");
  header.classList.add("hidden");
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
  body.classList.toggle("position");
  basket.classList.toggle("visible");
});

closeBasket.addEventListener("click", () => {
  basket.classList.remove("visible");
  body.classList.remove("position");
});

filterClose.addEventListener("click", () => {
  filterOptions.classList.remove("filtering_open");
  body.classList.remove("position");
  header.classList.remove("hidden");
});

const onPaginationClick = (newPage, maxPage) => {
  if (newPage !== 0 && newPage <= maxPage) {
    pageNumber = newPage;
    fetchDogs(() => {
      dogsContainer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};

const fetchDogs = (callback) => {
  fetch(`${URL}/dogs?page=${pageNumber}`)
    .then((res) => res.json())
    .then((data) => {
      arrayOfDogs = data.records;
      dogsContainer.innerHTML = "";
      data.records.forEach((item) => {
        dogsContainer.innerHTML += `
        <div class="dogs-container__dogs-list_example">
          <img
            src="${item.image}"
            alt="dog"
            title="dog"
            class="dogs-container__dogs-list_img"
          />
          <div class="dogs-container__dogs-list_details">
            <h3 class="dogs-container__dogs-list_name">${item.name}</h3>
            <div class="dogs-container__dogs-list_gender-size">
              <span class="dogs-container__dogs-list_1stline">
                <p class="dogs-container__dogs-list_feature">Gender:</p>
                <p class="dogs-container__dogs-list_desc">${item.gender}</p>
              </span>
              <p class="dogs-container__dogs-list_dot">.</p>
              <span class="dogs-container__dogs-list_2ndline">
                <p class="dogs-container__dogs-list_feature">Size:</p>
                <p class="dogs-container__dogs-list_desc">${item.size.substring(
                  1
                )}</p>
              </span>
              <button class="dogs-container__dogs-list_button" data-id="${
                item._id
              }" data-name="${item.name}" data-gender="${
          item.gender
        }" data-size="${item.size.substring(1)}" data-image="${
          item.image
        }">Adopt</button>
            </div>
          </div>
        </div>
        `;
      });
      paginationNavigation.innerHTML = "";
      paginationNavigation.innerHTML += `
        <button
          class="dogs-container__pagination_left dogs-container__pagination_navigation"
          data-direction="left"
          onclick="onPaginationClick(pageNumber - 1, ${Math.ceil(
            data.totalCount / 12
          )})"
        ></button>
      `;
      for (let i = 1; i <= Math.ceil(data.totalCount / 12); i++) {
        paginationNavigation.innerHTML += `
        <button class="dogs-container__pagination_page pagination_${i} ${
          i === pageNumber && "dogs-container__pagination_active"
        }" onclick="onPaginationClick(${i}, ${Math.ceil(
          data.totalCount / 12
        )})">${i}</button>
        `;
      }
      paginationNavigation.innerHTML += `
        <button
          class="dogs-container__pagination_right dogs-container__pagination_navigation"
          data-direction="right"
          onclick="onPaginationClick(pageNumber + 1, ${Math.ceil(
            data.totalCount / 12
          )})"
        ></button>
      `;
    })
    .catch((err) => {
      dogsContainer.innerHTML = `
      <p class="error-message">Ooops, something went wrong :( Please, try re-loading the page.</p>
      `;
    })
    .finally(() => {
      callback();
      adoptFunction();
    });
};

document.addEventListener("DOMContentLoaded", () => {
  fetchDogs(() => scrollTo(0, 0));
});

const adoptFunction = () => {
  const adoptButton = document.querySelectorAll(
    ".dogs-container__dogs-list_button"
  );
  adoptButton.forEach((singleAdopt) => {
    singleAdopt.addEventListener("click", (event) => {
      basketContainer.innerText = Number(basketContainer.innerText) + 1;
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
      const closeBasketRerender = document.querySelector(".shop_close");
      closeBasketRerender.addEventListener("click", () => {
        basket.classList.remove("visible");
        body.classList.remove("position");
      });
      const deleteButtons = document.querySelectorAll(".delete");
      deleteButtons.forEach((singleDelete) => {
        singleDelete.addEventListener("click", (event) => {
          basketContainer.innerText = Number(basketContainer.innerText) - 1;
          event.target.parentElement.parentElement.parentElement.removeChild(
            event.target.parentElement.parentElement
          );
        });
      });
    });
  });
};
