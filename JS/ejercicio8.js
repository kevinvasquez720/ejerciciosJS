/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:  
• La cantidad de valores negativos ingresados. 
• La cantidad de valores positivos ingresados. 
• La cantidad de múltiplos de 15. 
• El valor acumulado de los números ingresados que son pares.*/

function tablaDeMultiplicacion(numero) {
    if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
        return;
    }

    console.log(`Tabla de multiplicación del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}