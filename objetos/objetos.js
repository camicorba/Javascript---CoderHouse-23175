class Gastos {
    constructor (descripcion, tipo, valor) {
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.valor = valor;
    }
    balance() {
        document.write("Este mes gastaste $" + (this.valor) + " en " + (this.descripcion) + ". Este tipo de gasto es  " + (this.tipo) + "<br>");
    }
}

function gastosMes() {
    gastoTotalMes = gasto1.valor + gasto2.valor + gasto3.valor;
    return gastoTotalMes;
}

let alquiler = Number(prompt("Ingresa tus gastos mensuales de alquiler"));
let supermercado = Number(prompt("Ingresa tus gastos mensuales en supermercado"));
let otros = Number(prompt("Ingresa el monto mensual aproximado de otros tipos de gastos"));



let gasto1 = new Gastos ("alquiler", "fijo", alquiler);
gasto1.balance();
let gasto2 = new Gastos ("compras", "variable", supermercado);
gasto2.balance();
let gasto3 = new Gastos ("otros gastos", "variable", otros);
gasto3.balance();

gastosMes();
document.write("Tus gastos mensuales son de $" + gastoTotalMes)
