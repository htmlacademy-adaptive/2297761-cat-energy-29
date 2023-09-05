const toogleButtonElement = document.querySelector('.main-header__toggle');
const menuElement = document.querySelector('.main-nav');
const nojsElement = document.querySelector('.main-nav--nojs');
nojsElement.classList.remove('main-nav--nojs');


toogleButtonElement.addEventListener('click', function () {
  toogleButtonElement.classList.toggle('main-header__toggle--closed');
  menuElement.classList.toggle('main-nav--opened')
})

var image = {
  url: '/img/map-logo.png',
  scaledSize : new google.maps.Size(57, 53),
  };
