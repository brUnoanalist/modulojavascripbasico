///En este ejercicio, deberás crear una Función sumArray que acepte un Arreglo de
///números y devuelva la suma de todos ellos. Usá este código para testear tu
///Función:
///sumArray([1,2,3]) // 6
///arreglo = [1, 2, 3]


function sumArray(arreglo) {

    if (arreglo instanceof Array) {
        let sum = arreglo.reduce((acum, y) => acum + y);



        console.log(sum)
        return sum;
    }
}


sumArray([1, 2, 3])