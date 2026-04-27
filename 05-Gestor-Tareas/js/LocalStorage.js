//guardo la tarea que se pasa como parametro en el ls
function guardarTarea(tarea){
    if(localStorage.getItem('tasks')){
        const tasksAnteriores = JSON.parse(localStorage.getItem('tasks'));
        localStorage.setItem('tasks', JSON.stringify([...tasksAnteriores, tarea]));
    }
    else{
        localStorage.setItem('tasks', JSON.stringify([tarea]));
    }
}

//getter de el array de tareas del ls
function obtenerTareas(){
    return JSON.parse(localStorage.getItem('tasks'));
}

//guardo el array de tareas que se pasa como parametro en el ls
function actualizarTareas(tareas){
    return localStorage.setItem('tasks', JSON.stringify(tareas))
}

//cambio el valor de la propiedad "completed" de la tarea que tiene el id que se pasa en el parametro.
function chequearTarea(id, isChecked){
    let tareas = obtenerTareas();
    const tareaIndex = tareas.findIndex(tarea => tarea.id == id);
    
    tareas[tareaIndex].completed = isChecked;

    actualizarTareas(tareas);
}

//elimino la tarea que tiene el id del parametro de el array de tareas
function eliminarTarea(id){
    let tareas = JSON.parse(localStorage.getItem('tasks'));
    tareas = tareas.filter(tarea => Number(tarea.id) !== Number(id));
    return localStorage.setItem('tasks', JSON.stringify(tareas));
}

//genero un nuevo id unico para usarse al instanciar una nueva tarea
function generarIdUnico(){
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

export {guardarTarea, generarIdUnico, obtenerTareas, actualizarTareas, eliminarTarea, chequearTarea};