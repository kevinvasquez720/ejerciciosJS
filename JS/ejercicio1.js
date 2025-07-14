/* Ejercicio 1: muestra si alguien es mayor de edad. */

document.getElementById('btn-edad').addEventListener('click', function mayorDeEdad() {
    let edad = parseInt(document.getElementById("edad").value);
    let resultado = edad >= 18 ? "La persona es mayor de edad" : "La persona no es mayor de edad";
    document.getElementById("msj1").innerText = resultado;
});