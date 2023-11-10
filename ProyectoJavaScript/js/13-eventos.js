/*Ejercicio Crea una pantalla emergente que se almacene en el h1 */


// let PantallaEmergente = prompt("Introduce tu nombre");

// const heading = document.querySelector(".seccionPrincipal h1");
// console.log(heading)

// heading.textContent=PantallaEmergente

/************************************* */

// window es una palabra reservada, es todo el documento, mas global que un html

console.log(1);
window.addEventListener("load", function () {
    console.log("se ha cargado html,css..")
})

console.log(2)

document.addEventListener("DOMContentLoaded", function () {
    console.log("Se ha cargado el html")
}) //DOMContentLoaded palabra reservada
//DOMCONTENTLOADED ESPERA QUE SE CARGUE UNICAMENTE EL HTML, EL RESTO NO LE IMPORTA
console.log(4)

//Evento de Scroll
window.addEventListener("scroll", function () {
    console.log("Scrolling...")
})

//Evento de CLICK
document.querySelector(".botonPrincipal");
botonPrincipal.addEventListener("click", function (evento) {
    console.log(evento)
    evento.preventDefault();
    console.log("Mostrando notificacion..")
})


const botonNotificacion = document.querySelector("#boton"); //HEMOS SELECCIONADO YA EL ELEMENTO

botonNotificacion.addEventListener("click", function (evento) {
    console.log(evento);//ME MUESTRA INFORMACIÓN DEL EVENTO
    evento.preventDefault();// PARA EVITAR QUE EN LOS FORMULARIOS ME RECARGUE LA PÁGINA SOLA
    //SUELE USAR EN FORMULARIOS

    console.log("Mostrando Notificación...");
})

//EJERCICIO CREAR FORMULARIO DE CONTACTO
const nombre = document.querySelector("#Nombre");

//Evento tipo CHANGE

// nombre.addEventListener("change", function () {
//     console.log("nombre completado")
// })



//Evento  tipo INPUT


/**ejercicio LVL 400 */

let datos = {
    nombre: "",
    email: "",
    mensaje: ""
}
const correo = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
let resultadoEmail, resultadoNombre, resultadoMensaje

email.addEventListener("input", function (evento) {
    resultadoEmail = evento.target.value
    actualziarTexto();
    leerTexto(evento);

})

mensaje.addEventListener("input", function (evento) {
    resultadoMensaje = evento.target.value
    actualziarTexto();
    leerTexto(evento);

})

// nombre.addEventListener("input", function (evento) {
//     console.log("Escribiendo nombre con input..")
//     console.log(evento)
//     console.log(evento.target.value)
//     resultadoNombre = evento.target.value
//     actualziarTexto();
//     leerTexto(evento);
// })

function actualziarTexto() {
    document.querySelector(".parrafo").textContent = `esta es la web de ${resultadoNombre}
                                                   con email ${resultadoEmail} 
                                                   y su propuesta es ${resultadoMensaje}`

}



function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value
    console.log(datos)
}

//EVENTOS DE SUBMIT

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    console.log("Enviando Formulario...")
})

//SUBMIT PARA FORMULARIOS, ESTÁ ASOCIADO AL FORMULARIO EN GENERAL
//CLICK PARA OTROS BOTONES







/*

!!!!!!!!!!!!!!!!!!!!!!!
EJERCICIO

CREAR UN ARCHIVO .JSON QUE ALMACENE LA INFO DE ZONAS TUCARRERADIGITAL

CREAR UN FETCH QUE ME LEA LA INFORMACIÓN Y ME LA MUESTRE POR PANTALLA
EN EL MISMO FORMATO QUE SE MUESTRA

*/

function obtenerZonas() {
    fetch("zonas.json") //fetch (url con la api)
        .then(response => {
            return response.json() //voy a obtener una respuesta tipo JSON
        })
        .then(datos => {
            const { zonas } = datos; //DESTRUCTURING
            zonas.forEach(zonas => {
                const sectionZonas= document.querySelector(".zonas")

                const divZonas = document.createElement("div")
                const texto = document.createElement("p")
                const texto1 = document.createElement("p")
                const divEnlaces = document.createElement("div")
                const enlace1 = document.createElement("a")
                const enlace2 = document.createElement("a")


                sectionZonas.appendChild(divZonas)
                divZonas.appendChild(texto)
                divZonas.appendChild(texto1)
                divZonas.appendChild(divEnlaces)
                divEnlaces.appendChild(enlace1)
                divEnlaces.appendChild(enlace2)

                enlace1.textContent = ("   IR A LA PAGINA DE ESTA ZONA    ")
                enlace1.href = (zonas.enlacesZonas)
                enlace2.textContent = (" VER CURSO DE ESTA ZONA ")
                enlace2.href = (zonas.enlacesCursos)
                texto.textContent = (zonas.zona)
                texto1.textContent = ( zonas.ciudades)


                divEnlaces.classList.add("estiloEnlaces")
                divZonas.classList.add("fichas")

                // console.log(zonas)
                // console.log(zonas.id)
                // console.log(zonas.zona)
                // console.log(zonas.ciudades)
                // console.log(zonas.enlacesZonas)
                // console.log(zonas.enlacesCursos)
            });
        })
}
obtenerZonas(); //La llamamos
