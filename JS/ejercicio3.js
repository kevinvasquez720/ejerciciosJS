/* Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
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