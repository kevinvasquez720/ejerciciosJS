/* Ejercicio 1: muestra si alguien es mayor de edad. */

document.getElementById('btn-edad').addEventListener('click', function mayorDeEdad() {
    let edad = parseInt(document.getElementById("edad").value);
    let resultado = edad >= 18 ? "La persona es mayor de edad" : "La persona no es mayor de edad";
    document.getElementById("msj1").innerText = resultado;
});

/*Ejercicio 2: Calcula la nota de un alumno.
Nota de alumno 
Examen =20% 
• tareas = 40% 
• asistencia = 10% 
• investigación = 30%*/

document.getElementById("btn-nota").addEventListener("click", function promedio(){
    let tareas = parseFloat(document.getElementById("tareas").value);
    let examen = parseFloat(document.getElementById("examen").value);
    let asistencia = parseFloat(document.getElementById("asistencia").value);
    let investigacion = parseFloat(document.getElementById("investigacion").value);
    if (typeof tareas !== 'number' || typeof examen !== 'number' || typeof asistencia !== 'number' || typeof investigacion !== 'number') {
        document.getElementById("msj2").innerText = "Por favor, ingrese valores numéricos válidos.";
    }
    else if (tareas < 0 || examen < 0 || asistencia < 0 || investigacion < 0) {
        document.getElementById("msj2").innerText = "Los valores no pueden ser negativos.";
    }
    else if (tareas > 10 || examen > 10 || asistencia > 10 || investigacion > 10) {
        document.getElementById("msj2").innerText = "Los valores no pueden ser mayores a 10.";
    }
    else{
        let resultado = (tareas * 0.4) + (examen * 0.2) + (asistencia * 0.1) + (investigacion * 0.3);
        document.getElementById("msj2").innerText = `El promedio es: ${resultado.toFixed(2)}`;
    }
});

/*Ejercicio3:
 Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
a=15%
b=30%
c=10%
d=20%
*/
document.getElementById("btn-aumento").addEventListener("click",function calcularAumento() {
    let aumento;
    nombre = document.getElementById("nombre").value;
    salario = parseFloat(document.getElementById("salario").value);
    categoria = document.getElementById("categoria").value.toLowerCase();
    if (isNaN(salario) || salario < 0) {
        document.getElementById("msj3").innerText = "Por favor, ingrese un salario válido.";
        return;
    }
    else if (!nombre || !categoria) {
        document.getElementById("msj3").innerText = "Por favor, complete todos los campos.";
        return;
    }
    else {
        switch (categoria) {
        case 'a':
            aumento = 0.15;
            break;
        case 'b':
            aumento = 0.30;
            break;
        case 'c':
            aumento = 0.10;
            break;
        case 'd':
            aumento = 0.20;
            break;
        default:
            console.log("Categoría no válida");
            return;
    }

    const nuevoSalario = salario + (salario * aumento);

    document.getElementById("msj3").innerText = `Empleado: ${nombre}, Salario actual: $${salario.toFixed(2)}, Categoría: ${categoria}, Aumento: ${(aumento * 100).toFixed(2)}%, Nuevo salario: $${nuevoSalario.toFixed(2)}`;
    }
});

/*Ejercicio 4:
Numero mayor*/

document.getElementById("btn-mayor").addEventListener("click",function mayor() {
    let a = parseFloat(document.getElementById("numero1").value);
    let b = parseFloat(document.getElementById("numero2").value);
    if (a > b) {
        document.getElementById("msj4").innerText = `El número mayor es: ${a}`;
    } else if (b > a) {
        document.getElementById("msj4").innerText = `El número mayor es: ${b}`;
    } else {
        document.getElementById("msj4").innerText = "Los números son iguales";
    }
});

/*Ejercicio 5:
Realizar una función para una tienda de coches en donde se deberá calcular: 
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

/*Ejercicio 6:
Crear una Función para calcular el descuento en viajes turísticos tomando 
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

/*Ejercicio 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:  
• La cantidad de valores negativos ingresados. 
• La cantidad de valores positivos ingresados. 
• La cantidad de múltiplos de 15. 
• El valor acumulado de los números ingresados que son pares.*/

