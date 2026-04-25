const board = document.querySelector(".board");

export function renderizarTareas(tareas){
    board.textContent = '';

    tareas.forEach(tarea => {
        board.innerHTML += `
            <li id="${tarea.id}">
                <span>
                    <input class="checkbox" type="checkbox" ${tarea.completed ? 'checked' : ''}>
                    <p>${tarea.task}</p>
                </span>
                <button>❌</button>
            </li>
        `
    });
}