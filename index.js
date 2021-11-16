// Variables para operacion
var tipooperacion = +prompt("Ingrese el n\u00FAmero de la operacion que desea realizar COMPRA=1 - VENTA=2");
var nombrecompleto = prompt("Ingrese sus nombres completos");
var montoIngresado = +prompt("Ingrese monto a cambiar");
var compra = 3.2;
var venta = 3.6;
var min = 5000;
var max = 9000;
var codigooperacion = Math.floor(Math.random() * (max - min + 1) + min);
var montoEnviado = 0;
if (tipooperacion === 1) {
    montoEnviado = montoIngresado * compra;
}
else {
    montoEnviado = montoIngresado / venta;
}
// Objeto Creado 
var operacion = {
    nombres: nombrecompleto,
    montoI: montoIngresado,
    montoE: montoEnviado,
    codO: codigooperacion
};
alert('Operacion : ' + operacion.codO + '\n' + 'Cliente : ' + operacion.nombres + '\n' + 'Monto : ' + operacion.montoE);
