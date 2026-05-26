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

/* Cursor */

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {

  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

});

const hoverItems = document.querySelectorAll('a, button')

hoverItems.forEach(item => {

  item.addEventListener('mouseenter', () => {

  cursor.style.width = '40px';
  cursor.style.heigth = '40px';

  })
  
  item.addEventListener('mouseleave', ()=> {

  cursor.style.width = '22px';
  cursor.style.heigth = '22px';

});

});