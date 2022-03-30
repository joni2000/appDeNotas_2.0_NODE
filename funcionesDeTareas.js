//trayendo el modulo nativo fs
let fs = require('fs');

//creando un objeto para exportar a otros archivos
module.exports = moduloTareas = {
    file: './tareas.json',
    readJSON: () => { //metodo que retorna el json parseado
        let tareasJSON = fs.readFileSync('./tareas.json', "utf-8")
         return JSON.parse(tareasJSON);
    },
    escribirJSON: (info) => {
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
    },
    agregarTarea: (titulo, estado) => {
        let tareasUpdate = moduloTareas.readJSON() //array original
        
        let nuevaTarea = { //nuevo objeto para agregar al array original
            titulo: titulo,
            estado: estado
        }
        
        
        tareasUpdate.push(nuevaTarea) //agrega al final del array original el nuevo objeto
        
        moduloTareas.escribirJSON(tareasUpdate) // escribiendo en el JSON con los cambios agregados
    },
    filtrarPorEstado: function(estado) { //metodo para filtrar tareas por estado
        let tasks = moduloTareas.readJSON()
        return tasks.filter(tarea => tarea.estado == estado); 
    }
}


