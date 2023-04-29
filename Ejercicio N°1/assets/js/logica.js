
let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  // Prevenir el comportamiento por defecto del formulario al ser enviado
  event.preventDefault();
  // Llamar a la función limpiarErrores para borrar los mensajes de error
  limpiarErrores();

  // Obtener los valores de los campos de entrada del formulario
  let inputNombre = document.getElementById("nombre").value;
  let inputAsunto = document.getElementById("asunto").value;
  let inputMensaje = document.getElementById("mensaje").value;

  // Validar los valores de los campos de entrada con la función validar y guardar el resultado
  let resultado = validar(inputNombre, inputAsunto, inputMensaje);
  // Si el resultado de la validación es verdadero, llamar a la función exito
  if (resultado == true) {
    exito();
  };
});

// Función para validar los valores de los campos de entrada del formulario
function validar(nombre, asunto, mensaje) {
  // Crear una variable para indicar si pasamos la validación
  let pasamosLaValidacion = true;

  // Crear expresiones regulares para validar el nombre, el asunto y el mensaje
  let validacionNombre = /[a-zA-Z]/gim;
  let validacion = /[a-zA-Z0-9]/gim;

  // Comprobar si el nombre es válido usando la expresión regular validacionNombre
  if (validacionNombre.test(nombre) == false) {
    // Si no es válido, mostrar un mensaje de error debajo del campo de entrada de nombre
    document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido."
    pasamosLaValidacion = false;
  }
  if (validacion.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido."
    pasamosLaValidacion = false;
  }
  if (validacion.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido."
    pasamosLaValidacion = false;
  }

  // Devolver si pasamos la validación o no
  return pasamosLaValidacion;
}

function limpiarErrores() {
  // Limpiar el mensaje de resultado
  document.querySelector(".resultado").innerHTML = "";

  // Limpiar los mensajes de error debajo de los campos de entrada
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
};

function exito() {
  // Mostrar un mensaje de éxito debajo del formulario
  document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";

  // Limpiar los valores de los campos de entrada del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("asunto").value = "";
  document.getElementById("mensaje").value = "";
};