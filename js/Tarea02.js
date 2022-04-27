var numero = prompt("ingrese un numero: ")
if (numero % 2 == 0) {
    alert("numero " + numero + " es par")
} else {
    alert("es impar")

}
///En este ejercicio, crearás un programa que le indique a las mujeres si están en
///edad, o no, de jubilarse.
///Importante: En Chile, las mujeres pueden jubilarse a los 60 años.
edad = prompt("ïndique su edad")

alert(edad <= 60 ? "Aun no puede jubilarse" : "Ya puede jubilarse");

///En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como
///a los hombres, si están en edad de jubilarse.
///Importante: En Chile, los hombres pueden jubilarse a los 65 añosedad = prompt("ïndique su edad")

edad = prompt("ïndique su edad")
sexo = prompt("1)Masculino*******2)Femenino")
if (sexo == 1 && edad <= 65 || sexo == 2 && edad <= 60) {
    alert("Aun no puede jubilarse")
} else {
    alert("Ya puede jubilarse")
}