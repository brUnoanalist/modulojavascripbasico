var color = prompt("ingrese color")
var input = document.querySelector('input')

input.style.backgroundColor = color;
input.addEventListener("keydown", function(info) {
    if (info == "Backspace");
    input.style.backgroundColor = "white";

})