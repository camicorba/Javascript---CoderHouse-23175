class Producto{
    constructor (nombre, tipo, precio, stock) {
        this.nombre = nombre.toLowerCase()
        this.tipo = tipo.toLowerCase()
        this.precio = precio
        this.stock = stock
    }
}

//METODO PARA BUSCAR
const findOne = (nombre) => {
    nombre = nombre.toLowerCase()
    const producto = productos.find (producto => producto.nombre === nombre)
}

//METODO PARA ELIMINAR
const remove = (nombre) => {
    nombre = nombre.toLowerCase
}


const productos = []

const create = (producto) => {
    productos.push(producto)
}


const producto1 = new Producto("planta", "sansviera", 1500, 3);
const producto2 = new Producto("planta", "suculenta", 250, 8);
const producto3 = new Producto("insumo", "maceta", 450, 15);
const producto4 = new Producto("insumo", "sustrato", 550, 7);

create(producto1)
create(producto2)
create(producto3)
create(producto4)