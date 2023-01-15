let orderButton = document.querySelector(".bestseller__button");
let modalContainer = document.querySelector(".modal-container");

orderButton.addEventListener("click", function () {
  if (modalContainer.classList.contains(".modal-container--closed")) {
    modalContainer.remove(".modal-container--closed");
  }
});
