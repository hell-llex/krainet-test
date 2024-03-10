const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close-icon');
const body = document.querySelector('.body');
const menuItem = document.querySelectorAll('.menu__item');

[hamburger, close, overlay, ...menuItem].forEach(elem => {
  elem.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    overlay.classList.toggle('overlay_active');
    body.style.overflow = body.style.overflow ? '' : 'hidden';
  });
})
