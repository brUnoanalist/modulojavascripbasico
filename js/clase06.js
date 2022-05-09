let persona = [
    { rut: 17996326, nombre: "bruno", apellido: "fuenzalida" },
    { rut: 17838232, nombre: "paula", apellido: "ruiz" },
    { rut: 17536221, nombre: "denis", apellido: "pepe" }
]


console.log(persona[1].apellido)
console.table(persona)

let auto = {
    marca: "ford",
    modelo: "ecosport",
    anio: 2010
}
for (let elemento in auto) {
    console.log(elemento + "=" + auto[elemento]);
}

let pokemon = {
    numero: 25,
    nombre: "pikachu",
    tipo: ["electrico"],
    impactrueno: function() {
        console.log("Impactrueno");

    }


}
pokemon.impactrueno();