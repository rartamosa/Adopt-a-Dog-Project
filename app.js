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
const paginationPagesContainer = document.querySelector(
  ".dogs-container__pagination-pages"
);
const paginationNavigation = document.querySelectorAll(
  ".dogs-container__pagination_navigation"
);
let pageNumber = 1;

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

filterClose.addEventListener("click", () => {
  filterOptions.classList.remove("filtering_open");
  body.classList.remove("position");
});

const onPaginationClick = (newPage) => {
  if (newPage !== 0 && newPage <= 3) {
    pageNumber = newPage;
    fetchDogs();
  }
};

const fetchDogs = () => {
  console.log(pageNumber);
  fetch(`${URL}/dogs?page=${pageNumber}`)
    .then((res) => res.json())
    .then((data) => {
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
            </div>
          </div>
        </div>
        `;
      });
      paginationPagesContainer.innerHTML = "";
      for (let i = 1; i <= Math.ceil(data.totalCount / 12); i++) {
        paginationPagesContainer.innerHTML += `
        <button class="dogs-container__pagination_page pagination_${i}" onclick="onPaginationClick(${i})">${i}</button>
        `;
        const paginationButton = document.querySelector(`.pagination_${i}`);
      }
      paginationNavigation.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.dataset.direction === "left") {
            onPaginationClick(pageNumber - 1);
          } else if (item.dataset.direction === "right") {
            onPaginationClick(pageNumber + 1);
          }
        });
      });
    })
    .catch((err) => {
      dogsContainer.innerHTML = `
      <p class="error-message">Ooops, something went wrong :( Please, try re-loading the page.</p>
      `;
    });
};

document.addEventListener("DOMContentLoaded", fetchDogs);
