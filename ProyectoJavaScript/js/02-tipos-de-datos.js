const producto1 = "Juego de mesa El pueblo Duerme";
const producto2 = String("Dooble");
const producto3 = new String("UNO");

console.log("Producto:", typeof producto1);
console.log("Producto2", typeof producto2);
console.log("Producto3", typeof producto3);

let numero100 = false;
let numero200 = "20 00";

console.log("MetodoLenght:", numero200.length);
console.log("nm100", typeof numero100);

// .length metodo de la variable para conteo de text

console.log("Metodo:", producto1.length);
console.log("Metodo INdexOF", producto1.indexOf("Duerme"));
// indexOf te indica en que linea esta, debes ser especifico
console.log("Metodo INdexOF", producto1.includes("Duerme"));
// aqui te dice si esta o no esta

let string1 = "2000";
let string2 = "Duele";
let string3 = " gorra";

// ejer variables tipo String
console.log("string1", string1.length);
console.log("string2", string2.indexOf("Duele"));
console.log("string3", string3.includes("gorra"));

// ----------------------------------------------------------------------

let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200";
let numero4 = 2 / 3;

console.log("numero1:", typeof numero1);
console.log("numero2:", typeof numero2);
console.log("numero3:", typeof numero3);
console.log("numero4:", typeof numero4);

console.log("numero 1 + numero 2", numero1 + numero2);
console.log("numero 1 - numero 2", numero1 - numero2);
console.log("numero 1 * numero 2", numero1 * numero2);
console.log("numero 1 / numero 2", numero1 / numero2);
console.log("numero1 % numero 2", numero1 % numero2);

let resultado = Math.random();
console.log("Resultado:", resultado);

// numero aleatorio entre 0 y 30

resultado1 = Math.round(Math.random() * 30);
console.log("resultado1=", resultado1);

let diametro = 3;
let area;
area = Math.PI * Math.pow(diametro / 2, 2);
console.log("El area es igual a=", area);

// Ejercicio Crear un dado

let dado;
dado = Math.round(Math.random() * 5 + 1);
console.log("El numero del dado es:", dado);

// Ordenes de Prioridad

let resultadoOrden = 20 + 30 * 2;
console.log("Mostrar el orden de las operaciones", resultadoOrden);

let resultadoOrden1 = (20 + 30) * 2;
console.log("Mostrar el orden de las operaciones", resultadoOrden1);

// Ejercicio Para calcular el Descuento

let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;

let descuento = 30;

let importe = prenda1 + prenda2 + prenda3;
console.log("Importe sin descuento", importe);

let ahorro = (importe * descuento) / 100;
console.log("Descuento", ahorro);

let total = importe - ahorro;
console.log("total con descuento incluido", total);

// Incrementos y Decrementos

let meGusta = 0;
meGusta++
console.log("Megustas totales:",meGusta)

// meGusta++ = meGusta=meGusta+1


let nombre = "adrian";
let email = "salazarn@gmail.com"

console.log(` nombre Email: ${nombre} ${email}`)
