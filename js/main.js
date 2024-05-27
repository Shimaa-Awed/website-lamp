// loading will be end after document is loaded

const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// show menu
const navToggle = document.getElementById("nav-toggle");
const navmenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
console.log(navmenu);

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navmenu.classList.add("show-menu");
  });
}
// menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navmenu.classList.remove("show-menu");
  });
}

// remove menu mobile
const navLink = document.querySelectorAll(".nav--link");
const linkAction = () => {
  const navmenu = document.getElementById("nav-menu");
  // when we click on each nav--link we remove the show menu
  navmenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// change background header

const scrollHeader = () => {
  const header = document.getElementById("header");

  //when
  window.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// swiper items
const popularSwiper = new Swiper(".popular--content", {
  // Optional parameters
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      centeredSlides: false,
    },
  },
});

// choose faq

const faqItems = document.querySelectorAll(".choose--faq-item");

// 1. Select each item
faqItems.forEach((item) => {
  const faqHeader = item.querySelector(".choose--faq-header");
  console.log(faqHeader);
  // 2. Select each button click
  faqHeader.addEventListener("click", () => {
    // 7. Select the current faq-open class
    const openItem = document.querySelector(".faq-open");

    // 5. Call the toggleItem function
    toggleItem(item);

    // 8. Remove the faq-open class from other items
    if (openItem && openItem != item) {
      toggleItem(openItem);
    }
  });
});

// 3. Create function to display the content
const toggleItem = (item) => {
  const faqContent = item.querySelector(".choose--faq-content");
  // 6. If the same item contains the faq-open class, remove
  if (item.classList.contains("faq-open")) {
    faqContent.removeAttribute("style");
    item.classList.remove("faq-open");
  } else {
    // 4. Add max-height to the content and add the faq-open class
    faqContent.style.height = faqContent.scrollHeight + "px";
    item.classList.add("faq-open");
  }
};

// show scroll up

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is height than 350 viewport height
  if (this.scrollY >= 450) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollUp);

// scroll sections active link

//dark light theme
const mode = document.getElementById("mode");
const icon = document.getElementById("theme-button");

const sunIcon = document.getElementById("theSun");

console.log(sun);

icon.addEventListener("click", () => {
  mode.classList.toggle("dark-theme");

 //  change toggle icon
  icon.classList.toggle("bx-moon");
  icon.classList.toggle("bx-sun");
  sunIcon.classList.toggle("bx-moon");
  sunIcon.classList.toggle("bx-sun");
});

//  // scroll reveal animation

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset:true // animation repeat
});

sr.reveal(
  `.home--content,.popular--container,.prodects--container,.join--bg,.footer--container `
);
sr.reveal(`.home--image`, { origin: `bottom` });
sr.reveal(`.choose--image,.feature--image`, { origin: `left` });
sr.reveal(`.choose--content,.feature--content`, { origin: `right` });

ScrollReveal().reveal(".widgets", {
  delay: 1000,
  reset: true,
  useDelay: "once",
});
