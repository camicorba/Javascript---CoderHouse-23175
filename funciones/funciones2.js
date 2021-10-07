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
function agregarInteres(){
    let tieneInteres = prompt("¿Las cuotas tienen interes? SI/NO");
    if (tieneInteres == "SI") {
        let interes = Number(prompt("Ingresar el porcentaje de interes, en numero entero"));
        return interes;       
    } else if (tieneInteres == "NO") {
        let interes = 1;
        return interes;
    }
    let interes = tieneInteres
    return interes;
}


function valorCuota() {
    let calculo = (costo * (1 + (interes / 100))) / cuotas;
    return calculo
}
// LLAMO A LAS FUNCIONES //
let costo = agregarcosto();
    document.write("El costo del producto es de $" + costo + "<br>")
let cuotas = agregarcuotas()
    document.write("La cantidad de cuotas es de " + cuotas + "<br>")
let interes = agregarInteres();
    document.write("El monto de interes es del " + interes + "%" + "<br>")
let calculo = valorCuota()
    document.write("El valor a pagar por mes, será de $" + calculo + "<br>")

