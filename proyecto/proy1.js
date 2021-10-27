class Producto{
    constructor (nombre, precio, stock) {
        this.nombre = nombre.toLowerCase()
        this.precio = precio
        this.stock = stock
    }
    info () {
        document.write("Nombre del producto: " + this.nombre + "<br>")
        document.write("Precio del producto: " + this.precio + "<br>")
        document.write("Cantidad de stock " + this.stock + "<br>")
        document.write("<br>")
    }
    calculoIva () {
      this.precioIva = this.precio * 1.21
    }
}


// INGRESO DATOS MEDIANTE PROMPT
const productos = [];
do {
    const agregar = (prompt("Ingrese el nombre de un producto. Para finalizar, escribir 'esc'.")).toLowerCase;
    if (agregar === "esc"){
        break;
    } else {
        nombre = agregar;
        let precio= Number(prompt("Ingresa el precio del producto"));
        let stock = Number(prompt("Ingresa la cantidad de stock"))
        productos.push(new Producto(nombre, precio, iva, precioIva, stock));
    }
} while (nombre != "esc");

console.log(productos)
// for(const producto of productos){
//     producto.calculoIva();
// }


for (const producto of productos){
    document.write("Nombre del producto: " + producto.nombre + "<br>")
    document.write("Precio del producto: " + producto.precio + "<br>")
    document.write("Precio del producto con IVA: " + producto.precioIva + "<br>")
    document.write("Cantidad de stock " + producto.stock + "<br>")
    document.write("<br>")
}

//ORDENO PRODUCTOS POR PRECIO

// const productosPrecio = productos.sort((a, b) => {
//     return a.precio - b.precio
// });

// console.log(productosPrecio)
// document.write("<b>Productos con IVA inlcuido: </b>" + "<br>")
// for (const producto of productosPrecio){
//     document.write("Nombre del producto: " + producto.nombre + "<br>")
//     document.write("Tipo de producto: " + producto.tipo + "<br>")
//     document.write("Precio del producto: " + producto.precio + "<br>")
//     document.write("Cantidad de stock " + producto.stock + "<br>")
//     document.write("<br>")
// }