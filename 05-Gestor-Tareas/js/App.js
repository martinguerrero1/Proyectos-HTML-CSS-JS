import {GuardarTarea, GenerarIdUnico, obtenerTareas} from "./LocalStorage.js";
import Task from "./Task.js";
import { renderizarTareas } from "./UIRender.js";

const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");

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