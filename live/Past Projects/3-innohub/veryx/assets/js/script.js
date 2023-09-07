"use strict";
const addEventOnElem = function (Elem, type, callback) {
  if (Elem.length > 1) {
    for (let i = 0; i < Elem.length; i++) {
      Elem[i].addEventListener(type, callback);
    }
  } else {
    Elem.addEventListener(type, callback);
  }
};
//
// toggle number
//

const navbar = document.querySelector("[data-navbar]");
const navbarlinks = document.querySelectorAll("[data-nav-link]");
const toggler = document.queryselecor("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  toggler.classList.toggle("active");
};

addEventOnElem(toggler, "click", toggleNavbar);

const closenavbar = function () {
  navbar.classList.remove("active");
  navtoggler.classList.remove("active");
};

addEventOnElem(navbarlinks, "click", closenavbar);

// header active
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn])");
window.addEventListener("scroll", function () {
  if (Window.scroll > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
