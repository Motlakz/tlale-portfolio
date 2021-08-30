const navItems = document.querySelector("nav ul");
const menuBar = document.querySelector(".menu-bar");

menuBar.addEventListener("click", function () {
    navItems.classList.toggle("open");
    this.classList.toggle("open-menu-bar");
});
