export function calcularTotal(carrito){
    return Number(carrito.reduce((acc,item) => {
        return acc += item.producto.precio;
    },0)).toFixed(2)
}

// [{id: 1, item: {productoSeleccionado}}]