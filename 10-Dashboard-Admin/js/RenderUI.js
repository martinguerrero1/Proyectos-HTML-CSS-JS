import {Proyectos, Minijuegos} from "./Links.js";

const sublistProyectos = document.querySelector(".sublist.proyectos");
const sublistMinijuegos = document.querySelector(".sublist.minijuegos");

const iframeProyecto = document.querySelector(".proyect-render");
//DASHBOARD
const dashboardDiv = document.querySelector(".dashboard-container");

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
    dashboardDiv.style.display = "flex";
}

function renderizarProyecto(url){
    dashboardDiv.style.display = "none";
    iframeProyecto.hidden = false;
    iframeProyecto.src = url;
}


const proyectosMinijuegos = [...Proyectos, ...Minijuegos];
const grillaContainer = document.querySelector(".grilla-container")

function buscarProyectos(busqueda){
    grillaContainer.textContent = '';

    const grillaProyectos = document.createElement("section");
    grillaProyectos.classList.add("grilla-proyectos");
    
    const arrayFilter = proyectosMinijuegos.filter(proyecto => (proyecto.name).toLocaleLowerCase().includes(busqueda));

    arrayFilter.forEach(proy => {
        grillaProyectos.innerHTML += `
            <div data-id="${proy.id}" class="card">
                <p class="emoji">${proy.emoji}</p>
                <p class="name">${proy.name}</p>
            </div>
        `;
    })
    grillaContainer.appendChild(grillaProyectos);
}

function desaparecerBusqueda(){
    grillaContainer.textContent = '';
};

export {renderizarSidebar, renderizarDashboard, renderizarProyecto, buscarProyectos, desaparecerBusqueda, proyectosMinijuegos}