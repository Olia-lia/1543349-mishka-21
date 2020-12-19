let modalOrder = document.querySelector(".modal-order__wrapper");
let product = document.querySelectorAll(".catalog__item");
let openModalOrder = document.querySelectorAll(".order-button");
let modalClose = document.querySelector(".modal-order__add");
let sizeS = document.querySelector(".modal-order__label--S");


let addClickHandlerBasket = function (openModalOrder) {
  openModalOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOrder.classList.add("modal-order__open");
  sizeS.focus();
  });
  };

for (var i = 0; i < openModalOrder.length; i++) {
  addClickHandlerBasket(openModalOrder[i]);
}

modalClose.addEventListener("click", function (evt) {
evt.preventDefault();
modalOrder.classList.remove("modal-order__open");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalOrder.classList.contains("modal-order__open")) {
      evt.preventDefault();
      modalOrder.classList.remove("modal-order__open");
    }
  }
});
