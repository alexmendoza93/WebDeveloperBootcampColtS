const args = process.argv.slice(2);
// el slice(2) es por que del objeto al que vamos a llamar solo nor interesa a partir del tercer elemento

for (let arg of args) {
    console.log(`Hola! ${arg}`)
}

// despues desde consola en la carpeta de este archivo ejecutamos: node greeter.js colt sam erny simon