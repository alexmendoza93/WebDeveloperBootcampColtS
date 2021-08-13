const fs = require("fs");
// fs es un objeto que tiene multitud de metodos unos de los cuales podemos usar para hacer carpetas y archivos
const folderName = process.argv[2] || 'project'
// aque se agarrara el tercer elemento del objeto llamado y si no se pone un argumento da por default project


try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`,'');
    fs.writeFileSync(`${folderName}/app.js`,'');
    fs.writeFileSync(`${folderName}/style.css`,'');
}catch (e){
    console.log("Sorry, something went wrong");
    console.log(e);
}

// y entonces corremos en nuestra consola en cualquier parte que desemos crear esa carpeta con: node boilerplate.js nomCarpeta