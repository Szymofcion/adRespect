const nav = document.querySelector(".nav");
const navItem2 = document.querySelector(".nav__item2");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const menuDropdown = document.querySelector(".menu__dropdown-list"); ///
const magnify = document.querySelector(".fa-search"); ///
const container = document.querySelector(".project__bottom");
const newImgButton = document.querySelector(".project__container-button");
const navDesktop = document.querySelector(".nav__desktop");

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
/// lightbox

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
  newImgButton.disabled = true;
  newImgButton.classList.add("disabled-button");

  for (let i = 0; i < 5; i++) {
    const newImage = document.createElement("img");
    const newLink = document.createElement("a");
    newLink.href = `./assets/img${i}.jpg`;
    newLink.classList.add("grid-item");
    newLink.setAttribute("data-fancybox", "gallery");
    newImage.src = `../assets/img${i}.jpg`;
    newImage.alt = "randomowe zdjecie z neta";
    newImage.classList.add("block");
    newImage.classList.add("img-scale");
    newImage.setAttribute("data-lightbox", "image-set");
    container.appendChild(newLink);
    newLink.appendChild(newImage);
  }

  macyInstance.runOnImageLoad(function () {
    macyInstance.recalculate(true, true);
    const evt = new Event("resize");
    window.dispatchEvent(evt);
  }, true);
});

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

  const showSlide = (slideIndex) => {
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
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

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

const searchWrapper2 = document.querySelector(".search-wrapper2");
const searchIcon2 = document.querySelector(".search-icon2");
const searchInput2 = document.querySelector(".search-input2");

searchWrapper2.addEventListener("click", () => {
  searchWrapper2.classList.add("active");
  searchInput2.classList.add("active");
  searchInput2.focus();
});

searchInput2.addEventListener("blur", () => {
  if (searchInput2.value === "") {
    searchWrapper2.classList.remove("active");
    searchInput2.classList.remove("active");
  }
});
