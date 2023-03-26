const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100,'Prodcut name cannot exceed 100 characters']

    },
   
    description: {
        type: String,
        required: [true, 'Please enter product discription']
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
    category: {
        type: String,
        required: [true,'Please select category for this product'],
        enum: {
            values:[
                'HTML,CSS,Javascript',
                'C sharp',
                'Java',
                'React js',
                'Angular js',
                'Node js',
                'Python'



            ],
            message: 'Please select correct category'
        }
    },
    contactno: {
         type:Number,
         required:true,
         maxlength:[10,'Enter 10 digit number']
    },
  

    createdAt:{
        type:Date,
        default: Date.now

    }
})

module.exports = mongoose.model('Product',productSchema)