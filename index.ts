// Interface
interface CambioMoneda {
  nombres : string,
  montoI : number,
  montoE : number,
  codO : number
}


// Variables para operacion
let tipooperacion = +prompt(`Ingrese el número de la operacion que desea realizar COMPRA=1 - VENTA=2`);
let nombrecompleto = prompt(`Ingrese sus nombres completos`);
let montoIngresado = +prompt(`Ingrese monto a cambiar`);
let compra = 3.2;
let venta = 3.6;
let min = 5000;
let max = 9000;
let codigooperacion = Math.floor(Math.random() * (max - min + 1) + min);
let montoEnviado = 0;

if(tipooperacion === 1) {
  montoEnviado = montoIngresado * compra;
} else {
  montoEnviado = montoIngresado / venta;
}

// Objeto Creado 
const operacion : CambioMoneda = {
  nombres : nombrecompleto,
  montoI : montoIngresado,
  montoE : montoEnviado,
  codO : codigooperacion
}

alert( 'Operacion : '+ operacion.codO + '\n' + 'Cliente : ' + operacion.nombres + '\n' + 'Monto : ' + operacion.montoE )



