import { renderizarSidebar, renderizarDashboard, renderizarProyecto, buscarProyectos, desaparecerBusqueda, proyectosMinijuegos} from "./RenderUI.js";
import { Proyectos, Minijuegos } from "./Links.js";

// console.log((proyectosMinijuegos[0].name).toLocaleLowerCase())
renderizarSidebar();

// BOTONES PROYECTOS Y MINIJUEGOS DEL SIDEBAR
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

// BOTON DASHBOARD DEL SIDEBAR
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
    const busqueda = ((buscador.value).trim()).toLocaleLowerCase();

    //si busqueda existe
    if(busqueda){
        //renderiza los proyectos que coinciden
        buscarProyectos(busqueda);     
        
        //por cada proyecto llamado (con la clase card)...
        const cards = document.querySelectorAll(".card");
        //se le agrega un listener para obtener el id y asi linkearlo con la url y poder renderizarlo en el main content
        cards.forEach(card => {
            card.addEventListener("click", event => {
                let id = event.currentTarget.dataset.id
                let url = proyectosMinijuegos.find(proyecto => proyecto.id === Number(id)).url;
                renderizarProyecto(url);
            })
        })
    }

    //si busqueda no existe desaparece el contenedor
    else if (busqueda === ""){
        desaparecerBusqueda();
    }
});