
let modalOrder = document.querySelector(".modal-order__wrapper");
let openModalOrder = document.querySelector(".featured__link");
let modalClose = document.querySelector(".modal-order__add");
let sizeS = document.querySelector(".modal-order__label--S");


openModalOrder.addEventListener("click", function (evt) {
evt.preventDefault();
modalOrder.classList.add("modal-order__open");
  sizeS.focus();
});

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
