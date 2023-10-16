// "use strict";

// // estructura de un Objeto

// // let/var/const/ Nombre del objeto ={
// //     propiedad o llave del objeto : valor,
// //     mas propiedades : valor,
// //     .
// //     .
// // }
// // sintaxis de punto
// // console.log("Uso de sintaxis de punto producto.precio:", producto.precio);

// let producto = {
//   nombreProducto: "Pantalon",
//   precio: 33,
//   disponible: true,
// };

// console.log("Uso de sintaxis de punto producto.precio:", producto.precio);
// console.log(`Uso de Sintaxis de punto con template string: ${producto.precio}`);
// console.log("Uso de corchetes", producto["precio"])

// producto.categoria = "Joyeria";
// console.log(`Añadir categoria a producto: ${producto.categoria}`)

// producto.precio = 12;

// delete producto.disponible;
// console.log("Borramos Disponible a producto:" ,producto);

// const precioProducto = producto.precio;
// console.log("Creamos variable a partir de la propiedad de product:" ,precioProducto);

// let nombreProducto  = producto.nombreProducto;
// console.log("NombreProducto ahora es Var:",nombreProducto)


// // Destructuring saca el valor y la convierte en variable la llama igual que como se llamaba antes

// let {precio} = producto;
// console.log("Convertimos el valor precio en variable PRECIO:", precio);


// let playa = {
//     nombrePlaya: "MarNegro",
//     ubicacion: "Polonia",
//     recomendable: false,
//     temperaturaAgua: 15
// };
// console.log("Playa tiene:",playa)

// let {nombrePlaya} = playa
// let {ubicacion} = playa
// let {recomendable} = playa
// let {temperaturaAgua} = playa

// // console.log("Valores de playa:",nombrePlaya,ubicacion,recomendable,temperaturaAgua)
// console.log(`nombrePlaya ${nombrePlaya}`)
// console.log(`ubicacion de la playa ${ubicacion}`)
// console.log(`es recomendable: ${recomendable}`)
// console.log(`la temperatura del agua esta a: ${temperaturaAgua}`)

// console.log(`En la playa de ${nombrePlaya} que esta ubicada en ${ubicacion} el agua esta${temperaturaAgua} , te la recomiendo ${recomendable}`)

// // Object.freeze(producto)
// // producto.congelado = "intentamos congelarlo"
// // console.log("Intento añadir una propiedad tras el freeze", producto)
// //console.log("Esta congelado",object.isFrozen(producto)); AQUI PREGUNTAMOS SI EL OBJETO ESTA CONGELADO


// // Object.seal
// //     No podemos añadir Propiedad
// //     No podemos borrar Propiedades
// //     Si podemos modificar Propiedades

// let medidas ={
//     peso: 20,
//     alto: 140,
//     ancho: "20",
//     profundidad: "02"
// };

// Object.seal(medidas)

// medidas.peso = 1;

// console.log("Modificamos" , medidas)

// let nuevoProducto = {...playa,...medidas}
// console.log("Suma de los dos objetos:", nuevoProducto)