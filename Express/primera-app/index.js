const express = require('express');
// de esta forma mandamos a llamar express una vex instalado desde la terminal

const app = express();
// asignamos una variable para mandar a lamar los metodos de express

app.listen(3000, () => {
    console.log("escuchando desde el puerto 3000!")
})
// de esta forma creamos un servidor en nuestra propia computadora y pone en espera en la terminal para una respuesta (salimos de ese estado con ctrl +c o .exit)

// app.use((req, res) =>{
//     console.log("me esta llegando un request");
//     res.send("hola! recibimos tu request");
// })
// este es nuestro call back cuando accedemos al localhost:3000 en nuestro buscador pero necesito mandar de nuevo el request desde la terminal

// con las variables que pusimos req, res podemos utilizar otros metodos por ejemplo send que envia un mensaje o lo que sea y (se detiene el programa cuando se envia send)

app.get(('/gatos'), (req, res) =>{
    console.log("cat request")
    res.send("meoww");
})
// de esta forma hacemor rutas para diferentes paginas

app.get(('/perros'), (req, res) =>{
    console.log("dog request")
    res.send("woof");
})

app.get(('/'), (req, res) =>{
    console.log("home request")
    res.send('<h1>Esta es la pagina principal</h1>');
})


// -------------------------------------

// ahora vamos a difinir subcategorias y vamos a extraer los parametros
app.get('/r/:subreddit', (req, res) =>{
    const {subreddit} = req.params;
    console.log(`${subreddit} request`)
    res.send(`<h1>buscando ${subreddit}</h1>`)
}) 

// estonces corremos nuestro programa desde terminal con: node index.js y en nuestro buscador con localhost:3000/r/lo que sea

// ----------------------------------------

// BUSQUEDA CON QUERY
app.get('/search', (req, res)=>{
    const {q} = req.query;
    if (!q){
        res.send("nada que mostrar si no se busca nada")
    }
    res.send(`<h1>buscando resultados para ${q}</h1>`)
})

// desde aqui podemos correr nuestro programa desde terminal con: nodemon index.js y de esta forma corremos el programa cada vez que guardamos el documento y desde nuestro buscador ponemos: localhost:3000/search?q=lo que sea




app.get('*', (req, res) =>{
    console.log("ruta desconocida")
    res.send('<h1>No reconozco esa ruta</h1>');
})

// con * digo que sea cualquier otra ruta entonces corre ese codigo, es importante poner el codigo al final, de lo contrario no servirian las otras rutas