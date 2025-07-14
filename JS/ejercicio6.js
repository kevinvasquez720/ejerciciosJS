/*Crear una Función para calcular el descuento en viajes turísticos tomando 
/*en cuenta lo siguiente:  
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%*/

document.getElementById("btn-viajes").addEventListener("click", function calcularDescuentoViaje() {
    let descuento = 0;
    let origen = document.getElementById("origen").value.toLowerCase();
    let destino = document.getElementById("destino").value.toLowerCase();

    if (origen === destino) {
        document.getElementById("msj6").innerHTML = "El origen y el destino no pueden ser iguales.";
        return; // Detiene la ejecución si son iguales
    } else {
        if (origen === "palma" && destino === "la costa del sol") {
            descuento = 0.05;
        } else {
            switch (destino) {
                case 'panchimalco':
                    descuento = 0.10;
                    break;
                case 'puerto el triunfo':
                    descuento = 0.15;
                    break;
                default:
                    descuento = 0;
                    break;
            }
        }
    }

    console.log(`Origen: ${origen}`);
    console.log(`Destino: ${destino}`);
    console.log(`Descuento aplicado: ${(descuento * 100).toFixed(2)}%`);

    document.getElementById("msj6").innerHTML = `El descuento aplicado es del ${(descuento * 100).toFixed(2)}%`;
});