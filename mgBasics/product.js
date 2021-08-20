const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})

.then(() => {
    console.log("Estas dentro")
})
.catch(err => {
console.log('OHHH no, ERROR')
console.log(err)
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // de esta forma siempre pedira poner el nombre
        maxlength: 20
        // el string no puede ser mayor a 20 caracteres
    },
    price: {
       type: Number,
       required: true,
       min: [0, 'Demasiado barato amigo']
    },
    onSale:{
        type: Boolean,
        default: false
    },
    categories: [String],
    qty:{
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
        // esta validacion es para que se meta una talla o lo que sea solo bajo esos parametros
    }

   
});

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({name: 'Tire Pump', price: 19.99, categories: ['Cycling', 'Safety']})
// bike.save()
// esto sirve para subir nuevos pruductos
// ------------------------------------------------
// ahora modifiquemos un pruducto
Product.findOneAndUpdate({name:'Tire Pump'}, { price: -19.99}, { new: true, runValidators: true})
// primero lo buscamos por su nombre en este CacheStorage, luego le actualizamos el precio en este CacheStorage, y luego le pedimos que nos muestre la actualizacion y como las validaciones solo sirven para nuevos productos las activamos tmb para actualizaciones
    .then(data => {
        console.log('funciono!')
        console.log(data)
    })
    .catch(err => {
        console.log('oh no, error!')
        console.log(err)
    })