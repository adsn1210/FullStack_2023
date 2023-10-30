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


async function obtenerEmpleados2 (){
    const resultado = await fetch ("empleados.json");

    const datos = await resultado.json();

    

    console.log(datos)
    // console.log(datos.id)
    // console.log(datos.nombre)
    // console.log(datos.puesto)
}

obtenerEmpleados2()