let pintar = document.querySelector('#caja');
let rojo = document.querySelector('#btn-1');
let naranja = document.querySelector('#btn-2');
let amarillo = document.querySelector('#btn-3');
let verde = document.querySelector('#btn-4');
let aqua = document.querySelector('#btn-5');
let rosa = document.querySelector('#btn-6');

rojo.addEventListener('click', () => {
  pintar.style.backgroundColor = '#e53e3e';
});

naranja.addEventListener('click', () => {
  pintar.style.backgroundColor = '#dd6b20';
});

amarillo.addEventListener('click', () => {
  pintar.style.backgroundColor = '#faf089';
});

verde.addEventListener('click', () => {
  pintar.style.backgroundColor = '#48bb78';
});

aqua.addEventListener('click', () => {
  pintar.style.backgroundColor = '#81e6d9';
});

rosa.addEventListener('click', () => {
  pintar.style.backgroundColor = '#d53f8c';
});
