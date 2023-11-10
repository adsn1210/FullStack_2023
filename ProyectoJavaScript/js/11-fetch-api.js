// function obtenerEmpleados(){
//     fetch("empleados.json") //fetch (url con la api)
//         .then(resultado => {
//             return resultado.json() //voy a obtener una respuesta tipo JSON
//         })
//         .then(datos =>{
//             const{empleados}=datos; //DESTRUCTURING
//             console.log(empleados);

//             empleados.forEach(empleado => {
//                 console.log(empleado)
//                 console.log(empleado.id)
//                 console.log(empleado.nombre)
//                 console.log(empleado.puesto)
//             });
//         })
// }
// obtenerEmpleados(); //La llamamos


//OTRA FORMA DE HACERLO CON ASYNC/AWAIT

async function obtenerEmpleados2() {

    const resultado = await fetch("empleados.json");

    const datos = await resultado.json();

    const{empleados} = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES
    console.log(empleados);
    empleados.forEach(empleado => {
        console.log(empleado)
        console.log(empleado.id)
        console.log(empleado.nombre)
        console.log(empleado.puesto)
    });

    // console.log(datos)

}

obtenerEmpleados2();






/********ZONAS.JSON EJERCICIO */

function obtenerZonas(){
    fetch("zonas.json") //fetch (url con la api)
        .then(response => {
            return response.json() //voy a obtener una respuesta tipo JSON
        })
        .then(datos =>{
            const{empleados}=datos; //DESTRUCTURING
            console.log(empleados);

            empleados.forEach(empleado => {
                console.log(zonas)
                console.log(zonas.id)
                console.log(zonas.zona)
                console.log(zonas.ciudades)
            });
        })
}
obtenerZonas(); //La llamamos
