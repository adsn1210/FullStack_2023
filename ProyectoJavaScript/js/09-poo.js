//PROGRAMACION ORIENTADA A OBJETOS


//Objeto literal, Manual
const producto = {
    nombre: "tablet",
    precio: 500,
}

// OBJECT CONSTRUCTOR, DINÁMICO
// SINTAXIS MUY SIMILAR A UNA FUNCION
// CREAMOS UNA CLASE, QUE ES UN CONTENEDOR DE DATOS
// OBJETIVO, CREAR OBJETOS DE MANERA MÁS DINAMICA
// UNA CLASE ME VA SERVIR PARA ALMACENAR
// LOS DATOS QUE VA A TENER UN OBJETO EN ESPECIFICO

// LE PONEMOS EL NOMBRE DE LA CLASE SIEMPREINICIO EN MAYUS

function ProductoClase(nombre, precio, disponibilidad = false, categoria = "play") {
    this.nombreObjeto = nombre;
    this.precioObjeto = precio;//Le peude dar el nombre que quiera, se le suele dar el mismo
    this.categoria = categoria;
    this.disponibilidad = disponibilidad;
}

//CREAMOS UNA INSTANCIA

const producto2 = new ProductoClase("monitor curvo", 800, true, "tech");
const producto3 = new ProductoClase("PC", 1800);
const producto4 = new ProductoClase("Reloj", 800);

console.log(producto2);
console.log(producto3);
console.log(producto4)


/*
!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO CON OBJECT CONSTRUCTOR 
LLAMADO FECHA
CON PROPIEDADES, AÑO, MES, DÍA
DAR 4 VALORES DISTINTOS
*/

function Fecha(año, mes, dia) {
    this.año = año;
    this.mes = mes;
    this.dia = dia;
}

let Fecha1 = new Fecha(2023, "octubre", 25);
let Fecha2 = new Fecha(2023, "octubre", 26);
let Fecha3 = new Fecha(2023, "octubre", 27);
let Fecha4 = new Fecha(2023, "octubre", 28);

console.log(Fecha1);
console.log(Fecha2);
console.log(Fecha3);
console.log(Fecha4);


/*

PROTOTYPES
ME PERMITE CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO
ESPECIFICO

// NO SE UTILIZA MUCHO, VEREMOS LUEGO LA ALTERNATIVA CON LAS CLASES

*/

ProductoClase.prototype.formatearProducto = function () {
    return (`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto} €`);
}

const producto5 = new ProductoClase("Iphone", 1200, true);
const producto6 = new ProductoClase("Samsung", 700);
const producto7 = new ProductoClase("Msi", 900);


console.log(producto5.formatearProducto())
console.log(producto6.formatearProducto())
console.log(producto7.formatearProducto())




//!!!!!!!!!!!!!!!!!!! SEGUNDA FORMA DE HACERLO, LA MÁS USADA

//CLASES EN JAVASCRIPT
/*

OTRA FORMA DE CREAR OBJETOS MEDIANTE CONSTRUCTORES

*/
//class es un constructor
class ProductoClase2 {
    constructor(nombre, precio) {
        this.nombreObjeto2 = nombre;
        this.precioObjeto2 = precio;

    }
    formatearProducto2() {
        return (`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`)
    }
    descuento() {
        return (`El precio final con el descuento es de ${this.precioObjeto2 * (1 - 0.2)}`)

    }
}


//INSTANCIAS

const producto8 = new ProductoClase2("TV NUEVA", 678);

console.log(producto8)
console.log(producto8.formatearProducto2())
console.log(producto8.descuento())

/*
!!!!!!!!!!!!!!!!!!!
EJERCICIO
AÑADIR UN NUEVO METODO QUE ME CALCULE EL PRECIO CON UN 20% DESCUENTO
 */


/*

POO HERENCIA

        LA HERENCIA NOS PERMITE CREAR CLASES PARTIENDO DE CLASES YA CREADAS
        


!!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJECT CONSTRUCTOR Libro CON PROPIEDADES nombre, precio, isbn
HACIENDO USO DEL CONSTRUCTOR
Y GENERAR UNA INSTANCIA AL MENOS
*/



class Libro {
    constructor(nombre, precio, isbn) {
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    }
}

const libroObjeto = new Libro("curso", 33, 424)
console.log(libroObjeto)


//palabra reservada EXTENDS para Heredar de clases anteriores
class Biblioteca extends Libro {
    constructor(nombre, precio, isbn, categoria) {
        super(nombre, precio, isbn);//las ya definidas con SUPER 
        this.categoria = categoria;

    }
    formatearProducto3() {
        console.log(`El producto ${this.nombre} pertenece a la categoria ${this.categoria}`)
    }
}


/*
!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJECT CONSTRUCTOR COCHE
CON PROPIEDADES MARCA, AÑOCOMPRA, MOTOR, MATRICULA
UNA FUNCIÓN QUE ME DIGA EL NÚMERO DE AÑOS QUE TIENE EL COCHE

CREAR DOS INSTANCIA, UNA PARA TU COCHE, Y OTRA EL DE TU PADRE


*/

class Coche {
    constructor(marca, añocompra, motor, matricula) {
        this.marca = marca;
        this.añocompra = añocompra;
        this.motor = motor;
        this.matricula = matricula
    }
    calcularEdad() {
        return (`La edad de mi coche ${this.marca} es del ${this.añocompra}`)
    }
}

const CocheMio = new Coche("ford", 2009, "ferrari", "45023Fcf")
const CochePadre = new Coche("nissan", 2019, "alfa", "7883fc")
console.log(CocheMio)
console.log(CochePadre)

console.log(CocheMio.calcularEdad())
console.log(CochePadre.calcularEdad())


class ITV extends Coche {
    constructor(añocompra, matricula, añoItv) {
        super(undefined, añocompra, undefined, matricula,)
        this.añoItv = añoItv;
    }
    proximaItv(){
        return(`la proxina ITV  sera dentro de ${this.añoItv-2023}`)

    }
}

const MiItv = new ITV(2009, "45023Fcf", 2023)
console.log(MiItv)

console.log(MiItv.proximaItv())