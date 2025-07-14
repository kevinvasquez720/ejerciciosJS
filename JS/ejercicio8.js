/*Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.*/

document.getElementById("btn-tabla").addEventListener("click", function tablaDeMultiplicacion() {
    let numero = parseInt(document.getElementById("numero").value);
    
    if (isNaN(numero)) {
        document.getElementById("msj8").innerHTML = "Por favor, ingrese un número válido.";
        return;
    }

    let resultado = `<strong>Tabla de multiplicar del ${numero}:</strong><br>`;
    
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    document.getElementById("msj8").innerHTML = resultado;
});