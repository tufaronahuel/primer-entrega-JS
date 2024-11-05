let entrada = prompt("Selecciona cantidad de cuotas 1,3,6,9,12");
debugger
while(entrada != "Efectivo"){
    switch (entrada) {
        case "1":
            alert("Sin interes");
            break;
        case "3":
            alert("6% de interes");
            break;
        case "6":
            alert("12% de interes");
            break;
        case "9":
            alert("15% de interes");
            break;
        case "12":
            alert("20% de interes");
            break; 
        default:
            alert("cantidad de cuotas ingresada no disponible");
            break;              
    }
    entrada = prompt("Selecciona cantidad de cuotas 1,3,6,9,12"); 
}