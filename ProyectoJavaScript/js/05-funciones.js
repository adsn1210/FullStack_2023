
// FUNCIONES
// Son reutilizables
// primero se crea la funcin y luego se crea


// expresion de la funcion

function sumar2 (n1, n2){

console.log(n1+ n2)

}

// EXPRESION DE LA FUNCION

// const sumar2 = function (n3, n4) {
//     console.log(n3 + n4);
// }


// sumar2(3, 9);

// LA REALIDAD ES QUE LO ASIMILA MÁS A UNA VARIABLE QUE
// A UNA FUNCIÓN





(function (){
    console.log("esto es una funcion")
}())


const numero1 = 20
const numero2 = "20";

 console.log(typeof(parseInt(numero2))); //parseint es una funcion
 console.log(typeof(numero1.toString())) //.tostring es un metodo


//  Ejercicio

function color(x){
    console.log(`El color elegido es ${x}`) // template string
    console.log("El color elegido es", x)

}

color("verde")
color("pene")

// function total(){
//     console.log(`` $())
// }



function precioFinal (importe,descuento){
    console.log(`Descuento es de: ${(importe*descuento)/100}`)
    console.log(`Precio final es de: ${(importe-(importe*descuento)/100)}`)
}

precioFinal(100,20);


function twt (texto){
    console.log(texto.length)//length sirve para contar los caracteres.
    console.log(`La longitud del twt es de: ${texto.length}`)

}

twt("Este es mi texto 123456");





let frutas= ["pera", "platano"];
function añadirFruta(k){
frutas.push(k);    
}

añadirFruta("fresa")   
console.log(frutas)


// Restar Dos numeros
function restar (num1=0, num2=0){
console.log("El resultado de restar es ", num1-num2)
}

restar(50,7)
restar(4)