import {Proyectos, Minijuegos} from "./Links.js";

const sublistProyectos = document.querySelector(".sublist.proyectos");
const sublistMinijuegos = document.querySelector(".sublist.minijuegos");

export function renderizarSidebar(){
    Proyectos.forEach(proyecto => {
        sublistProyectos.innerHTML += `
        <li class="sublist-item">
            <button class="sublist-item-button proyecto" data-id="${proyecto.id}">${proyecto.name}</button>
        </li>
        `
    })
    Minijuegos.forEach(minijuego => {
        sublistMinijuegos.innerHTML += `
        <li class="sublist-item">
            <button class="sublist-item-button minijuego" data-id="${minijuego.id}">${minijuego.name}</button>
        </li>
        `
    })
}

function renderizarDashboard(){
    
}