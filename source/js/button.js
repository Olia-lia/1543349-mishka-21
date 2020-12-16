let navToggle = document.querySelector(".main-nav__toggle");
let navMain = document.querySelector(".main-nav");
let header = document.querySelector(".page-header__wrapper");

navMain.classList.remove("main-nav--nojs");
navToggle.classList.remove("main-nav__toggle--nojs");
header.classList.remove("page-header__wrapper--nojs");


  navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains("main-nav__toggle--open")) {
      navToggle.classList.remove("main-nav__toggle--open");
      navToggle.classList.add("main-nav__toggle--close");
      header.classList.remove("page-header__wrapper--closed-menu");
      header.classList.add("page-header__wrapper--nojs");
    } else {
      navToggle.classList.add("main-nav__toggle--open");
      navToggle.classList.remove("main-nav__toggle--close");
      header.classList.remove("page-header__wrapper--nojs");
      header.classList.add("page-header__wrapper--closed--menu");
    }
  });
