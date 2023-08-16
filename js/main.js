const nav = document.querySelector(".nav");
const navItem2 = document.querySelector(".nav__item2");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");

const handleNav = () => {
  nav.classList.toggle("nav--active");
  navBtnBars.classList.remove("black-bars-color");
  navItem2.classList.toggle("nav-items-animation");
  allNavItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
  });
  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
      navItem2.classList.remove("nav-items-animation");
      allNavItems.forEach((item) => {
        item.classList.remove("nav-items-animation");
      });
    });
  });
};

const handleNavItemsAnimation = () => {
  let delayTime = 0;
  allNavItems.forEach((item) => {
    item.style.animationDelay = "." + (delayTime + 2) + "s";
    delayTime++;
  });
};

handleNavItemsAnimation();
navBtn.addEventListener("click", handleNav);
