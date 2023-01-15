let modalContainer = document.querySelector(".modal-container");
let overlay = document.querySelector(".modal-overlay");
let orderButton = document.querySelector(".button--modal");

orderButton.addEventListener("click", function (event) {
  event.preventDefault();
  modalContainer.classList.remove("modal-container--closed");
  modalContainer.classList.add("modal-container--opened");
});

overlay.addEventListener('click', function() {
  modalContainer.classList.remove("modal-container--opened");
  modalContainer.classList.add("modal-container--closed");
});

