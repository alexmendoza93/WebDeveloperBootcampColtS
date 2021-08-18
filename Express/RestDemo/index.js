const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
// todo esto es el set que necesitaremos 
// agregamos a nuestro proyecto y mandamos a llamar express, ejs, y habilitamos rutas absolutas y datos de jason y metodos de get y post
app.use(methodOverride('_method'))

// -----------------------------
// fingimos una base de datos
let comments = [
    {
        id: uuidv4(),
     username: 'Todd',
     comment: 'lolololol'   
    },
    {
        id: uuidv4(),
     username: 'Amy',
     comment: 'I really don´t like it'   
    },
    {
        id: uuidv4(),
     username: 'Rich',
     comment: 'this is great'   
    },
    {
        id: uuidv4(),
     username: 'Alex',
     comment: 'great stuff'   
    }
];


app.get('/comments', (req, res) => {
    res.render('comments/index',{comments})
});
// --------------------------------------
// empezamos a hacer nuestro propio servidor RESTful 
app.get('/comments/new',(req, res) => {
    res.render('comments/new')
})

app.post('/comments',(req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuidv4() });
    res.redirect('/comments');
}) 

// -----------------------------------------------
// empezamos a trabajar con id
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
});

// ----------------------------------------------
// empazamos a usar el metodo path para reempazar un comentario
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

// -----------------------------------------------
// vamos a editar un comentario actual
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
});

// -------------------------------------------------
// es hora de eliminar los comentarios!!!
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    // con esto extraemos el id del path
    // const foundComment = comments.find(c => c.id === id);
    // con esto enconttramos un comentario
   comments = comments.filter( c => c.id !== id);
   res.redirect('/comments');
})



app.get('/tacos', (req,res)=>{
    res.send("GET /tacos response")
});

app.post('/tacos', (req,res)=>{
    const {meat, qty}=req.body;
    res.send(`OK, aquí estan tus ${qty} tacos de ${meat}`)
});



app.listen(3000, ()=>{
    console.log('escuchando desde el puerto 3000')
});