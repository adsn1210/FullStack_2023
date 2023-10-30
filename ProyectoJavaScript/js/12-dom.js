/*
AHORA VEREMOS COMO ACTUAR JAVASCRIPT EN EL DOM, COMO SELECCIONAR ELEMENTOS DEL HTML, 
COMO CREAR EVENTOS, MODIFICAR HTML ETC

LA INTERACCIÓN

COMO SELECCIONAR CODIGO HTML, 3 FORMAS

    QUERYSELECTOR
    QUERYSELECTORALL
    GETELEMENTBYID

    todoS INICIAN CON DOCUMENT



QUERYSELECTOR ******************************

    RETORNA UNO O NINGUN ELEMENTO
    MUY SIMILARES A LOS QUE TENEMOS EN CSS 
        CLASES CON .
        ID CON #

    DOCUMENT HACE REFERENCIA A TODO EL DOCUMENTO HTML

    */

    const heading = document.querySelector(".seccionPrincipal h1");
    console.log(heading)

    const botonPrincipal = document.querySelector("#botonPrincipal")
    console.log(botonPrincipal)

    heading.textContent="Nuevo titulo 1234"  //Con .textContent podemos modificar el h1 del html , lo llamamos desde el css que le aplicamos antes una clase.

    
    /*
    PARA AÑADIR Y ELIMINAR CLASES HACEMOS USO DE .classlist
    */

    //CUANDO HACEMOS USO DE CLASSLIST NO TENEMOS QUE PONER EL . EN LA CLASE,
    //PUES YA LE ESTAMOS DICIENDO QUE ES UNA CLASE

    heading.classList.add("NuevaClaseDesdeJs");
    // heading.classList.remove("")

     // SI INTENTAMOS SELECCIONAR LOS ENLACES

     const enlacesJs = document.querySelector("a")
     console.log(enlacesJs)


    

/*QUERYSELECTORALL **************************
*/

const enlacesJS2 = document.querySelectorAll("div a");
console.log(enlacesJS2);
//ME MUESTRA TODOS LOS ENLACES QUE CONCUERDAN CON LA SELECCIÓN
//ME LO MUESTRA EN UN NODELIST, PARA ACCEDER A CADA ELEMENTO, LO HACEMOS
//AL IGUAL QUE LOS ARRAYS
console.log(enlacesJS2[0]);

//OTRA PROPIEDAD QUE PODEMOS MODIFICAR ES .href
enlacesJS2[0].href="https://google.com"




/*
!!!!!!!!!!!!!!
EJERCICIO
MODIFICAR EL CONTENIDO Y EL HREF DEL SEGUNDO ENLACE UNICAMENTE CON QUERYSELECTORALL
PONER CONTENIDO MODIFICADO CON QUERYSELECTORALL. Y LLEVAR A OTRO ENLACE EXTERNO
*/

const cambiarEnlaces = document.querySelectorAll("div a");

cambiarEnlaces[1].href="https://www.mozilla.org/es-ES/firefox/new/?redirect_source=firefox-com";
cambiarEnlaces[1].textContent="Firefox";

/*
GETELEMENTBYID ****************************

YA SE USA MENOS, SE SUELEN UTILIZAR LOS ANTERIORES

*/

const botonJs= document.getElementById("boton");
console.log(botonJs);

//todo LO VISTO ANTERIORMENTE PARA AÑADIR/MODIFICAR/ELIMINAR PROPIEDADES ES APLICABLE EN GETELEMENTBYID



/*********************************************
VEREMOS COMO GENERAR CODIGO EN HTML DESDE JAVASCRIPT
UN ESTADO NUEVO DE FACEBOOK SE GENERA POR JAVASCRIPT

*/

const nuevoEnlace=document.createElement("a");

nuevoEnlace.href = "#";

nuevoEnlace.textContent = "Nuevo enlace4";

nuevoEnlace.classList.add("enlacesPrincipales");

console.log(nuevoEnlace);

const enlacesJS3 =document.querySelector(".enlacesPrincipales");//PARA ELLO SELECCIONAMOS EL ELEMENTO PADRE
enlacesJS3.appendChild(nuevoEnlace)//APPENCHILD ME PERMITE AGREGAR ELEMENTOS HIJOS


/*EJERCICIO CREA UNO NUEVO */
const ejercicioEnlace = document.createElement("a");

ejercicioEnlace.href="#"
ejercicioEnlace.textContent= "ejercicioEnlace"
ejercicioEnlace.classList.add="ejercicioEnlace"
console.log(ejercicioEnlace)

const ejercicioEnlace1=document.querySelector(".enlacesPrincipales")
ejercicioEnlace1.insertBefore(ejercicioEnlace,nuevoEnlace)

