const jokes = require('give-me-a-joke');

// acabo de instalar npm i colors en la misma carpeta de bromas y ahora me dispongo a haver bromas a color en mi terminal
const colors = require('colors');
// console.dir(jokes)
// esta madre de dir muestra los metodos que tiene esta libreria para hacer acciones

// jokes.getRandomCNJoke (function(joke) {
//      console.log(joke);
// });

// y listo ya esta funcional las bromas random de chuck norris con: node index.js

const fn = "Alex";
const ln = "Mendoza";
jokes.getCustomJoke (fn, ln, function(joke) {
    console.log(joke.random);
});

// de esta forma me convierto en chuck norris de la programacion