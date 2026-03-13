const openMenuBtn = document.querySelector("[data-menu-open]");
const mobileMenu = document.querySelector("[data-menu]");
const menuLinks = document.querySelectorAll(".mobile-menu-link");
const icon = document.querySelector(".burger-menu-icon use");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");

  if (mobileMenu.classList.contains("is-open")) {
    document.body.style.overflow = "hidden";
    icon.setAttribute("href", "./images/icons.svg#close-menu-icon");
  } else {
    document.body.style.overflow = "";
    icon.setAttribute("href", "./images/icons.svg#burger-menu-icon");
  }
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
    icon.setAttribute("href", "./images/icons.svg#burger-menu-icon");
  });
});