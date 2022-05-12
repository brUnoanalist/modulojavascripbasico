var peliculas = [{
        titulo: 'El padrino',
        rating: 8,
        loHasVisto: " True"

    },
    {
        titulo: 'Rey Leon',
        rating: 6,
        loHasVisto: "False"
    },
    {
        titulo: 'Como perros y gatos',
        rating: 4,
        loHasVisto: "True"
    },
    {
        titulo: 'Batman',
        rating: 10,
        loHasVisto: "True"
    }

]


for (let i in peliculas) {

    loHV = peliculas[i].loHasVisto
    if (loHV === "True")
        console.log("Viste " + " ", peliculas[i].titulo + " Valoracion ", peliculas[i].rating);
    if (loHV === "False")
        console.log("No la haz visto " + " ", peliculas[i].titulo + " Valoracion ", peliculas[i].rating);

}


////arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2},
////{hola: 3}, {hola: 4}, {hola: 5 }]

var num = 5
str = "hola"

for (var i = 1; i < num + 1; i++) {
    var hola1 = new Object();

    hola1.Hola = i;
    console.log(hola1)
}