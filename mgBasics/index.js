const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})

.then(() => {
    console.log("Estas dentro")
})
.catch(err => {
console.log('OHHH no, ERROR')
console.log(err)
})

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("estas dentro!!!")
// });
// esto es una pruba para saber si estas conectado

// para hacer esto tuve que iniciar mongo d desde una consola y correr este archivo desde otra consola de git bash con: node index.js

// -------------------------------------------
// vamos a crear nuestro primes schema para convertirlo en un modelo para hacerlo una base de datos

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.5, rating: 'R'} )
// solo la usamos la primera vez
// --------------------------------------------------

// ahora vamos a subir varias peliculas al mismo tiempo

// Movie.insertMany([
//     {title: 'Amelie', year: 2001, score: 8.3, rating:'R'},
//     {title: 'Alien', year: 1979, score: 8.9, rating:'R'},
//     {title: 'The Iron Giant', year: 1999, score: 9.2, rating:'PG'},
//     {title: 'Anabelle', year: 2005, score: 7.6, rating:'R'},
//     {title: 'Gladiator', year: 1998, score: 8.6, rating:'R'},
// ])
// .then(data => {
//     console.log('Funciono!')
//     console.log(data);
// })