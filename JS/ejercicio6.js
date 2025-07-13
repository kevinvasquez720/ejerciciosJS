/*Crear una Función para calcular el descuento en viajes turísticos tomando 
en cuenta lo siguiente:  
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%*/

function calcularDescuentoViaje(origen, destino) {
    let descuento;

    if (origen.toLowerCase() === 'palma' && destino.toLowerCase() === 'la costa del sol') {
        switch (destino.toLowerCase()) {
            case 'la costa del sol':
                descuento = 0.05;
                break;
            case 'panchimalco':
                descuento = 0.10;
                break;
            case 'puerto el triunfo':
                descuento = 0.15;
                break;
            default:
                console.log("Destino no válido");
                return;
        }
    } else {
        console.log("Origen no válido");
        return;
    }

    console.log(`Origen: ${origen}`);
    console.log(`Destino: ${destino}`);
    console.log(`Descuento aplicado: ${(descuento * 100).toFixed(2)}%`);
}