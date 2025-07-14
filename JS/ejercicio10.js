/*Se cuenta con la siguiente información:  
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
        if (!isNaN(edad)) {
            edadesManana.push(edad);
        }
        else {
            alert("Por favor, ingrese una edad válida.");
            i--; // Decrementar i para repetir la entrada
        }
    }

    for (let i = 1; i <= 6; i++) {
        const edad = parseInt(prompt(`Edad alumno ${i} del turno tarde:`));
        if (!isNaN(edad)) {
            edadesTarde.push(edad);
        }
        else {
            alert("Por favor, ingrese una edad válida.");
            i--; // Decrementar i para repetir la entrada
        }
    }

    for (let i = 1; i <= 11; i++) {
        const edad = parseInt(prompt(`Edad alumno ${i} del turno noche:`));
        if (!isNaN(edad)) {
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
