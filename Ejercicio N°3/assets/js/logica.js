const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');

const sumar = () => {
  const n1 = parseInt(numero1.value);
  const n2 = parseInt(numero2.value);

  if (isNaN(n1) || isNaN(n2)) {
    alert("Debe ingresar un número");
    resultado.textContent = "";
  } else {
    resultado.textContent = `La suma es ${n1 + n2}`
  }

}

const restar = () => {
  const n1 = parseInt(numero1.value);
  const n2 = parseInt(numero2.value);
  if (isNaN(n1) || isNaN(n2)) {
    alert("Debe ingresar un número");
    resultado.textContent = "";
  } else if (n1 < n2) {
    resultado.textContent = `La resta es 0`
  } else {
    resultado.textContent = `La resta es ${n1 - n2}`
  }
}


const botonSumar = document.getElementById('sumar');
botonSumar.addEventListener('click', sumar)

const botonRestar = document.getElementById('restar');
botonRestar.addEventListener('click', restar)