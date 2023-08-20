const nav = document.querySelector(".nav");
const navItem2 = document.querySelector(".nav__item2");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const menuDropdown = document.querySelector(".menu__dropdown-list"); ///
const magnify = document.querySelector(".fa-magnifying-glass"); ///
const container = document.querySelector(".project__bottom");
const newImgButton = document.querySelector(".project__container-button");

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

var macyInstance = Macy({
  container: container,
  mobileFirst: true,
  columns: 2,
  breakAt: {
    700: 3,
  },
  margin: {
    x: 20,
    y: 20,
  },
});
newImgButton.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    const newImage = document.createElement("img");
    newImage.src = "https://picsum.photos/200/300?random=13";
    newImage.alt = "";
    newImage.classList.add("project__bottom");
    newImage.addEventListener("click", () => {
      document.getElementById("modal-img").src = newImage.src;
      MicroModal.show("modal-image");
    });
    document.querySelector("#masonry-container").appendChild(newImage);
    macyInstance.recalculate();
  }
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

  showSlide(currentSlide)
});
