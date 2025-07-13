/*Nota de alumno 
Examen =20% 
• tareas = 40% 
• asistencia = 10% 
• investigación = 30%*/
function promedio(tareas, examen, asistencia, investigacion){
    let resultado = (tareas * 0.4) + (examen * 0.2) + (asistencia * 0.1) + (investigacion * 0.3);
    console.log('El promedio es:', resultado);
}