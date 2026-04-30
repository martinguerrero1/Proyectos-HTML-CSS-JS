import {Proyectos, Minijuegos} from "./Links.js";

const sublistProyectos = document.querySelector(".sublist.proyectos");
const sublistMinijuegos = document.querySelector(".sublist.minijuegos");

const iframeProyecto = document.querySelector(".proyect-render");
const iframeDashboard = document.querySelector(".dashboard-render");

function renderizarSidebar(){
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
    iframeProyecto.hidden = true;
    iframeDashboard.hidden = false;
}
function renderizarProyecto(url){
    iframeDashboard.hidden = true;
    iframeProyecto.hidden = false;
    iframeProyecto.src = url;
}

export {renderizarSidebar, renderizarDashboard, renderizarProyecto}