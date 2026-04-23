function renderizarProductos(productos){
    const grillaProductos = document.querySelector(".grillaProductos");
    grillaProductos.textContent = '' ;
    productos.forEach(producto => {
        grillaProductos.innerHTML += `
                        <div class="cartaProducto" id="${producto.id}">
                            <img src="${producto.imagen}" alt="">
                            <h3>${producto.nombre}</h3>
                            <p><b>$${producto.precio}</b></p>
                            <button type="button" class="btnAgregar">Añadir al carrito</button>
                        </div>
                        `
    });
}

// carrito = [{producto 1}, {producto 2}]

function renderizarCarrito(carrito, importeTotal){
    const listaCarrito = document.querySelector(".listaCarrito");
    const totalCarrito = document.querySelector(".total");

    listaCarrito.textContent = "";
    carrito.forEach(producto => {
        listaCarrito.innerHTML += `
                    <li class="carritoProducto" id="${producto.id}">
                        <p class="carrito-producto">${producto.nombre}</p>
                        <div>
                            <p class="carrito-precio">$${producto.precio}</p>
                            <button type="button" class="btnEliminar">❌</button>
                        </div>
                    </li>
        `
    })


    totalCarrito.textContent = importeTotal;
}

export {renderizarProductos, renderizarCarrito};