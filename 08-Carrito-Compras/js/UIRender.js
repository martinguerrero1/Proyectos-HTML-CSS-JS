

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
    const btnCarrito = document.querySelector('.btnCarrito');

    listaCarrito.textContent = '';
    carrito.forEach(item => {
        listaCarrito.innerHTML += `
                    <li class="carritoProducto" id="${item.id}">
                        <p class="carrito-producto">${item.producto.nombre}</p>
                        <div>
                            <p class="carrito-precio">$${item.producto.precio}</p>
                            <button type="button" class="btnEliminar">❌</button>
                        </div>
                    </li>
        `
    })


    totalCarrito.textContent = importeTotal;
    btnCarrito.textContent = carrito.length;
    
    if(carrito.length === 0){
        listaCarrito.innerHTML = `
                    <li>
                        <p>ELIGE UN PRODUCTO QUE QUIERAS COMPRAR</p>
                    </li>
        `;
    }
}

export {renderizarProductos, renderizarCarrito};