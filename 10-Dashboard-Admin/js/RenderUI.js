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


//TRABAJO CON EL IFRAME DE DASHBOARD.HTML
const iframeDoc = iframeDashboard.contentDocument;

const proyectosMinijuegos = [...Proyectos, ...Minijuegos];
const grillaBusqueda = iframeDoc.querySelector(".grilla-container");

function desaparecerBusqueda(){
    grillaBusqueda.hidden = true;
};

function buscarProyectos(busqueda){
    grillaBusqueda.hidden = false;
    grillaBusqueda.textContent = '';

    const grillaProyectos = iframeDoc.createElement("section");
    grillaProyectos.classList.add("grilla-proyectos");

    const arrayFilter = proyectosMinijuegos.filter(proy => proy.name.includes(busqueda));
    arrayFilter.forEach(proy => {
        grillaProyectos.innerHTML += `
            <div data-id="${proy.id}" class="card">
                <p class="emoji">🕹️</p>
                <p class="name">${proy.name}</p>
            </div>
        `;
    })
    grillaBusqueda.appendChild(grillaProyectos);
}

export {renderizarSidebar, renderizarDashboard, renderizarProyecto, buscarProyectos, desaparecerBusqueda}