//Metodos exclusivos para los arrays


//Le aplicaremos los dos nuevos metodos al array "carrito"

let carrito = [
  {
    nombre: "tv",
    precio: 3004,
  },
  {
    nombre: "reloj",
    precio: 1400,
  },

  {
    nombre: "pantalon",
    precio: 342,
  },
  {
    nombre: "camisa",
    precio: 233,
  },
];

//metodo For
for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i])
}

//Metodo forEach, para mostrar por pantalla

carrito.forEach(function (producto) {
  console.log(producto, producto.nombre)
})

//arrow function
carrito.forEach(producto => console.log(producto, producto.nombre))


//MAP , se usa para crear nuevos arrays

const arrayMap = carrito.map(producto => producto.nombre);

console.log(arrayMap);

/*
EJERCICIO
CREAR UN OBJETO QUE SE LLAME RESERVA
CON PROPIEDADES (NOMBRE, APELLIDO, TOTAL, PAGADO)
Y LE DAIS VALORES

MEDIANTE LA SINTAXIS DE PUNTO MOSTRAR EL NOMBRE
*/

let reserva = {
  nombre: "Adrian",
  apellido: "Salazar",
  total: 18,
  pagado: true,
}
console.log(reserva.nombre)
console.log(reserva.apellido)


reserva.informacion = function () {//crea la propiedad informacion y usamos el .this para acceder a la informacion
  return (`El cliente ${this.nombre} reservo y su cantidad a pagar es de  ${this.total}`)
};
console.log(reserva.informacion());

/*
!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO LLAMADO FECHA
CON PROPIEDADES, AÑO, MES, DÍA, FALTANTES
CON UNA FUNCIÓN EN SU INTERIOR QUE ME DIGA 
CUANTOS DÍAS QUEDAN PARA ACABAR EL MES SI 
MARZO TIENE 31 DÍAS
*/

let fecha = {
  año: 2023,
  mes: "octubre",
  dia: 24,
  faltantes : function () {
    console.log(`faltan ${31-this.dias}`)

  }
}  
console.log(fecha)
