/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:  
• La cantidad de valores negativos ingresados. 
• La cantidad de valores positivos ingresados. 
• La cantidad de múltiplos de 15. 
• El valor acumulado de los números ingresados que son pares.*/

function analizarValores() {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let i = 0; i < 10; i++) {
        const valor = parseInt(prompt("Ingrese un número entero:"));

        if (isNaN(valor)) {
            console.log("Valor no válido, por favor ingrese un número entero.");
            i--; // Decrementar i para repetir la iteración
            continue;
        }

        if (valor < 0) {
            negativos++;
        } else if (valor > 0) {
            positivos++;
        }

        if (valor % 15 === 0) {
            multiplosDe15++;
        }

        if (valor % 2 === 0) {
            sumaPares += valor;
        }
    }

    console.log(`Cantidad de valores negativos: ${negativos}`);
    console.log(`Cantidad de valores positivos: ${positivos}`);
    console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
    console.log(`Suma de los números pares: ${sumaPares}`);
}