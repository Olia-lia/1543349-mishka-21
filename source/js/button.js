let navToggle = document.querySelector(".main-nav__toggle");
let navMain = document.querySelector(".main-nav");
let indexHeader = document.querySelector(".page-header__index");

navMain.classList.remove("main-nav--nojs");
navToggle.classList.remove("main-nav__toggle--nojs");
indexHeader.classList.remove("page-header__index--nojs");


  navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains("main-nav__toggle--open")) {
      navToggle.classList.remove("main-nav__toggle--open");
      navToggle.classList.add("main-nav__toggle--close");
      indexHeader.classList.remove("page-header__index--closed--menu");
      indexHeader.classList.add("page-header__index--nojs");
    } else {
      navToggle.classList.add("main-nav__toggle--open");
      navToggle.classList.remove("main-nav__toggle--close");
      indexHeader.classList.remove("page-header__index--nojs");
      indexHeader.classList.add("page-header__index--closed--menu");
    }
  });
