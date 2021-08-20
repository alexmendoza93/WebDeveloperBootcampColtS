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
       required: true
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
    }
   
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Tire Pump', price: 19.99, categories: ['Cycling', 'Safety']})
bike.save()
    .then(data => {
        console.log('funciono!')
        console.log(data)
    })
    .catch(err => {
        console.log('oh no, error!')
        console.log(err.errors.name.properties.message)
    })