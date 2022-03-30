let funcionesDeTareas = require('./funcionesDeTareas') //requiriendo modulo creado 
let process = require('process'); //requiriendo modulo nativo process
const { filtrarPorEstado } = require('./funcionesDeTareas');

let instruction = process.argv[2].toLowerCase();//capturando instrucciones del usuario

switch (instruction){ //procesando las instrucciones del usuario
    case "listar": //listando tareas
        let tasks = funcionesDeTareas.readJSON()//contiene la base de datos completa 
        if(tasks.length === 0){
            console.log('la lista de tareas esta vacía')
        }else{
            console.log(' ')
            console.log("listado de tareas")
            console.log(' ')
            tasks.forEach((element, index) => { //reemplazando for por forEach
                console.log(`${index + 1}) Titulo: ${element.titulo} -- Estado: ${element.estado}`) 
                console.log(" ")
            });
        }
    break;
    case "crear": //agregando tareas 
        let titulo = process.argv[3].toLowerCase()
        let estado = process.argv[4].toLowerCase()
        funcionesDeTareas.agregarTarea(titulo, estado)
    break;
    case "filtrar":  //filtrando tareas
        let status = process.argv[3].toLowerCase()
        let filtradas = funcionesDeTareas.filtrarPorEstado(status)
        if(filtradas != 0){
            console.log(" ")
            console.log(`Tareas filtradas por estado: ${status}`)
            console.log(" ")
            filtradas.forEach(element => {
                console.log(`Titulo: ${element.titulo} -- Estado: ${element.estado}`)
            });
        }else{
            console.log(`No hay tareas con estado ${status}`)
        }
    break;
    case undefined:
        console.log('Atencion - tienes que pasar una acción.')
    break;
    default:
        console.log('No entiendo qué quieres ser')
    break;
}