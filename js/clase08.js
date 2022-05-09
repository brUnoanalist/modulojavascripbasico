function cambiarFondo() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

}

var boton = document.querySelector("#boton1")


boton.addEventListener("click",
    function(infoDelEvento) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        console.log(infoDelEvento)

    })

var imagen = document.querySelector("img");

function cambiarFoto() {

    imagen.setAttribute("src", "img/img2.jpg");
}

imagen.addEventListener("click", function() {
    imagen.setAttribute("src", "img/img2.jpg");
})

///cambiar el fonde y el color de letras de parrrafo cuando pase por arriba el mouse y cunado lo saque con el
///mause se camien el fondo nuevamente y las letras de parrrafo

var parrafo = document.querySelector("p");

function cambiarParrafo() {
    parrafo.style.backgroundColor = "black";
    parrafo.style.color = "white";
}
parrafo.addEventListener("mouseover", function() {
    parrafo.style.backgroundColor = "blue";
    parrafo.style.color = "yellow";
})


parrafo.addEventListener("mouseout", function() {
    parrafo.style.backgroundColor = "black";
    parrafo.style.color = "white";
})

var elementosLi = document.querySelectorAll("li");
console.log(elementosLi.length);
for (var i = 0; i < elementosLi.length; i++) {
    elementosLi[i].addEventListener("mouseover", function() {
        this.style.color = "red";
    });
    elementosLi[i].addEventListener("mouseout", function() {
        this.style.color = "black";
    })

}

var texto = document.querySelector("#texto");

texto.addEventListener("keydown", function(info) {
    if (info.keyCode == "a");
    info.preventDefault();
    alert("se presiono la a")
})