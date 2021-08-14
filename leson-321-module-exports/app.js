const math = require("./math");
// cuando mandas a llamar un archivo le debes de poner ./
console.log(math.PI);

console.log(math.square(5));

console.log(math.add(123,56));

// luego ejecutamos en terminal: node app.js
// ----------------------------------
// una forma mas sensilla de hacer las cosas seria

// const {PI, square, add} = require('./math')

// console.log(PI);
// console.log(square(55));
// console.log(add(53436, 745457))