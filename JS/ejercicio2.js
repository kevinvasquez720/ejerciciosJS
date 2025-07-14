/*Nota de alumno 
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
        document.getElementById("msj2").innerText = `El promedio es: ${resultado}`;
    }
});