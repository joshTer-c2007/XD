// Punto 3: Modificar sueldo base a 500 [cite: 34]
const SUELDO_BASE = 500;
const META_VENTAS = 10;

// Punto 5: Función calcularBono [cite: 42]
// Recibe las ventas y retorna 30 por cada venta adicional a la meta [cite: 43]
function calcularBono(numVentas) {
    if (numVentas > META_VENTAS) {
        let adicionales = numVentas - META_VENTAS;
        return adicionales * 30; // [cite: 45, 46]
    } else {
        return 0; // [cite: 47]
    }
}

// Punto 6: Función calcularEstrellas [cite: 57]
// Retorna el número de estrellas según el rango de ventas [cite: 58]
function calcularEstrellas(numVentas) {
    if (numVentas >= 1 && numVentas <= 5) return 1; // [cite: 59]
    if (numVentas >= 6 && numVentas <= 9) return 2; // [cite: 60]
    if (numVentas == 10) return 3;                  // [cite: 61]
    if (numVentas >= 11 && numVentas <= 14) return 4; // [cite: 62]
    if (numVentas >= 15) return 5;                  // [cite: 63]
    return 0;
}

// Punto 7 y 8: Integración en la función principal calcularSueldo
// Aquí debes llamar a las funciones anteriores y usar utilitarios.js [cite: 26, 67]
function calcularSueldo() {
    // A. Recuperar el valor de la caja de texto ventas usando utilitarios.js
    let ventas = recuperarInt("txtVentas");
    
    // C, D, E: Calcular el bono y el sueldo total
    let valorBono = calcularBono(ventas);
    let sueldoTotal = SUELDO_BASE + valorBono;
    
    // G, H: Calcular y pintar las estrellas [cite: 67]
    let numEstrellas = calcularEstrellas(ventas);
    pintarEstrellas(numEstrellas); // [cite: 66]
    
    // I, J: Mostrar resultados en la pantalla [cite: 70]
    mostrarTexto("lblBono", valorBono.toFixed(2));
    mostrarTexto("lblSueldoTotal", sueldoTotal.toFixed(2));
    
    deshabilitarComponente("btnCalcular");
    habilitarComponente("btnLimpiar");
}
// Punto 9: Limpiar y habilitar componentes para un nuevo cálculo [cite: 76]
function crearNuevo() {
    habilitarComponente("btnCalcular");    // [cite: 77]
    deshabilitarComponente("btnLimpiar"); // [cite: 78]
    
    // Habilitar y limpiar cajas de texto [cite: 79, 80]
    habilitarComponente("txtVentas");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    
    limpiarCaja("txtVentas");
    limpiarCaja("txtNombre");
    limpiarCaja("txtApellido");
    
    // Limpiar visualización de estrellas y mensajes [cite: 81, 82, 83]
    pintarEstrellas(0); 
    mostrarTexto("lblBono", "0.00");
    mostrarTexto("lblSueldoTotal", "0.00");
    mostrarTexto("lblMensaje", "");
}