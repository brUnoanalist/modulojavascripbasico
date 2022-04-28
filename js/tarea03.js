////números del 1 al 100, teniendo en cuenta estos criterios:
///● Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
///● Si es múltiplo de 5, deberá imprimir "Buzz".
////● Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".




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





var cachipun = Math.random();

alert(cachipun); {
    if (cachipun <= 0.3)
        alert("sacaste papel")
} {
    if (cachipun <= 0.6)
        alert("sacaste tijera")
} {
    if (cachipun <= 1)
        alert("sacaste piedra")
}