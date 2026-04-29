import { renderizarSidebar } from "./RenderUI.js";
import { Proyectos, Minijuegos } from "./Links.js";
renderizarSidebar();

const linkButtons = document.querySelectorAll(".sublist-item-button");
const dashboardButton = document.querySelector(".dashboard")
const proyector = document.querySelector(".proyect-render");

linkButtons.forEach(button => {
    button.addEventListener("click", event => {
        const id = event.currentTarget.dataset.id;
        
        if (event.currentTarget.classList.contains('proyecto')){     
            const url = Proyectos.find(proyecto => proyecto.id === Number(id)).url;
            proyector.src = url;
        }
        else if (event.currentTarget.classList.contains('minijuego')){
            const url = Minijuegos.find(minijuego => minijuego.id === Number(id)).url;
            proyector.src = url;
        }
        else{
            return
        }
    })
});

dashboardButton.addEventListener("click", event => {
    
});