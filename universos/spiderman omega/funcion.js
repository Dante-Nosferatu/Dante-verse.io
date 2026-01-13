//para el menu de navegacion: characters, etc
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const submenuToggle = document.querySelector(".submenu_toggle");
const submenu = document.getElementById("submenu");

// Abrir/cerrar menú principal
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Abrir/cerrar submenú
submenuToggle.addEventListener("click", () => {
  submenu.classList.toggle("active");
});
