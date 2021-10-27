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

// CREO LA LISTA DONDE SE GUARDAN LOS PRODUCTOS
let productos = JSON.parse(localStorage.getItem('productos')) || []

//METODO PARA AGREGAR LOS PRODUCTOS A LA LISTA
const create = (producto) => {
    productos.push(producto)
    localStorage.setItem('productos', JSON.stringify(productos))
}

//ACCEDO A LOS ELEMENTOS DEL DOM
const listaProd = document.getElementById('lista-prod')
const formProd = document.getElementById('form-prod')
const inputPrNombre = document.getElementById('input-nombre-prod')
const inputPrPrecio = document.getElementById('input-precio-prod')
const inputPrStock = document.getElementById('input-stock-prod')


//AGREGO LOS PRODUCTOS 
for (let producto of productos) {

    let itemProd = document.createElement('div')

    itemProd.innerHTML = `
                            Producto: ${producto.nombre} <br>
                            Precio: ${producto.precio} <br>
                            Cantidad de stock: ${producto.stock}
                            `

    listaProd.appendChild(itemProd)
}

formProd.addEventListener('submit', (event) => {
    const nombre = inputPrNombre.value
    const precio = inputPrPrecio.value
    const stock = inputPrStock.value

    const producto = new Producto(nombre, precio, stock)

    create(producto)


})

// INGRESO DATOS MEDIANTE PROMPT



// const productos = [];
// do {
//     const agregar = (prompt("Ingrese el nombre de un producto. Para finalizar, escribir 'esc'.")).toLowerCase();
//     if (agregar === "esc" || agregar === "Esc" || agregar === "ESC"){
//         break;
//     } else {
//         nombre = agregar;
//         let precio= Number(prompt("Ingresa el precio del producto"));
//         let stock = Number(prompt("Ingresa la cantidad de stock"))
//         productos.push(new Producto(nombre, precio, stock));
//     }
// } while (nombre != "esc");

// console.log(productos)
// for(const producto of productos){
//     producto.calculoIva();
// }


// for (const producto of productos){
//     document.write("Nombre del producto: " + producto.nombre + "<br>")
//     document.write("Precio del producto: " + producto.precio + "<br>")
//     document.write("Precio del producto con IVA: " + producto.precioIva + "<br>")
//     document.write("Cantidad de stock " + producto.stock + "<br>")
//     document.write("<br>")
// }
