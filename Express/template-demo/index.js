const express = require('express');
const app = express();
const path = require('path');
// esta constante es para agregar una habilidad extra a este archivo que es correr desde otro directorio que no sea este, de lo contrario no sirve


app.set('view engine', 'ejs');
// de esta forma ya estamos mandando a llamosr los archivos ejs por default
app.set('views', path.join(__dirname, '/views'));
// este es el complemento para correr el archivo por fuera de la carpeta original



app.get('/', (req, res) =>{
  res.render('home.ejs')
});
// con este metodo podemos renderizar archivos completos (poner la extension .ejs no es necesario)

// app.get('/', (req, res) =>{
//   res.send('HI!')
// });
// esto es para mandar un string

app.listen(3000, ()=>{
  console.log("listening on port 3000");
})



