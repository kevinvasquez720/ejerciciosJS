/*Nota de alumno 
Examen =20% 
• tareas = 40% 
• asistencia = 10% 
• investigación = 30%*/
function promedio(tareas, examen, asistencia, investigacion){
    if (typeof tareas !== 'number' || typeof examen !== 'number' || typeof asistencia !== 'number' || typeof investigacion !== 'number') {
        console.log("Por favor, ingrese valores numéricos válidos.");
        return;
    }
    else if (tareas < 0 || examen < 0 || asistencia < 0 || investigacion < 0) {
        console.log("Los valores no pueden ser negativos.");
    }
    else if (tareas > 10 || examen > 10 || asistencia > 10 || investigacion > 10) {
        console.log("Los valores no pueden ser mayores a 10.");
    }
    else{
        let resultado = (tareas * 0.4) + (examen * 0.2) + (asistencia * 0.1) + (investigacion * 0.3);
        console.log('El promedio es:', resultado);
    }
}