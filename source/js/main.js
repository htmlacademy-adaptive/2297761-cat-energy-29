const toogleButtonElement = document.querySelector('.main-nav__toggle');
const menuElement = document.querySelector('.main-nav');
const nojsElement = document.querySelector('.main-nav--nojs');
nojsElement.classList.remove('main-nav--nojs');


toogleButtonElement.addEventListener('click', function () {
  toogleButtonElement.classList.toggle('main-nav__toggle--closed');
  menuElement.classList.toggle('main-nav--opened')
})
