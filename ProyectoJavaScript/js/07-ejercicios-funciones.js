
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



function concatenar(cad1, cad2) {
    console.log(cad1 + cad2)
}
concatenar("hola ", "hi");


/*
función que determine si una cadena contiene una letra.
F: CONTIENE
P: CADENA, LETRA*/

function contiene(cadena, letra) {
    return cadena.includes(letra)
}

let miCadena = "tengo un burro"
let miLetra = "oz"

let resultado = contiene(miCadena, miLetra);

if (resultado) {
    console.log(`mi cadena ${miCadena} contiene la letra ${miLetra}`);

} else {
    console.log(`no contiene ${miLetra}`)
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



function CONTIENE(CADENA, LETRA) {
    return CADENA.includes(LETRA)

}
let contieneLetra = CONTIENE("mi letra es", "a")
console.log(contieneLetra)


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
P: N1,N2*/

function numeroAleatorio(n1, n2) {

    return Math.floor(Math.random() * (n1 - n2 + 1)) + n2;

}

const n1 = 20
const n2 = 60
let resultadoNmAleatorio = numeroAleatorio(n1, n2);

console.log(`el numero aleatorio es ${resultadoNmAleatorio}`)






/*
función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
F: AREATRIAGULO
P: BASE,ALTURA*/

function AREATRIAGULO(base, altura) {
    let area = (base * altura) / 2
    return area
}

let base = 2;
let altura = 30;

let resultado10 = AREATRIAGULO(base, altura)
console.log(`el resultado es ${resultado10}`)




/*
función que convierta grados Celsius a Fahrenheit.
F: GRADOS
P: CELSIUS*/

function toFahrenheit(Celsius) {

    return (Celsius * 9 / 5) + 32

}
let Celsius = 20;
let resultadoCelsius = toFahrenheit(Celsius)
console.log(`20 grados celsisus son ${resultadoCelsius} en Fahren`)




/*
función que determine si un año es bisiesto.
F: BISIESTO
P: DIAS*/
function bisiesto(dias) {
    if (366 === dias) {
        console.log("año es bisiesto")
    } else {
        console.log("es un año no bisiesto")
    }
}
bisiesto(366);





function bisiesto1(dias1) {
    switch (dias1) {
        case 366:
            console.log("es bisiesto")
            break
        case 365:
            console.log("es no bisiesto")
            break;
        default:
            console.log("no es valido ")

    }

}

bisiesto1(365)


/*función que cuente la cantidad de vocales en una cadena.
F: VOCALES
P: TEXTO*/

function palabras(texto) {
    let contadorEsp = 0;
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "") {
            contador++
        }
    }
    console.log(contador + 1);
}
palabras("buenos dias")
/*función que cuente la cantidad de palabras en una cadena.
F: PALABRAS
P: TEXTO




función que elimine los elementos duplicados de un array.
F: ELIMINADUPLICADOS
P: ARRAY





función que ordene un array de números de forma ascendente.
F: ORDENARARRAY
P: ARRAY*/

let arrasin= [1, 8, 2, 4, 6,3,7];

function ordenar (array){
    let arrayOrd = array.sort(function(a,b){return a-b})
    return  arrayOrd
}
console.log(ordenar(arrasin))




/*función que muestre la tabla de multiplicar de un numero.
F: TABLAMULTIPLICAR
A: NUMERO






función que tome un número del 1 al 12 y devuelva el nombre del mes 
correspondiente utilizando una declaración switch
F: NOMBREMES
P: NUMMES*/

function nombremes(nummes) {
    switch (nummes) {
        case 1:
            console.log("enero")
            break;

        case 2:
            console.log("febrero")
            break;

        case 3:
            console.log("marzo")
            break;

        case 4:
            console.log("abril")
            break;

        case 5:
            console.log("enero")
            break;

        case 6:
            console.log("junio")
            break;

        case 7:
            console.log("julio")
            break;

        case 8:
            console.log("agosto")
            break;

        case 9:
            console.log("septiembre")
            break;

        case 10:
            console.log("octubre")
            break;

        case 11:
            console.log("noviembre")
            break;

        case 12:
            console.log("diciembre")
            break;
        default:
            console.log("no valido")
            break


    }
}
nombremes(3);



/*función que determine si una contraseña es segura basándose en 
longitud>8, 
mayúsculas y minusculas
números
F: CONTRASEÑASEGURA
P: CONTRASEÑA*/

function contraseñaSegura(contraseña) {
    if (contraseña.length > 7 &&
        /[A-Z]/.test(contraseña) &&
        /[a-z]/.test(contraseña) &&
        /\d/.test(contraseña)) {
        console.log("La contraseña es segura")
    } else {
        console.log("la contrase no es segura")
    }

}
contraseñaSegura("hOLA ESTO e8 s una contraseña")



/*función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
F: REEMPLAZAR
P: LETRA1, LETRA2

*/