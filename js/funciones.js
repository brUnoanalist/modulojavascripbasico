function funcionPow(base, exponente) {
    y = 0
    var resultado = 1
    while (y < exponente) {

        var resultado = resultado * base;
        y++;

    }
    return resultado;


}
funcionPow(2, 10)

function multiplicador(num1, num2) {
    console.log("los valores son " + num1 + " y " + num2)
    return (num1 * num2);


}

var multi = multiplicador(3, 4)
console.log(multi)


function factorial(num) {
    contador = 1
    acum = 1
    while (contador <= num) {
        acum = contador * acum

        contador++;
        console.log(acum)
    }


}
factorial(5)