import {GuardarTarea, GenerarIdUnico, obtenerTareas, actualizarTareas, eliminarTarea, chequearTarea} from "./LocalStorage.js";
import Task from "./Task.js";
import { board, renderizarTareas } from "./UIRender.js";

const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const deleteCompletedButton = document.querySelector(".clearCompleted");

//renderizacion de tareas de una
if (obtenerTareas()){
    renderizarTareas(obtenerTareas());
}

//agregar tarea
addTaskButton.addEventListener("click", event => {
    const taskValue = taskInput.value;

    if(taskValue){
    const taskInstance = new Task(GenerarIdUnico(), taskValue);
    GuardarTarea(taskInstance);

    taskInput.value = '';

    const tareas = obtenerTareas();
    renderizarTareas(tareas);
    }
})


board.addEventListener("click", event => {
    //eliminar tarea
    if (event.target.classList.contains("deleteBtn")) {
        const task = event.target.closest(".task");
        const taskId = task.id;
        
        eliminarTarea(taskId);

        renderizarTareas(obtenerTareas());
    }

    //estado de la tarea
    else if(event.target.classList.contains("checkbox")){
        const task = event.target.closest(".task");

        const taskId = task.id;
        const isChecked = event.target.checked;

        chequearTarea(taskId, isChecked);

        renderizarTareas(obtenerTareas());
    }
})
<

deleteCompletedButton.addEventListener("click", event => {
    const tareasIncompletas = obtenerTareas().filter(tarea => tarea.completed === false);
    actualizarTareas(tareasIncompletas);

    renderizarTareas(tareasIncompletas);
})