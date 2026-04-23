export function calcularTotal(carrito){
    return Number(carrito.reduce((acc,prod) => {
        return acc += prod.precio;
    },0)).toFixed(2)
}