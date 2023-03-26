const mongoose =require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const jwt =require('jsonwebtoken')
const userSchema = new mongoose.Schema({

     name:{
         type:String,
         required:[true, 'Please enter your name'],
         maxLength:[30,'Your name cnnot exeed 30 charcters']
     },
     email: {
        type: String,
        required:[true,'Please enter your email'],
        unique: true,
        validate:[validator.isEmail,'Please enter valid email address']
    },
    password:{
        type:String,
        required:[true,'Please enter your password'],
        minlength:[6,'your password must be longer than 6 characters'],
        select:false
    },
  
   
    role:{
        type:String,
        default: 'user'
    },
    createdAt:{
        type:Date,
        default:Date.now
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date


})


//encrpting password before saying user

userSchema.pre('save',async function (next){
    if(!this.isModified('password')){
    next()
    }
    this.password =await bcrypt.hash(this.password,10)
})


//compare user password
userSchema.methods.comparePassword =async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

//return json token 

userSchema.methods.getJwtToken =function () {
    return jwt.sign({ id: this._id},'fdghufhgfhgjkhfjsfhdgjhdf',{
        expiresIn:'7d'
    });
}

module.exports = mongoose.model('User', userSchema)
