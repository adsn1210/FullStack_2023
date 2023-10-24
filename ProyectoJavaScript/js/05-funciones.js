// FUNCIONES
// Son reutilizables
// primero se crea la funcion

// expresion de la funcion

function sumar2(n1, n2) {
  console.log(n1 + n2);
}

// EXPRESION DE LA FUNCION

// const sumar2 = function (n3, n4) {
//     console.log(n3 + n4);
// }

// sumar2(3, 9);

// LA REALIDAD ES QUE LO ASIMILA MÁS A UNA VARIABLE QUE
// A UNA FUNCIÓN

(function () {
  console.log("esto es una funcion");
})();

const numero1 = 20;
const numero2 = "20";

console.log(typeof parseInt(numero2)); //parseint es una funcion
console.log(typeof numero1.toString()); //.tostring es un metodo

//  Ejercicio

function color(x) {
  console.log(`El color elegido es ${x}`); // template string
  console.log("El color elegido es", x);
}

color("verde");
color("rojo");

// function total(){
//     console.log(`` $())
// }

function precioFinal(importe, descuento) {
  console.log(`Descuento es de: ${(importe * descuento) / 100}`);
  console.log(`Precio final es de: ${importe - (importe * descuento) / 100}`);
}

precioFinal(100, 20);

function twt(texto) {
  console.log(texto.length); //length sirve para contar los caracteres.
  console.log(`La longitud del twt es de: ${texto.length}`);
}

twt("Este es mi texto 123456");
///////////////////////////////////
let frutas = ["pera", "platano"];
function añadirFruta(k) {
  frutas.push(k);
}

añadirFruta("fresa");
console.log(frutas);

// Restar Dos numeros
function restar(num1 = 0, num2 = 0) {
  console.log("El resultado de restar es ", num1 - num2);
}

restar(50, 7);
restar(4);

function multiplicar(x, y) {
  return x * y;
}

let resultadoMultiplicar = multiplicar(2, 3);
console.log(resultadoMultiplicar);

//Ejercicio
let totalCarrito = 0;
function agregarCarrito(x) {
  totalCarrito += x;
}

agregarCarrito(50);
agregarCarrito(20);
agregarCarrito(10);
console.log(totalCarrito);

//Ejercicio funciones que retornan valores

let descuento = 0.2;
let totalAhorro = 0;

function calcularDescuento(z) {
  totalAhorro += z * descuento;
}

calcularDescuento(100);
calcularDescuento(120);
calcularDescuento(350);
console.log(totalAhorro);

//Metodos de propiedad
//Vamos a crear un reproductor musical
//Funciones con la sintaxis de metodo

const reproductor = {
  //es un objeto de funciones
  reproducir: function (nc) {
    console.log(`Reproduciendo Cancion con ID: ${nc}`);
  },
  pausar: function () {
    console.log("Pausando Cancion...");
  },

  crearPlaylist: function (nombre) {
    console.log(`creando Playlist: ${nombre}`);
  },
};

reproductor.reproducir("Daddy Yanke");
reproductor.pausar();
reproductor.crearPlaylist("De la bebesita");
reproductor.borrarCancion = function (ID) {
  console.log(`borrando la cancion con ID: ${ID}`);
};
//añadimos una funcion al objeto desde fuera del contenedor.
reproductor.borrarCancion("aaaa");

//Funciones de Flecha ARROW FUNCTION
//Lo asimila la 1º vez como variable por el Let,
let triplicar = function (x) {
  return x * 3; //return devuelve el valor
};
console.log(triplicar(9));

let triplicar2 = function (x) {
  //Si solo hay 1 linea de codigo en la funcion podemos quitar las llaves {};
  // Si solo tiene un argumento los () desaparecen
  return 3 * x;
};
console.log(triplicar2(7));

//Quedaria TAL QUE ASI:
let triplicar3 = (x) => 3 * x;

//Ejercicio ARROW
let aprendiendo2 = (numero) => numero + 7; //Creamos
let resultadoAprendiendo2 = aprendiendo2(6); //LLamamos
console.log(resultadoAprendiendo2); //MOstramos:

//////////////////////////////////////////////////////////////////////////

//Arrive de objetos Usados Con Funciones de ARROW

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

let resultado1;
resultado1 = carrito.some(function (producto) {
  return producto.nombre === "Tablet";
});
console.log("Resultado de funcion some ideal", resultado1);

//Poner con ARROW FUNCTION
resultado1 = carrito.some((producto) => producto.nombre === "Tablet");
console.log("Resultado de funcion some ideal con funcion flecha", resultado1);

//Como saber el total del Carrito

resultado1 = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);
console.log("Uso de reduce", resultado1);

// Con arrow Function

resultado1 = carrito.reduce((total, producto) => total + producto.precio, 0); //Hay mas de un argumento entonces dejamos el parentesis, el ,0 es para comenzar un valor por el reduce

console.log("Uso de arrow en reduce", resultado1);

//Metodo filter
resultado1 = carrito.filter(function (producto) {
  return producto.precio > 400;
});
console.log("Uso de filter", resultado1);

//Uso del Arrow en filter

resultado1 = carrito.filter((producto) => producto.precio > 400);
console.log("Uso de filter en ARROW", resultado1);

//Ejercicio 1 Aplicarla en "Expresion" "Declaracion" y Funcion de Flecha

//Suma Declaracion
function sumaDeclaracion(n1, n2, n3) {
  console.log("El resultado de la suma es:", n1 + n2 + n3);
}
sumaDeclaracion(9, 3, 4);

//SumaExpresion

let sumaEjerExpresion = function (n11, n22, n33) {
  console.log("Expresion", n11 + n22 + n33);
};
sumaEjerExpresion(2, 3, 4);

//Suma Arrow
let sumaArrow = (n111, n222, n333) => console.log("Arrow", n111 + n222 + n333);
sumaArrow(2, 5, 7);

////////////////////////////////////////////////

//Ejercico 02


/////////////////////////
let numeros = [10, 20, 30, 40];

let buscarDeclaracion = function (array, x) {
console.log(array.includes(x))
};
buscarDeclaracion(numeros,20);


//Ejercicio3
let sumarParametros=(numero13,numero22) => (numero13+numero22)*10;
console.log(sumarParametros(10,20))


//Ejercicio 5 Crea una Funcion de flecha que dado dos parametros me indique el numero de caracteres de los dos

let caracteres = (x,y) => (x.length) + (y.length);
console.log(caracteres("holab", "adios"))

function caracteresDeclaracion (x,y){
    return (x.length) + (y.length)
}
console.log(caracteresDeclaracion("hola", "adios"));

///ejercicio

let quitarUlt = (arr) => arr.pop();
let myArray= [1,2,3,4];
console.log(quitarUlt(myArray))



