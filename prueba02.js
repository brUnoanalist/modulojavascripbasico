///En esta sección del Proyecto creará una Función que devuelva las palabras
///randoms que necesitamos.
///Para eso, vas a arrancar con este Arreglo en tu archivo.
///Cree la Función randomWords y ejecutala en la consola. Antes de avanzar,
///asegúrate que retorne una palabra aleatoria.

const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];




let palabra = document.querySelector("h1")
let palabraAleatoria = RandomWords();
let score = 0;
palabra.innerHTML = palabraAleatoria

function addToDOM() {
    palabraAleatoria = document.querySelector("h1")
    palabraAleatoria.innerText = RandomWords();
}
addToDOM()

function RandomWords() {
    let numero = Math.floor((Math.random() * 19));
    //console.log(numero)

    return words[numero];
}

let tiempo = 10
let textoInput = document.querySelector("input");
let puntos = document.querySelector("#score");
let tiempoRestante = document.querySelector("#timeSpan");

textoInput.addEventListener("keyup", (e) => {
    let Input = e.target.value;
    console.log(Input);

    if (words.includes(Input)) {


        console.log("palabra son iguales")
        tiempo = tiempo + 3;
        textoInput.value = "";
        palabraAleatoria = RandomWords();
        palabra.innerText = palabraAleatoria
        score++;
        puntos.innerText = "Puntaje es =" + score;
        console.log(puntos)



    }

})



function actualizarTiempo() {
    document.getElementById("timeSpan").innerText = tiempo;
    if (tiempo == 0)
        gameOver();

    else {
        tiempo--;
        setTimeout("actualizarTiempo()", 1000);
    }


}
actualizarTiempo();


function gameOver() {

    let over = document.querySelector("#end-game-container")
    over.innerText = "Se acabo el tiempo y tu puntaje fue  : " + score;
    alert("Perdiste!")

    var button = document.createElement('button');
    button.innerText = 'Haz Click';
    button.classList.add("button");
    let apretarOtraVez = document.querySelector("#end-game-container")
    apretarOtraVez.appendChild(button);
}