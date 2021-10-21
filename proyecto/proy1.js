class Producto{
    constructor (nombre, precio, iva, stock) {
        this.nombre = nombre.toLowerCase()
        this.precio = precio
        this.iva = iva
        this.stock = stock
    }
    info () {
        document.write("Nombre del producto: " + this.nombre + "<br>")
        document.write("Tipo de producto: " + this.tipo + "<br>")
        document.write("Precio del producto: " + this.precio + "<br>")
        document.write("Cantidad de stock " + this.stock + "<br>")
        document.write("<br>")
    }
    valorIva() {
        if (this.iva == 1) {
        return this.iva=1.21;
        }
        else if (this.iva == 2 ){
        return this.iva=1;
        }
        else {
        throw new Error ("Debes ingresar un valor correcto: 1 / 2,")
        }
    }
    calculoIva () {
    return  this.calcIva = (this.precio * this.iva);
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
        let precio= Number(prompt("Ingresa el precio del producto"));
        let iva= Number(prompt("Ingresa 1 si incluye IVA. Ingresa 2 si no incluye iVA"));
        let stock = Number(prompt("Ingresa la cantidad de stock"))
        productos.push(new Producto(nombre, precio, iva, stock));
    }
} while (nombre != "esc" || nombre != "Esc" || nombre != "ESC" );

console.log(productos)

for (const producto of productos){
    document.write("Nombre del producto: " + producto.nombre + "<br>")
    document.write("Precio del producto: " + producto.precio + "<br>")
    document.write("Precio del producto con IVA: " + producto.calcIva + "<br>")
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