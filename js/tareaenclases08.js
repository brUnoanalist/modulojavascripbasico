var formulario = document.querySelector("form")
var boton = document.querySelector("#boton1")
boton.addEventListener("click", function() {
    var espacio = document.createElement("br")
    var agregarTarea = document.createElement("input");
    var texto = document.createElement("h4");
    texto.innerText = "nuevo texto para agregar tarea";

    agregarTarea.setAttribute("type", "text")
    formulario.appendChild(espacio)
    formulario.appendChild(texto)
    formulario.appendChild(agregarTarea);

})