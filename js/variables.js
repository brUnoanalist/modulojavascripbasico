var num1 = prompt("ingrese numero");
var num2 = prompt("ingrese numero");
var operador = prompt("ingrese operador");

if (operador === "+") {
    var resultado1 = Number(num1) + Number(num2);
    alert("El resultado es:  " + resultado1);
} else if (operador === "-") {
    var resultado1 = Number(num1) - Number(num2);
    alert("El resultado es:  " + resultado1);
} else if (operador === "*") {
    var resultado1 = Number(num1) * Number(num2);
    alert("El resultado es:  " + resultado1);
} else if (operador === "/") {
    var resultado1 = Number(num1) / Number(num2);
    alert("El resultado es:  " + resultado1);
}


//lados de una caja
lado1 = prompt("ïndique un largo")
lado2 = prompt("ïndique el otro ancho")
alert(lado1 == lado2 ? "es un cuadrado" : "es un rectangulo");

// ingresar 2 numero e indicar cual es el mayor
num1 = prompt("ïndique un numero")
num2 = prompt("ïndique el otro numero")
alert(num1 > num2 ? "primer numero es mayor" : "segundo numero es mayor");