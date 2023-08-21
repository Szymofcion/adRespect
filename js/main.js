const nav = document.querySelector(".nav");
const navItem2 = document.querySelector(".nav__item2");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const menuDropdown = document.querySelector(".menu__dropdown-list"); ///
const magnify = document.querySelector(".fa-magnifying-glass"); ///
const container = document.querySelector(".project__bottom");
const newImgButton = document.querySelector(".project__container-button");

///animacje

AOS.init();

///nav

const handleNav = () => {
  nav.classList.toggle("nav--active");
  navBtnBars.classList.remove("black-bars-color");
  navItem2.classList.toggle("nav-items-animation");
  magnify.classList.toggle("nav-items-animation");
  allNavItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
  });
  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
      navItem2.classList.remove("nav-items-animation");
      magnify.classList.remove("nav-items-animation");
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

/// macy

var macyInstance = Macy({
  container: container,
  mobileFirst: true,
  columns: 2,
  waitForImages: true,
  breakAt: {
    700: 3,
  },
  margin: {
    x: 30,
    y: 10,
  },
});
macyInstance.runOnImageLoad(function () {
  macyInstance.recalculate(true);
}, true);
macyInstance.recalculate(true);
newImgButton.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    const newImage = document.createElement("img");
    newImage.src = `../assets/img${i}.jpg`;
    newImage.alt = "";
    newImage.classList.add("block");
    newImage.addEventListener("click", () => {
      document.getElementById("modal-img").src = newImage.src;
      MicroModal.show("modal-image");
    });
    document.querySelector("#masonry-container").appendChild(newImage);
    console.log(newImage.src);
  }
  macyInstance.reInit();
});
addEventListener("load", macyInstance.reInit());
// Przykład użycia:

///shadowMacy

const btnShadow = document.querySelector(".project__container-button");
const shadow = document.querySelector(".shadow");
btnShadow.addEventListener("click", () => {
  shadow.classList.remove("shadow");
});

///Slider

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentSlide = 0;

  function showSlide(slideIndex) {
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });

    currentSlide = slideIndex;
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  showSlide(currentSlide);
});

///search

const searchWrapper = document.querySelector(".search-wrapper");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const searchBar = document.querySelector(".search-bar");

searchWrapper.addEventListener("click", () => {
  searchWrapper.classList.add("active");
  searchInput.classList.add("active");
  searchBar.classList.add("active");
  searchInput.focus();
});

searchInput.addEventListener("blur", () => {
  if (searchInput.value === "") {
    searchWrapper.classList.remove("active");
    searchInput.classList.remove("active");
    searchBar.classList.remove("active");
  }
});

/// lightbox
