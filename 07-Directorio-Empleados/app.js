const tableData = document.querySelector(".tbody");
const conteoEmpleados = document.querySelector(".conteoEmpleados");

async function tablaEmpleados() {
    const response = await fetch("./data.json");
    const data = await response.json();
    
    data.forEach(empleado => {
        tableData.innerHTML += `
        <tr>
            <td>${empleado.id}</td>
            <td class="nombre">${empleado.nombreCompleto}</td>
            <td>${empleado.puesto}</td>
            <td><a href="mailto:${empleado.email}">${empleado.email}</a></td>
        </tr>
        `
    });

    conteoEmpleados.textContent = data.length;
}

tablaEmpleados();
