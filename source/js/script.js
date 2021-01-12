var navToggle = document.querySelector(".toggle-navigation");
var navMain = document.querySelector(".main-nav");
var header = document.querySelector(".page-header__wrapper");

navToggle.classList.remove("toggle-navigation--nojs");
navMain.classList.remove("main-nav--nojs");
header.classList.remove("page-header__wrapper--nojs");

  navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains("toggle-navigation--open")) {
      navToggle.classList.remove("toggle-navigation--open");
      navToggle.classList.add("toggle-navigation--close");
      header.classList.remove("page-header__wrapper--closed-menu");
      header.classList.add("page-header__wrapper--nojs");
    } else {
      navToggle.classList.add("toggle-navigation--open");
      navToggle.classList.remove("toggle-navigation--close");
      header.classList.remove("page-header__wrapper--nojs");
      header.classList.add("page-header__wrapper--closed--menu");
    }
  });

//Modal
var modalOrder = document.querySelector(".modal-order__wrapper");
var product = document.querySelectorAll(".catalog__item");
var openModalOrder = document.querySelectorAll(".order-button");
var modalClose = document.querySelector(".modal-order__add");
var sizeS = document.querySelector(".modal-order__label--S");


var addClickHandlerBasket = function (openModalOrder) {
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
