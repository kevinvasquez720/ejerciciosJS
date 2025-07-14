/*Numero mayor*/

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