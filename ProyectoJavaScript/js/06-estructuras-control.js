//ESTRUCTURAS DE CONTROL

//COMPARADORES, CONDICIONALES
// IF       SWITCH

//Ejemplo1.
const numeroJm = 900;
if (numeroJm == 900) {
  //PARA QUE COMPARE EL NUMERO NECESITAMOS PONER 2 == , PERO PODEMOS PONER 3 === PARA QUE SEA MAS EXTRICTO
  console.log("Tu numero es 900");
} else {
  console.log("Numero No es 1000");
}

// //Ejercicio_PIN

let saldo = 200;
const pin = 1234;
let importeRetirar = 100;
let pinIntroducido = 1234;

if (pinIntroducido === pin) {
  console.log("Pin OK");
  if (importeRetirar <= saldo) {
    console.log("Saldo Suficiente");
  } else {
    console.log("Mete dinero");
  }
} else {
  console.log("Esta tarjeta no es tuya bandido");
}

/////////////
function cajero(pin, cantidadRetirar) {
  if (pin === 1234) {
    console.log("Pin Correcto");
    if (cantidadRetirar <= 49) {
      console.log("Retirando Dinero");
    } else {
      console.log("Saldo Insuficiente");
    }
  } else {
    console.log("Pin Correcto");
  }
}

cajero(1234, 51);
///////////////////////////////////

////USO DEL Else IF, Multiples comparaciones

//Ejemplo
const rol = "Editor";
if (rol === "Administrador") {
  console.log("Acceso a todo el sistema");
} else if (rol === "Editor") {
  console.log("Solo puedes editar pero no crear");
} else {
  console.log("No tienes Acceso");
}

///////////////////////////////////

//  crea una estructura de control que compare en que estacion del año estamos y me diga cual es la siguiente.
// primavera-verano-otoño-invierno. usa else if

//(Primavera-Verano-Otoño-Invierno)
let estacionActual = "otoño";

if (estacionActual === "primavera") {
  console.log("Estamos en primavera la siguiente estacion es verano");
} else if (estacionActual === "verano") {
  console.log("Estamos en verano y la siguiente estacion es otoño");
} else if (estacionActual === "otoño") {
  console.log("Estamos en otoño y la siguiente estacion es Invierno");
} else if (estacionActual === "invierno") {
  console.log("Estamos en invierno y la siguiente estacion es primavera");
} else {
  console.log("Lo que has introducido no es una estacion");
}

//Crea una estructura de control que me diga si la nota de un examen
//es sobresaliente 9-10
//notable 7-8
//suficiente 5-6
//suspenso - de 5

let notaExamen = "null";

if (notaExamen === 9 || notaExamen === 10) {
  console.log("Tienes un Sobresaliente");
} else if (notaExamen === 8) {
  console.log("Tienes un Notable alto");
} else if (notaExamen === 7) {
  console.log("tienes un notable bajo");
} else if (notaExamen === 6 || notaExamen === 5) {
  console.log("Tienes un suficiente");
} else if (notaExamen < 5) {
  console.log("Estas suspenso");
} else {
  console.log("No te has presentado");
}

/*
 USO DE SWITCH, PARA HACER MÚLTIPLIES COMPARACIONES
 Y OPTIMIZAR EL USO DE TANTO ELSE IF
FUNCIONAN CON CASE
NECESITA UN BREAK PARA FINALIZAR CADA CASE
DEFAULT ME MUESTRA EL CASO POR DEFECTO
*/

// const metodoPago = prompt("Introduce el metodo de pago");
// switch (metodoPago) {
//     case "Tarjeta":
//       console.log("Pagaste con  tarjeta");
//       break;
//     case "En mano":
//       console.log("pagaste en mano");
//       break;
//     case "Bizum":
//       console.log("Pagaste en Mano");
//       break;
//     default:
//       console.log("Pendiente de pago"); //Si no se cumple nada de lo anterior
//       break;
//   }

////Ejercicio compara numero

let numero = 12;
if (numero * numero < 100) {
  console.log("El numero Multiplicado por si mismo es menor que 100");
} else if (numero * numero < 200) {
  console.log("El numero es Menor que 200 multiplicandolo por si mismo");
} else {
  console.log("El numero es mayor");
}


/// 

function multiplo(x) {
  if (x * x < 100) {
    console.log("El numero Multiplicado por si mismo es menor que 100");
  } else if (x * x < 200) {
    console.log("El numero es Menor que 200 multiplicandolo por si mismo");
  } else {
    console.log("El numero es mayor");
  }
}
multiplo(5)




//Calculadora para el ejercicio
function calculadora(n1, n2) {
  console.log("Resultado es :", n1 * n2);
}

calculadora(16, 16);


// const numeroSuma = parseInt(prompt ( "Escribe aqui tu numero"));
//     switch(numeroSuma + 10){
//         case 9: console.log("Es igual a 9")
//                 break;
//         case 12: console.log("Es igual a 12")
//             break;
//         case 15: console.log("Es igual a 15")
//             break;
//         case 100: console.log("Es igual a 100")
//             break;
//         default: console.log("RESTO DE POSIBILIDADES");
//             break;
//     }



//////////////////////////////////////////

/*  ITERADORES / BUCLES
    For
    WHILE
    DO WHILE
    */

/*for (){} estructura del for */

for (let i = 0; i <= 3; i++) /* 1º va el indice y luego la condicion  y por ultimo el actualizador */ {
  console.log(i + 1)
};

//Ejercicio Mostrar del 100 al 200 por pantalla



for (let x = 100; x <= 110; x++) {
  console.log(x)
}


//Del 2 al 19 solo numeros pares
for (let y = 2; y <= 19; y += 2) {
  console.log(y)
}

for (let y = 100; y > 0; y -= 5) {
  console.log(y)
}

for (let y = 1; y < 20; y++) {
  if (y % 2 === 0)
    console.log(y)
}

/////////////////////////////////////////////////
// let  arrayNumeros = [1,2,3,4,5,6,7,8,9,9,9,99,99,9,9,9,9,9];
//   for (let i=0 ; i < arrayNumeros.length ; i++){

//     console.log(arrayNumeros[i])

//   }
///////////////////////////////


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

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i])
  console.log(carrito[i].nombre)
}



////WHILE LOOP

let i = 0;
while (i < 100) {
  console.log(i);
  i++;

}

//Do While
let j = 100; //indice
do {
  console.log(j)
} while (j < 50);



//////EJERCICIOS
let k = 1;
while (k < 20) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k++
}

function Numero(x) {
  if (x > 0) {
    console.log("Es positivo ");

  }
  else if (x < 0) {
    console.log("Es negativo ");
  } else {


    console.log("Es igual  a 0 ");

  }
}
Numero(2);



function cuentaAtras(x) {

  for (let i = x; i > 0; i--) {
    console.log(i);

  }

}
cuentaAtras(11)


//Creaamos una Fnction Q se llama acumulacion con un argumento que nos devuelve la suma de todos los numros entre 0 y ese argumemnto

// function acumulacion(n){
//   for(let i = n; i > 0; ){
//     console.log(i);
//   }

// }
// acumulacion(33)


let totalAcum = 0;
function acumulacion (x){
  for(let i = x; i>=0; i--){
    totalAcum =  totalAcum+i;

  }
      console.log(totalAcum);
      console.log(totalAcum/x+1)

}
acumulacion(6)

//Funcion que dado un argumento, me calcule la media de la suma de todos los valores
//usar while