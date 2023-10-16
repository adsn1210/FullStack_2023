// ARRAYS

const numeros = [10, 20, 40, 50];
console.log("Mi primer array", numeros);
console.table(numeros);

const meses = new Array("enero", "febreo", "marzo");
console.log(meses);
console.table(meses);

const diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
console.table(diaSemana);

console.log("Accediendo a los valores del array con el indice 2", diaSemana[2]);

let finde = {
  prop1: "primero",
  prop2: 2,
  prop3: true,
};

finde.finsemana = ["sabado", "domingo"];

console.log(finde);
console.table(finde);

let { prop1, prop2, prop3 } = finde;
console.log(prop1);

let nombreObjeto = {
  color: "verde",
  talla: 14,
};

let color = "azul";

let { talla } = nombreObjeto;
console.log(nombreObjeto);
console.log(talla);

console.log("Longitud del ARRAY", meses.length);

let estaciones = ["verano"];
console.log(estaciones);
estaciones.unshift("primavera"); //*mete delante la variable primavera
estaciones.push("otono", "invierno");
console.log(estaciones);

let carrito = [
    {
        nombre:"tv",
        precio: 300,

    },
    {
        nombre:"reloj",
        precio:100,
    },

    {
        nombre : "pantalon",
        precio : 32
    },
    {
        nombre: "camisa",
        precio : 233
    }

]

console.log(carrito);
console.table(carrito);


let resultado;
resultado = meses.includes("mayo")
console.log(resultado)