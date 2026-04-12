// form de los input (me sirve para acceder al evento submit)
const form = document.getElementById("form");
// campo del input para obtener su valor (las tareas)
const inputTask = document.getElementById("inputTask")

//pizarron de tareas
const board = document.querySelector(".tasks");

//buscamos las tareas en el LS o definimos un objeto vacio si no existe
let localStorageTasks = JSON.parse(localStorage.getItem("Tasks")) || {};
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
            localStorage.setItem("Tasks", JSON.stringify({1: newTask}));
        }
        else{
            //CAMBIAR EL ITEM IDS PARA EL SIGUIENTE
            let ID = Number(localStorage.getItem("IDs")) + 1;
            localStorage.setItem("IDs", `${ID}`);

            //obtenemos las tasks como objeto
            const tasks = JSON.parse(localStorage.getItem("Tasks"));
            //agregamos la nueva task con spread
            localStorage.setItem("Tasks", JSON.stringify({...tasks, [ID]: newTask}))
        }
    }

    //actualizamos las tareas
    let localStorageTasks = JSON.parse(localStorage.getItem("Tasks"));
    updateTasks(localStorageTasks);
});


//escuchamos el pizarron para ver cuando haya un click en el
board.addEventListener("click", e => {
    //verifica si el click se hace sobre un elemento que contenga esa clase
    if(e.target.classList.contains("btn-DeleteTask")){
        //obtengo el id del boton clickeado
        let ID = e.target.id;

        //busco los tasks, elimino el que coincide con el id de el boton seleccionado y luego lo vuelvo a guardar
        const tasks = JSON.parse(localStorage.getItem("Tasks"));
        delete tasks[ID];
        localStorage.setItem("Tasks", JSON.stringify(tasks));

        //actualizamos las tareas
        let localStorageTasks = JSON.parse(localStorage.getItem("Tasks"));
        updateTasks(localStorageTasks);
    }
});



//funcion para actualizar las tareas en el pizarron
function updateTasks(tasks){
    //borro todas las tareas en el pizarron
    board.textContent = ''
    //obtengo el array de las tareas disponibles en LS
    const valuesTasks = Object.entries(tasks);


    //itero cad una de las tareas y las agrego al elemento board en el html
    valuesTasks.forEach(task => {
        board.innerHTML +=  `
            <li>
                <span>
                    <input class="checkbox" type="checkbox">
                    <p>${task[1]}</p> 
                </span>
                <button id=${task[0]} class="btn-DeleteTask" type="button">❌</button>
            </li>
        `
    });
}