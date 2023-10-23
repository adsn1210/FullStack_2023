
/*
*******************
    COMIENZO CLASE 2023/10/23
*******************



!!!!!!!!!!!!!
REPASO ULTIMO DÍA


for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)

Ejercicio1
función que invierta una cadena.
F: INVERTIR
P: CADENA*/


function convertir(palabra) {
    let convertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        convertida += palabra[i];
    }
    return convertida;
}

let palabraInvertida = convertir("tigre");
console.log(palabraInvertida);




/*
función que concatene dos cadenas.
F: CONCATENAR
P: CADENA1, CADENA2*/

function juntar(palabra1, palabra2) {
    let resultado = palabra1 + palabra2;
    return resultado;

} let palabra1 = "Juan";
let palabra2 = "Manuel";

let resultadoPalabras = juntar(palabra1, palabra2);
console.log(resultadoPalabras)



/*
función que determine si una cadena contiene una letra.
F: CONTIENE
P: CADENA, LETRA*/

function contiene(cadena, letra) {
    return cadena.includes(letra)
}

let miCadena = "tengo un burro"
let miLetra = "o"

console.log(contiene(miCadena, miLetra));

let resultado = contiene(miCadena, miLetra);

console.log(resultado);


if (resultado) {
    console.log(`mi cadena ${miCadena} contiene la letra ${miLetra}`);

} else {
    console.log(`no contienw ${miLetra}`)
}




function caracteres(str, letra) {
    return [...str];
}

let letra = "Z"
let str = "aZ3.3a2"

let contiene2 = caracteres(str, letra).includes(letra);

if (contiene2) {
    console.log(`contiene la letra ${letra}`);
} else {
    console.log(`no contiene la letra ${letra}`);
}



/*
función que encuentre el número más grande en un array.
F: MAXNUM
P: ARRAY*/

let numeros = [0, 2, 3, 5, 6, 11, 3, 90, 9];
function maxnum(array) {
    return Math.max(...array)

}
let maximo = maxnum(numeros);
console.log(`el numero mas grande es ${maximo}`)



/*0
función que encuentre el número más pequeño en un array.
F: MINNUM
P: ARRAY*/

let numeros2 = [0, 2, 3, 5, 6, 11, 3, 90, 9, -8];
function MINNUM(array2) {
    return Math.min(...array2)

}
let minimo = MINNUM(numeros2);
console.log(`el numero mas pequeño es ${minimo}`)

/*
función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
F: NUMBOOLEANOS
P: ARRAY, VALOR*/

const array3 = [true, false, false, true, true]

function contarTrue(array) {
    let contador = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            contador++;

        }

    }
    return contador;
}
let cantidadTrue = contarTrue(array3);
console.log(cantidadTrue)


/*
función que determine si todos los elementos de un array son números.
F: ARRAYNUMEROS
P: ARRAY*/



const nums = [2, 3, 4, 5, "a", 6];

function arrayNumeros(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number' || isNaN(array[i])) {
            return false;
        }
    }
    return true;
}

if (arrayNumeros(nums)) {
    console.log("Todos los elementos son números");
} else {
    console.log("No todos los elementos son números");
}


/*
función que genere un número aleatorio entre N1 y N2.
F: NUMALEATORIO
P: N1,N2





función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
F: AREATRIAGULO
P: BASE,ALTURA*/

function AREATRIAGULO(base, altura) {

}


/*
función que convierta grados Celsius a Fahrenheit.
F: GRADOS
P: CELSIUS*/

function toFahrenheit(Celsius) {

}




/*
función que determine si un año es bisiesto.
F: BISIESTO
P: DIAS


función que cuente la cantidad de vocales en una cadena.
F: VOCALES
P: TEXTO


función que cuente la cantidad de palabras en una cadena.
F: PALABRAS
P: TEXTO


función que elimine los elementos duplicados de un array.
F: ELIMINADUPLICADOS
P: ARRAY


función que ordene un array de números de forma ascendente.
F: ORDENARARRAY
P: ARRAY


función que muestre la tabla de multiplicar de un numero.
F: TABLAMULTIPLICAR
A: NUMERO


función que tome un número del 1 al 12 y devuelva el nombre del mes 
correspondiente utilizando una declaración switch
F: NOMBREMES
P: NUMMES


función que determine si una contraseña es segura basándose en 
longitud>8, 
mayúsculas y minusculas
números
F: CONTRASEÑASEGURA
P: CONTRASEÑA


función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
F: REEMPLAZAR
P: LETRA1, LETRA2

*/