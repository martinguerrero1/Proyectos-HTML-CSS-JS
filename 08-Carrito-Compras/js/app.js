import {crearProductos} from "./Producto.js";
import {calcularTotal} from "./Carrito.js";
import {renderizarProductos, renderizarCarrito} from "./UIRender.js";

const productos = await crearProductos();
renderizarProductos(productos);

const btnAgregar = document.querySelectorAll('.btnAgregar');
const listaCarrito = document.querySelector(".listaCarrito");

let carrito = [];
let itemIdCarrito = 0;
let totalCarrito = 0;

btnAgregar.forEach(boton => {
    boton.addEventListener("click", (evento) => {
        const productoId = evento.target.closest(".cartaProducto").id;
        const productoSeleccionado = productos.find(producto => producto.id === Number(productoId));
        
        carrito.push({id: itemIdCarrito += 1, producto: productoSeleccionado});
        // console.log(carrito)
        totalCarrito = calcularTotal(carrito);
        
        //actualizar la ui
        renderizarCarrito(carrito, totalCarrito);
    });
})

listaCarrito.addEventListener("click", evento => {
    if(evento.target.classList.contains("btnEliminar")){
        const itemId = evento.target.closest(".carritoProducto").id;

        carrito = carrito.filter(item => item.id !== Number(itemId))

        totalCarrito = calcularTotal(carrito);
        renderizarCarrito(carrito, totalCarrito);
    }
})