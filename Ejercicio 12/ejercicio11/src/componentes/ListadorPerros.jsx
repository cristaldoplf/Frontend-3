const ListadorPerros = (listaPerros) => {
    const listaPerros = [
        {
            nombre: "Firulais",
            edad: 11,
            sexo: "Macho",
            raza: "Pastor Alemán",
            tamanio: "Grande",
        },
        {
            nombre: "Maya",
            edad: 13,
            sexo: "Hembra",
            raza: "Pug",
            tamanio: "Chico",
        },
        {
            nombre: "Pipo",
            edad: 5,
            sexo: "Macho",
            raza: "Schnauzer",
            tamanio: "Mediano",
        },
        {
            nombre: "Pacha",
            edad: 2,
            Sexo: "Hembra",
            Raza: "Mestizo",
            Tamanio: "Chico",
        },
    
    ]
    return (
        
            <div>
                <h1>Nombre: {listaPerros[0].nombre}</h1>
                <ul>
                    <li>Edad:{listaPerros[0].edad}</li>
                    <li>Sexo: {listaPerros[0].sexo}</li>
                    <li>Raza: {listaPerros[0].raza}</li>
                    <li>Tamaño: {listaPerros[0].tamanio}</li>
                </ul>
            </div>
        
    )
}

export default ListadorPerros;

/* nombre: "Firulais",
            edad: 11,
            sexo: "Macho",
            raza: "Pastor Alemán",
            tamanio: "Grande", */
