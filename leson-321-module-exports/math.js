const PI = 3.141592;

const square = x => x * x;

const add = (x,y) => x+y;

// podemos requerir estas constantes para usarlas desde otros archivos

// necesitamos darles permiso a las constantes para ser utilizadas en otras aplicaciones

// module.exports = "helloooo" (prueba)
// no importa la informacion que tengamos en este archivo, lo unico que se exportara si se requiere es lo que este en module.exports

exports.PI = PI;
exports.square = square;
exports.add = add;

// esto lo que crea es un objeto

// --------------------------------
// esto es otra forma de llamarlos

// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

// module.exports= math;