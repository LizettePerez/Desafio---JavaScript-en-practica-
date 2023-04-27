let pintar = document.querySelector('.pintar');
let rojo = document.querySelector('.rojo');
let naranja = document.querySelector('.naranja');
let amarillo = document.querySelector('.amarillo');
let verde = document.querySelector('.verde');
let aqua = document.querySelector('.aqua');
let rosa = document.querySelector('.rosa');

rojo.addEventListener('click', () => {
  pintar.style.backgroundColor = 'red';
});

naranja.addEventListener('click', () => {
  pintar.style.backgroundColor = 'orange';
});

amarillo.addEventListener('click', () => {
  pintar.style.backgroundColor = 'yellow';
});

verde.addEventListener('click', () => {
  pintar.style.backgroundColor = 'green';
});

aqua.addEventListener('click', () => {
  pintar.style.backgroundColor = 'aqua';
});

rosa.addEventListener('click', () => {
  pintar.style.backgroundColor = 'pink';
});
