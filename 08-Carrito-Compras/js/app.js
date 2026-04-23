import {crearProductos} from "./Producto.js";
import {calcularTotal} from "./Carrito.js";
import {renderizarProductos, renderizarCarrito} from "./UIRender.js";

const productos = await crearProductos();
renderizarProductos(productos);

const btnAgregar = document.querySelectorAll('.btnAgregar');
const listaCarrito = document.querySelector(".listaCarrito");

let carrito = []
let totalCarrito = 0

btnAgregar.forEach(boton => {
    boton.addEventListener("click", (evento) => {
        const productoId = evento.target.closest(".cartaProducto").id;
        const productoSeleccionado = productos.find(producto => producto.id === Number(productoId));
        
        carrito.push(productoSeleccionado);
        totalCarrito = calcularTotal(carrito);
        
        //actualizar la ui
        renderizarCarrito(carrito, totalCarrito);
    });
})

listaCarrito.addEventListener("click", event => {
    if(event.target.classList === ".btnEliminar"){
        event.target
    }
})