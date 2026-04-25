function GuardarTarea(tarea){
    if(localStorage.getItem('tasks')){
        const tasksAnteriores = JSON.parse(localStorage.getItem('tasks'));
        localStorage.setItem('tasks', JSON.stringify([...tasksAnteriores, tarea]));
    }
    else{
        localStorage.setItem('tasks', JSON.stringify([tarea]));
    }
}

function obtenerTareas(){
    return JSON.parse(localStorage.getItem('tasks'));
}

function actualizarTareas(tareas){
    return localStorage.setItem('tasks', JSON.stringify(tareas))
}

function chequearTarea(id, isChecked){
    let tareas = obtenerTareas();
    const tareaIndex = tareas.findIndex(tarea => tarea.id == id);
    
    tareas[tareaIndex].completed = isChecked;

    actualizarTareas(tareas);
}

function eliminarTarea(id){
    let tareas = JSON.parse(localStorage.getItem('tasks'));
    tareas = tareas.filter(tarea => Number(tarea.id) !== Number(id));
    return localStorage.setItem('tasks', JSON.stringify(tareas));
}

function GenerarIdUnico(){
    if(localStorage.getItem('uniqueId')){
        //si existe el item 'uniqueId' ejecuta:
        const idActual = Number(localStorage.getItem('uniqueId'));
        localStorage.setItem('uniqueId',`${idActual + 1}`)

        return idActual + 1
    }
    else{
        //significa que no existe el item 'uniqueId' y lo crea con el valor unico 1.
        localStorage.setItem('uniqueId','1');

        return 1;
    }
}

export {GuardarTarea, GenerarIdUnico, obtenerTareas, actualizarTareas, eliminarTarea, chequearTarea};