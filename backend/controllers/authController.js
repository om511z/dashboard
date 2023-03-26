const User = require('../models/user')

const ErrorHandler =require('../utilis/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError');
const sendToken = require('../utilis/jwtToken');

exports.registerUser = catchAsyncError( async(req,res,next) =>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password
    })

  sendToken(user,200,res)
})

  
//login user = /api/v5/login

exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body;

    //checks if email password is enterd by user
    if(!email || !password){
        return next(new ErrorHandler('Please enter email and password',400));
    }

    //Finding user in database
     const user = await User.findOne({email}).select('+password')

     if(!user){
         return next(new ErrorHandler('invalid Email or password',401));

     }

     //checks if password is corect or not

     const isPasswordMatched = await user.comparePassword(password)
      if(!isPasswordMatched) {
          return next(new ErrorHandler('Invalid Email or password',401));

      }

    
      sendToken(user,200,res)

})

// get current logged in user details = /api/v5/me

exports.getUserProfile = catchAsyncError(async(req,res,next) =>{
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user
    })
})


//logout user = /api/v1/logout
exports.logout = catchAsyncError(async(req,res,next)=>{
    res.status().cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({
        success:true,
        message:'Logged out'
    })
})