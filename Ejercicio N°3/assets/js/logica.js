const numero1 = document.getElementById('valor1');
const numero2 = document.getElementById('valor2');
const resultado = document.querySelector('.resultado');

const sumar = () => {
  const n1 = parseInt(numero1.value);
  const n2 = parseInt(numero2.value);

  if (isNaN(n1) || isNaN(n2)) {
    alert("Debe ingresar un número");
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = ` ${n1 + n2} `
  }

}

const restar = () => {
  const n1 = parseInt(numero1.value);
  const n2 = parseInt(numero2.value);
  if (isNaN(n1) || isNaN(n2)) {
    alert("Debe ingresar un número");
    resultado.innerHTML = "";
  } else if (n1 < n2) {
    resultado.innerHTML = ` 0 `
  } else {
    resultado.innerHTML = ` ${n1 - n2} `
  }
}


const botonSumar = document.getElementById('btn-sumar');
botonSumar.addEventListener('click', sumar)

const botonRestar = document.getElementById('btn-restar');
botonRestar.addEventListener('click', restar)