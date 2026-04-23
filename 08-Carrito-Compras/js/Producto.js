class Producto{
    constructor(id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
};

export async function crearProductos() {
    const responseProductos = await fetch("https://fakestoreapi.com/products");
    const dataProductos = await responseProductos.json();

    const productos = []
    dataProductos.forEach(prod => {
        let producto = new Producto(prod.id, prod.title, prod.price, prod.image)
        productos.push(producto);
    })
    return productos
}