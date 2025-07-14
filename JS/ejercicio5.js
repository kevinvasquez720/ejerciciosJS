/*Realizar una función para una tienda de coches en donde se deberá calcular: 
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
aplicara en base a lo que selecciono el usuario.*/

document.getElementById("btn-descuento").addEventListener("click",function calcularDescuento() {
    let coche = document.getElementById("modelo").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let montodescuento = 0;
    let precioFinal = 0;
    let descuento;

    switch (coche.toUpperCase()) {
        case 'FORD FIESTA':
            descuento = 0.05;
            break;
        case 'FORD FOCUS':
            descuento = 0.10;
            break;
        case 'FORD ESCAPE':
            descuento = 0.20;
            break;
        default:
            console.log("Coche no válido");
            return;
    }
    montodescuento = precio * descuento;
    precioFinal = precio -(precio * descuento);
    document.getElementById("msj5").innerHTML = `El coche seleccionado es: ${coche} <br>
    El precio original es: $${precio.toFixed(2)} <br>
    El descuento aplicado es: $${montodescuento.toFixed(2)} <br>
    El precio final después del descuento es: $${precioFinal.toFixed(2)}`;
});