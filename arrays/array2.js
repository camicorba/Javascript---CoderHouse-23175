class Producto{
    constructor (nombre, tipo, precio, stock) {
        this.nombre = nombre.toLowerCase()
        this.tipo = tipo.toLowerCase()
        this.precio = precio
        this.stock = stock
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}


// INGRESO DATOS MEDIANTE PROMPT
const productos = [];
do {
    const agregar = prompt("Ingrese el nombre de un producto. Para finalizar, escribir 'esc'.");
    if (agregar === "esc" || agregar === "Esc" || agregar === "ESC" ){
        break;
    } else {
        nombre = agregar;
        let tipo = prompt("Ingrese el tipo de producto");
        let precio= Number(prompt("Ingresa el precio del producto"));
        let stock = Number(prompt("Ingresa la cantidad de stock"))
        productos.push(new Producto(nombre, tipo, precio, stock));
    }
} while (nombre != "esc" || nombre != "Esc" || nombre != "ESC" );

console.log(productos)

for (const producto of productos){
    document.write("Nombre del producto: " + producto.nombre + "<br>")
    document.write("Tipo de producto: " + producto.tipo + "<br>")
    document.write("Precio del producto: " + producto.precio + "<br>")
    document.write("Cantidad de stock " + producto.stock + "<br>")
    document.write("<br>")
}


//ORDENO PRODUCTOS POR PRECIO

const productosPrecio = productos.sort((a, b) => {
    return a.precio - b.precio
});

console.log(productosPrecio)
document.write("<b>Productos ordenados por precio: </b>" + "<br>")
for (const producto of productosPrecio){
    document.write("Nombre del producto: " + producto.nombre + "<br>")
    document.write("Tipo de producto: " + producto.tipo + "<br>")
    document.write("Precio del producto: " + producto.precio + "<br>")
    document.write("Cantidad de stock " + producto.stock + "<br>")
    document.write("<br>")
}

