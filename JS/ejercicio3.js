/* Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
a=15%
b=30%
c=10%
d=20%
*/
function calcularAumento(nombre, salario, categoria) {
    let aumento;

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
    console.log(`Empleado: ${nombre}`);
    console.log(`Salario actual: $${salario.toFixed(2)}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Aumento: ${(aumento * 100).toFixed(2)}%`);
    console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);
}