document.getElementById("btn-numeros").addEventListener("click", function analizarValores() {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let i = 0; i < 10; i++) {
        const valor = parseFloat(prompt("Ingrese un número entero:"));
        if (isNaN(valor)) {
            alert("Valor no válido, por favor ingrese un número entero.");
            i--; 
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
    document.getElementById("msj7").innerHTML = `Cantidad de valores negativos: ${negativos} <br>
    Cantidad de valores positivos: ${positivos} <br>
    Cantidad de múltiplos de 15: ${multiplosDe15} <br>
    Suma de los números pares: ${sumaPares}`;       
});

/* Ejercicio 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.*/

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

/* Ejercicio 9:
Crear  programa  donde  se  introduce  una  temperatura  en  Celsius  y  salga  el  resultado  en 
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente: 
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja” 
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada” 
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta” 
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

document.getElementById("btn-convertir").addEventListener("click",function convertirCelsiusAFahrenheit() {

    let celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
        document.getElementById("msj9").innerHTML=("Por favor, ingrese una temperatura válida en Celsius.");
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    let respuesta='';
    respuesta += (`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>`);

    if (fahrenheit >= 14 && fahrenheit < 32) {
        respuesta += ("Temperatura baja<br>");
        document.getElementById("msj9").innerHTML=(respuesta);
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        respuesta += ("Temperatura adecuada<br>");
        document.getElementById("msj9").innerHTML=(respuesta);
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        respuesta += ("Temperatura alta<br>");
        document.getElementById("msj9").innerHTML=(respuesta);
    } else {
        respuesta += ("Temperatura desconocida<br>");
        document.getElementById("msj9").innerHTML=(respuesta);
    }
});

/*Ejercicio 10:
Se cuenta con la siguiente información:  
• Las edades de 5 estudiantes del turno mañana.  
• Las edades de 6 estudiantes del turno tarde.  
• Las edades de 11 estudiantes del turno noche.  
Nota: Las edades de cada estudiante se deberán ingresar por la web.  
Lo que queremos devolver: 
• Obtener el promedio de las edades de cada turno (tres promedios). 
• Imprimir dichos promedios (promedio de cada turno). 
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un 
promedio de edades mayor.*/

document.getElementById("btn-alumnos").addEventListener("click", function calcularPromedios() {
    let edadesManana = [];
    let edadesTarde = [];
    let edadesNoche = [];

    for (let i = 1; i <= 5; i++) {
        const edad = parseInt(prompt(`Edad alumno ${i} del turno mañana:`));
        if (!isNaN(edad) && edad >= 0) {
            edadesManana.push(edad);
        }
        else {
            alert("Por favor, ingrese una edad válida.");
            i--; // Decrementar i para repetir la entrada
        }
    }

    for (let i = 1; i <= 6; i++) {
        const edad = parseInt(prompt(`Edad alumno ${i} del turno tarde:`));
        if (!isNaN(edad) && edad >= 0) {
            edadesTarde.push(edad);
        }
        else {
            alert("Por favor, ingrese una edad válida.");
            i--; // Decrementar i para repetir la entrada
        }
    }

    for (let i = 1; i <= 11; i++) {
        const edad = parseInt(prompt(`Edad alumno ${i} del turno noche:`));
        if (!isNaN(edad) && edad >= 0) {
            edadesNoche.push(edad);
        }
        else {
            alert("Por favor, ingrese una edad válida.");
            i--; // Decrementar i para repetir la entrada
        }
    }

    const promedioManana = edadesManana.reduce((a, b) => a + b, 0) / edadesManana.length;
    const promedioTarde = edadesTarde.reduce((a, b) => a + b, 0) / edadesTarde.length;
    const promedioNoche = edadesNoche.reduce((a, b) => a + b, 0) / edadesNoche.length;

    let mensaje = `Promedio de la mañana: ${promedioManana.toFixed(2)}<br>`;
    mensaje += `Promedio de la tarde: ${promedioTarde.toFixed(2)}<br>`;
    mensaje += `Promedio de la noche: ${promedioNoche.toFixed(2)}<br>`;

    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
        mensaje += "El turno con mayor promedio es el de la mañana.";
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
        mensaje += "El turno con mayor promedio es el de la tarde.";
    } else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
        mensaje += "El turno con mayor promedio es el de la noche.";
    } else {
        mensaje += "Hay un empate en los promedios.";
    }

    document.getElementById("msj10").innerHTML = mensaje;
});