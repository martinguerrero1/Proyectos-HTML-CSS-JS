const board = document.querySelector(".board");
const pendingTasks = document.querySelector("#pendingTasks");

function renderizarTareas(tareas){
    board.textContent = '';

    if (tareas.length > 0){
        tareas.forEach(tarea => {
            board.innerHTML += `
                <li class="task" id="${tarea.id}">
                    <span>
                        <input class="checkbox" type="checkbox" ${tarea.completed ? 'checked' : ''}>
                        <p>${tarea.task}</p>
                    </span>
                    <button class="deleteBtn">❌</button>
                </li>
            `
        });
    }
    else{
        board.innerHTML = `
            <li class="noTasks">
                <p>AGREGA UNA TAREA ARRIBA</p>
            </li>
        `
    }

    const tareasPendientes = tareas.filter(tarea => tarea.completed === false);
    pendingTasks.textContent = tareasPendientes.length;
}

export {board, renderizarTareas}