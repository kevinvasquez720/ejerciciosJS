/*Realizar una función para una tienda de coches en donde se deberá calcular: 
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
aplicara en base a lo que selecciono el usuario.*/

function calcularDescuento(coche) {
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

    console.log(`Coche seleccionado: ${coche}`);
    console.log(`Descuento aplicado: ${(descuento * 100).toFixed(2)}%`);
}