const inputTask = document.getElementById("inputTask");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    //GUARDAMOS EL VALOR DEL INPUT Y DESPUES LO REINICIAMOS
    const newTask = inputTask.value;
    inputTask.value = '';

    if(newTask){

        if(!localStorage.getItem("IDs")){
            //SI NO EXISTE EL ITEM ID, LO CREA Y AGREGA LA PRIMER TAREA
            localStorage.setItem("IDs", "1");
            localStorage.setItem("1", newTask);
        }
        else{
            //CAMBIAR EL ITEM IDS PARA EL SIGUIENTE
            let nextID = Number(localStorage.getItem("IDs")) + 1;
            localStorage.setItem("IDs", `${nextID}`);

            //AGREGO LA TASK CON EL NUEVO  ID NO REPETIDO
            localStorage.setItem(`${nextID}`, newTask);
        }
    }
});

