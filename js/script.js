const menuHamburguer = document.getElementById("menuHamburguer");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

menuHamburguer.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuHamburguer.classList.toggle("active");
});

/* FECHA AO CLICAR NO LINK */

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuHamburguer.classList.remove("active");
  });
});
