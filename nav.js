const headerNav = document.querySelector(".header-nav");
const headerNavOverlay = document.querySelector(".header-nav-overlay");
const navLinks = document.querySelectorAll(".nav-link");
const headerNavIcon = document.querySelector("#header-nav-icon");
const headerNavCloseIcon = document.querySelector("#header-nav-Closeicon");

headerNavIcon.addEventListener("click", openMenu);

headerNavCloseIcon.addEventListener("click", closeMenu);

headerNavOverlay.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
})



function openMenu() {
    headerNav.classList.remove("closed")
    headerNavOverlay.classList.remove("closed")
}

function closeMenu() {
    headerNav.classList.add("closed")
    headerNavOverlay.classList.add("closed")
}