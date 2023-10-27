/*  TRY CATCH  */

const numero1 = 20;
const numero3 = 40;

console.log(numero1);
try {
    console.log(numero2)
} catch (error) {
    console.log("tienes un error en console log numero2")
}
console.log(numero3);

/////////////
/*PROMISE   https://lenguajejs.com/javascript/asincronia/promesas/  */
const autenticado = true;

const usuarioAutenticado = new Promise((resolve, reject) => {

    if (autenticado) {
        resolve("usuario autenticado"); //El promise se cumple
    } else {
        reject("No se puede iniciar sesion"); //El promise no se cumple
    }
});

console.log(usuarioAutenticado);

//En las promises existen 3 valores
/*
Pending
Fullfiller
Reject
*/

usuarioAutenticado
    .then(function (resultado) {
        console.log(resultado)
    })
    .catch(function (resultado) {
        console.log(resultado)
    })


//Creamos un boton creado enn html
const boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
    //CLICK ES UNA PALABRA YA DEFINIDA, ENTONCES EL RPOGRAMA ESPERARA ESE EVENTO
    console.log("Diste click")

    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`));
});


/*if (Notification.permission == "granted"){               !!! ESTA COMENTADO PARA QUE NO SALGA TODO EL RATO LA NOTI
    new Notification("Esta es una notificacion",
    {
        icon:"../../ProyectoInicio/img/ico-informate.png",
        body: "Notificacion tu carrera digital"

    })
}
*/

/* ASYNC/AWAIT

SI ENTRAN DOS PERSONAS A UN RESTAURANTE. UNA PIDE UN VASO DE AGUA, OTRA UN MENÚ
NO ESPERAMOS A QUE ESTÉ LISTO EL MENU PARA SERVIRLE A LA OTRA PERSONA EL VASO DE AGUA

LO MISMO PASA EN JAVASCRIPT, SI HAGO UNA CONSULTA A LA BASE DE DATOS
LISTADO ULTIMOS 10000 CLIENTES ME VA A LLEVAR UN TIEMPO, PERO ME IRA MOSTRANDO
EL RESTO DEL SITIO WEB

SI NECESITO ESPERAR A UNA FUNCIÓN PARA PODER EJECUTAR OTRA
HAGO USO DE ASYNC AWAIT


*/

function descargarNuevosClients() {
    return new Promise(resolve => {
        console.log("Descargando clientes....espere...")
        setTimeout(() => {
            resolve("Los clientres fueros descargados")
        }, 5000)

    });
}

//Simulando la consulta a una base de datos para obtener una Respuesta
setTimeout(function () {
    console.log("Set time out esta Finalizado")
}, 3000//milisegundos
)




async function app() {
    const resultadosAsync = await descargarNuevosClients();
    console.log(resultadosAsync)
    console.log("soy el del menu")
}
app();
console.log("soy el de la cervza")

// setInterval(function () { 
//     console.log("Set interval actuando")
// }
// ,4000)



//!!!!!!!!!!!!!!!!!!!!!!
//EJERCICIO
//CREAR UNA FUNCION QUE ME DESCARGUE LOS PEDIDOS, Y ME DE UNA RESPUESTA A LOS 3 SEGUNDOS

function descargarPedidos() {
    return new Promise((resolve) => {
        console.log("Descargando pedidos")

        setTimeout(() => {
            resolve("los pedidos han sido descargados")
        }, 3000)
    });

}
console.log(descargarPedidos ())





function descargarPedidos() { //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
    return new Promise(() => {
        console.log("Descargando pedidos...")

        setTimeout(() => {
            console.log("Los pedidos fueron descargados")
        }, 3000)
    });
}

descargarPedidos();