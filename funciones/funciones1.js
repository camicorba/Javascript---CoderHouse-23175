// DEFINICION DE FUNCIONES // 
function agregarcosto(){
    let pedirCosto= Number(prompt("Ingresa el monto total del producto"));
    while(pedirCosto == false){
        alert("Debe ingresar un valor");
        pedirCosto = Number(prompt("Ingresa el monto total del producto"));
    }
    let costo = pedirCosto
    return costo;
}
function agregarcuotas(){
    let pedirCuotas = Number(prompt("Ingresa la cantidad de cuotas"));
    while(pedirCuotas == false){
        alert("Ingresa un valor válido");
        pedirCuotas = Number(prompt("Ingresa la cantidad de cuotas"));
    }
    let cuotas = pedirCuotas
    return cuotas;
}
function valorCuota() {
    let calculo = costo / cuotas;
    return calculo
}
// LLAMO A LAS FUNCIONES //
let costo = agregarcosto();
    document.write("El costo del producto es de $" + costo + "<br>")
let cuotas = agregarcuotas()
    document.write("La cantidad de cuotas es de " + cuotas + "<br>")
let calculo = valorCuota()
    document.write("El valor a pagar por mes, será de $" + calculo + "<br>")