
let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let inputNombre = document.getElementById("nombre").value;
    let inputAsunto = document.getElementById("asunto").value;
    let inputMensaje = document.getElementById("mensaje").value;
    let resultado = validar(inputNombre, inputAsunto, inputMensaje);
    if (resultado == true) {
        exito();
    };
});

function validar(nombre, asunto, mensaje) {

    let pasamosLaValidacion = true;
    let validacionNombre = /^[a-zA-Z]+$/gim;
    let validacion = /^[a-zA-Z0-9]+/gim;

    if (validacionNombre.test(nombre) == false) {
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
    return pasamosLaValidacion;
}

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";
    document.getElementById("nombre").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
};