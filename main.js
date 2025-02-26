//22:20 miercoles 26 termina la pre entrega
/* menú principal */
const secciones = {
    opciones: {
        seccionGeneral:"¿Qué desea hacer?",
        opcionesSeccion:[" A. Entrar a la Sección de Libros",
            " | B. Entrar a la Sección de Videojuego", 
            " | C. Entrar a la Sección de Deportes", 
            " | D. Entrar a la Sección Personalizada",
            ` | Para salir, presione ESC o "cancelar"`]
    }
}
/* secciones por bloques */
const seccionA = {
    contenido: {
        tituloSeccion:"Sección de Libros",
        contenidoSeccion:["El Arte de la Guerra",
            "Game of Thrones",
            "El Señor de los Anillos"]
    }
}
const seccionB = {
    contenido: {
        tituloSeccion:"Sección de Videojuegos",
        contenidoSeccion:["The Last Of Us",
            "God Of War",
            "Mario Bros"]
    }
}
const seccionC = {
    contenido: {
        tituloSeccion:"Sección de Deportes",
        contenidoSeccion:["Football",
            "Basquetball",
            "Tennis"]
    }
}
const seccionD = {
    /* ver como se hacia prompt para que el usuario añada arrays/objetos */
    contenido: {
        tituloSeccion:"Sección Extra",
        contenidoSeccion:["Sin contenido por añadir..."]
    }
}
/* respuesta del usuario para elegir una seccion y que ingrese */
const loopOpciones = () => {
    let loop = false
    while(loop == false){
        /* VER COMO HACER QUE SE PONGAN UNO DEBAJO DEL OTRO */
        opcionAElegir = prompt(`${secciones.opciones.seccionGeneral}\n${"\n"+secciones.opciones.opcionesSeccion}`)
        if (opcionAElegir == "a" || opcionAElegir == "A") {
            alert(`${seccionA.contenido.tituloSeccion}\n${"\n"+seccionA.contenido.contenidoSeccion}`)
        } else if (opcionAElegir == "b" || opcionAElegir == "B") {
            alert(`${seccionB.contenido.tituloSeccion}\n${"\n"+seccionB.contenido.contenidoSeccion}`)
        } else if (opcionAElegir == "c" || opcionAElegir == "C") {
            alert(`${seccionC.contenido.tituloSeccion}\n${"\n"+seccionC.contenido.contenidoSeccion}`)
        } else if (opcionAElegir == "d" || opcionAElegir == "D") {
            alert(`${seccionD.contenido.tituloSeccion}\n${"\n"+seccionD.contenido.contenidoSeccion}`)
        } else if (opcionAElegir == null) {
            // CONTINUAR O SALIR DEL LOOP //
            loop = confirm('¿Quiere salir?')
        }
    }
}

const aplicacion = () => {
    /* introduccion y saludo al usuario */
    let usuario = prompt("Bienvenido a tu bloc de notas. Por favor, introduzca su nombre: ")
    while (usuario === "" || usuario === null ) {
        alert(`Nombre no definido`)
        usuario = prompt("Por favor, introduzca su nombre: ")
    }
    alert(`Bienvenido ${usuario}`)
    /* APLICACION // lista de opciones */
    loopOpciones()
    // despedida
    const despedida = "¡De acuerdo, hasta luego!"
    alert(despedida)
}
aplicacion()