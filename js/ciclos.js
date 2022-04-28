////var cuadrado = numero * numero;
///var salir = true
///while (salir) {
///var numero = prompt("ingrese su numero");
///if (numero == "0") {
/// alert("el cuadrado de 0  es 0");
///salir = true
///} else if (Number(numero)) {
/// alert("el " + numero, "es " + cuadrado);
///  salir = false
/// } else {
///  alert("el numero que ingreso no es numero");
///  salir = true
///}
///console.log("inicio")

///var numero = 1;
///var acumulador = 0;
///while (numero != 0) {
///var numero = Number(prompt("ingrese su numero"));
///acumulador = acumulador + numero;
///}
///alert("la suma de los numeros es " + acumulador);
///}///






y = 1;
while (y <= 100) {
    y += 1
    if (y % 3 == 0 && y % 5 == 0) {
        console.log(y + "FizzBuzz");
    } else if (y % 5 == 0) {
        console.log(y + "Buzz");
    } else if (y % 3 == 0) {
        console.log(y + "Buzz");
    }
}