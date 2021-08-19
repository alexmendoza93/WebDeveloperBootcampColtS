const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("estas dentro!!!")
});

// para hacer esto tuve que iniciar mongo d desde una consola y correr este archivo desde otra consola de git bash con: node index.js