let orderButton = document.querySelector(".bestseller__button");
let modalContainer = document.querySelector(".modal-container");

modalContainer.classList.add("modal-container--closed");

orderButton.addEventListener("click", function () {
  if (modalContainer.classList.contains(".modal-container--closed")) {
    modalContainer.classList.remove(".modal-container--closed");
    modalContainer.classList.add("modal-container--opened");
  }
});
