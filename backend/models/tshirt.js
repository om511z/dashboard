const mongoose = require('mongoose')

const TshirtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100,'Prodcut name cannot exceed 100 characters']

    },
   
    price: {
        type: String,
        required: [true, 'Please enter product price']
    },
    
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    size: {
         type:String,
         required:true      
    },
    fabric:{
        type:String,
        required:true
    },
  

    createdAt:{
        type:Date,
        default: Date.now

    }
})

module.exports = mongoose.model('Tshirt',TshirtSchema)