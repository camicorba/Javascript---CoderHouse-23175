let alimentos;
while (alimentos != "ESC") {
    alimentos = prompt ("Ingresa un item. Cuando termines, escribi ESC");
    if (alimentos == "ESC") {
        break;
    }
    alert("Listo! "+alimentos +" fue ingresado a tu lista");
    document.write(alimentos + "<br>");
}
