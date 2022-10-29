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
