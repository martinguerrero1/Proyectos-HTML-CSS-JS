import { renderizarSidebar, renderizarDashboard, renderizarProyecto, buscarProyectos, desaparecerBusqueda } from "./RenderUI.js";
import { Proyectos, Minijuegos } from "./Links.js";

renderizarSidebar();

// BOTONES PROYECTOS Y MINIJUEGOS
const linkButtons = document.querySelectorAll(".sublist-item-button");
const iframeProyecto = document.querySelector(".proyect-render");

linkButtons.forEach(button => {
    button.addEventListener("click", event => {
        const id = event.currentTarget.dataset.id;
        
        if (event.currentTarget.classList.contains('proyecto')){     
            const url = Proyectos.find(proyecto => proyecto.id === Number(id)).url;
            renderizarProyecto(url);
        }
        else if (event.currentTarget.classList.contains('minijuego')){
            const url = Minijuegos.find(minijuego => minijuego.id === Number(id)).url;
            renderizarProyecto(url);
        }
        else{
            return
        }
    })
});

// BOTON DASHBOARD
const dashboardButton = document.querySelector(".dashboard-item");

dashboardButton.addEventListener("click", event => {
    renderizarDashboard();
});


//TOGGLE DETAILS
const acordeonProyectos = document.querySelector(".acordeonProyectos");
const acordeonMinijuegos = document.querySelector(".acordeonMinijuegos");

acordeonProyectos.addEventListener("click", event => {
    if(event.currentTarget){
        acordeonMinijuegos.open = false;
    }
})
acordeonMinijuegos.addEventListener("click", event => {
    if(event.currentTarget){
        acordeonProyectos.open = false;
    }
})

//BUSCADOR
const buscador = document.querySelector(".searcher");

buscador.addEventListener("input", event => {
    const busqueda = buscador.value;
    if(busqueda){
        buscarProyectos(busqueda);
        console.log(busqueda)
    }
    else if (busqueda === ""){
        desaparecerBusqueda();
    }
})