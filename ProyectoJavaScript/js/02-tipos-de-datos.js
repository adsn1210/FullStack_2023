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

let string1 = "2000"
let string2 = "Duele"
let string3 = " gorra"

// ejer variables tipo String
console.log("string1",string1 .length)
console.log("string2",string2 .indexOf ("Duele"))
console.log("string3", string3 .includes ("gorra"))