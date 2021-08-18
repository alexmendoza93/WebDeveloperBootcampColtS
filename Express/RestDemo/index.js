const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
// todo esto es el set que necesitaremos 
// agregamos a nuestro proyecto y mandamos a llamar express, ejs, y habilitamos rutas absolutas y datos de jason y metodos de get y post

// -----------------------------
// fingimos una base de datos
const comments = [
    {
        id:1,
     username: 'Todd',
     comment: 'lolololol'   
    },
    {
        id:2,
     username: 'Amy',
     comment: 'I really don´t like it'   
    },
    {
        id:3,
     username: 'Rich',
     comment: 'this is great'   
    },
    {
        id:4,
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
    comments.push({username, comment});
    res.redirect('/comments');
})

// -----------------------------------------------
// empezamos a trabajar con id
app.get('/comments/:id', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', {comment})
});


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