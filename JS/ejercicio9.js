/*Crear  programa  donde  se  introduce  una  temperatura  en  Celsius  y  salga  el  resultado  en 
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