//checks if user is authenticated or not

const User = require('../models/user');
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utilis/errorHandler");
const catchAsyncError = require("./catchAsyncError");



exports.isAuthenticatedUser = catchAsyncError(async(req,re,next)=>{

    const { token } = req.cookies
    if(!token){
        return next(new ErrorHandler('Login Please!!! ',401))
    }

    const decoded = jwt.verify(token,'fdghufhgfhgjkhfjsfhdgjhdf')

    req.user = await User.findById(decoded.id);

    next()
})


//Handling users roles

exports.authorizeRoles = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(
            new ErrorHandler(`Role(${req.user.role}) is not allowed to access this resource`,403))

            

        }
        next()
    }
}