const { randomBytes } = require('crypto');
const express = require('express');
const app = express();
const path = require('path');
// esta constante es para agregar una habilidad extra a este archivo que es correr desde otro directorio que no sea este, de lo contrario no sirve
// ---------------------------------------------
// empecemos a usar archivos estaticos CSS,js, img etc
app.use(express.static(path.join(__dirname, 'public')));
// con path.join podemos ejeci¿utar nuestro codigo desde cualquier carpeta con la ruta absoluta

app.set('view engine', 'ejs');
// de esta forma ya estamos mandando a llamosr los archivos ejs por default
app.set('views', path.join(__dirname, '/views'));
// este es el complemento para correr el archivo por fuera de la carpeta original



app.get('/', (req, res) =>{
  res.render('home.ejs')
});
// con este metodo podemos renderizar archivos completos (poner la extension .ejs no es necesario)

app.get('/rand', (req, res) =>{
  const num = Math.floor(Math.random()*10)+1;
  res.render('random',{bubbles: num})
});
// con este codigo de aqui corremos el archivo randomBytes.ejs desde nuestra terminal en: nodemon index.js y seleccionando en nuetro browser localhost:3000/rand

// app.get('/', (req, res) =>{
//   res.send('HI!')
// });
// esto es para mandar un string

app.listen(3000, ()=>{
  console.log("listening on port 3000");
})

// ----------------------------------
// ejercicio de subreddit
app.get('/r/:subreddit', (req, res) =>{
  const {subreddit} = req.params;
  res.render('subreddit',{subreddit})
});

// ----------------------------
// LOOPS en ejs
app.get('/cats', (req, res) =>{
  const cats = ['monty','elisa','burns','tamy','jr']
  res.render('cats',{allCats:cats})
});

