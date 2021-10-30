class Tarea{
    constructor (name, desc, estado) {
        this.name = name.toLowerCase()
        this.desc = desc
        this.estado = estado
    }
    info () {
        document.write("Tarea: " + this.name + "<br>")
        document.write("Descripcion: " + this.desc + "<br>")
        document.write("Estado " + this.estado + "<br>")
        document.write("<br>")
    }
}

// CREO LA LISTA DONDE SE GUARDAN LAS TAREAS
let tareas = JSON.parse(localStorage.getItem('tareas')) || []

//METODO PARA AGREGAR LOS TAREAS A LA LISTA
const create = (tarea) => {
    tareas.push(tarea)
    localStorage.setItem('tareas', JSON.stringify(tareas))
}

//ACCEDO A LOS ELEMENTOS DEL DOM
const listaTask = document.getElementById('lista-task')
const formTask = document.getElementById('form-task')
const inputName = document.getElementById('input-name')
const inputDesc = document.getElementById('input-desc')
const inputEstado = document.getElementById('input-estado')


//AGREGO LAS TAREAS
for (let tarea of tareas) {

    let itemTask = document.createElement('div')

    itemTask.innerHTML = `
                            Tarea: ${tarea.name} <br>
                            Descripcion: ${tarea.desc} <br>
                            Estado: ${tarea.estado} <br>
                            `

    listaTask.appendChild(itemTask)
}

formTask.addEventListener('submit', (event) => {
    const name = inputName.value
    const desc = inputDesc.value
    const estado = inputEstado.value

    const tarea = new Tarea(name, desc, estado)

    create(tarea)


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
