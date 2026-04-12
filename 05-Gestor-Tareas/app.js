// form de los input (me sirve para acceder al evento submit)
const form = document.getElementById("form");
// campo del input para obtener su valor (las tareas)
const inputTask = document.getElementById("inputTask")

//pizarron de tareas
const board = document.querySelector(".tasks");

//limpiar completadas
const clearCompleted = document.querySelector(".clearCompleted")

//buscamos las tareas en el LS o definimos un objeto vacio si no existe
let localStorageTasks = JSON.parse(localStorage.getItem("Tasks")) || {};
console.log(localStorageTasks);
updateTasks(localStorageTasks);

//agregar al form
form.addEventListener("submit", e => {
    e.preventDefault();

    //GUARDAMOS EL VALOR DEL INPUT Y DESPUES LO REINICIAMOS
    const newTask = inputTask.value;
    inputTask.value = '';

    if(newTask){
        if(!localStorage.getItem("IDs")){
            //SI NO EXISTE EL ITEM QUE GUARDA LAS IDS LO CREA
            localStorage.setItem("IDs", "1");

            //agregamos la primer tarea como objeto
            localStorage.setItem("Tasks", JSON.stringify([{id: 1, task: newTask, completed: false}]));
        }
        else{
            //CAMBIAR EL ITEM IDS PARA EL SIGUIENTE
            let ID = Number(localStorage.getItem("IDs")) + 1;
            localStorage.setItem("IDs", `${ID}`);

            //obtenemos las tasks como objeto
            const tasks = JSON.parse(localStorage.getItem("Tasks"));
            //agregamos la nueva task con spread
            localStorage.setItem("Tasks", JSON.stringify([...tasks,{id: ID, task: newTask, completed: false}]))
        }
    }

    //actualizamos las tareas
    let localStorageTasks = JSON.parse(localStorage.getItem("Tasks"));
    updateTasks(localStorageTasks);
});


//escuchamos el pizarron para ver cuando haya un click en el
board.addEventListener("click", e => {
    //obtengo el id del elemento clickeado
    let ID = Number(e.target.id);
    //busco las tareas en el localstorage
    let tasks = JSON.parse(localStorage.getItem("Tasks"));

    //verifica si el click se hace sobre un elemento que contenga esa clase
    if(e.target.classList.contains("btn-DeleteTask")){

        //filtro todas las tareas menos la clickeada en el boton de eliminar y las vuelvo a guardar en el ls (sin la seleccionada)
        tasks = tasks.filter(object => object.id !== ID);
        localStorage.setItem("Tasks", JSON.stringify(tasks));

        //actualizamos las tareas
        let localStorageTasks = JSON.parse(localStorage.getItem("Tasks"));
        updateTasks(localStorageTasks);
    }

    //verifica si esta checkeado
    if(e.target.classList.contains("checkbox")){
        let objIndex = tasks.findIndex(obj => obj.id === ID);
        tasks[objIndex].completed = tasks[objIndex].completed ? false : true;
        localStorage.setItem("Tasks", JSON.stringify(tasks));
    }
});

clearCompleted.addEventListener("click", e => {
    let tasks = JSON.parse(localStorage.getItem("Tasks"));

    //filtro las tasks no completadas (propiedad completed === false) y las guardo
    tasks = tasks.filter(obj => !obj.completed);
    localStorage.setItem("Tasks", JSON.stringify(tasks));

    //actualizo el board
    updateTasks(tasks);
})


//funcion para actualizar las tareas en el pizarron
function updateTasks(tasks){
    //borro todas las tareas en el pizarron
    board.textContent = ''

    let totalTasks = 0
    //itero cad una de las tareas y las agrego al elemento board en el html
    tasks.forEach(task => {
        totalTasks += 1;
        board.innerHTML +=  `
            <li>
                <span>
                    <input id=${task.id} class="checkbox" type="checkbox" ${task.completed ? "checked" : ""}>
                    <p>${task.task}</p> 
                </span>
                <button id=${task.id} class="btn-DeleteTask" type="button">❌</button>
            </li>
        `
        document.getElementById("pendingTasks").textContent = totalTasks;
    });
}