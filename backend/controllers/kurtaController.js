const Kurtas = require('../models/kurtas')
const ErrorHandler =require('../utilis/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
const cloudinary = require('cloudinary')


//create new product
exports.newKurta = catchAsyncError (async (req,res,next) =>{
   

    let images = []
    if(typeof req.body.images === 'string'){
        images.push(req.body.images)
    }else{
        images = req.body.images
    }

    let imagesLinks = [];
    for(let i = 0; i< images.length; i++){
        const result = await cloudinary.v2.uploader.upload(images[i],{
            folder:'project-image'
        });


        imagesLinks.push({
            public_id:result.public_id,
            url:result.secure_url
        })
    }
    req.body.images=imagesLinks
    req.body.user = req.user.id;

   
    const kurta = await Kurtas.create(req.body);
    res.status(201).json({
        success:true,
        kurta
    })
})


exports.getSingleKurta = catchAsyncError (async(req,res,next) =>{
    const product = await Kurtas.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product not found',404))
    }

    res.status(200).json({
        success:true,
        product

    })
})

exports.getProducts = catchAsyncError (async (req,res,next) =>{

    const products = await Kurtas.find();
    res.status(200).json({
        success:true,
       products
    })
})


exports.getAdminProducts = catchAsyncError (async (req,res,next) =>{

    const products = await Kurtas.find();
    res.status(200).json({
        success:true,
       products
    })
})

//delete product

exports.deleteKurta =catchAsyncError (async (req,res,next) =>{
    const product = await Kurtas.findById(req.params.id);
    if(!product) {
        return next(new ErrorHandler('Prouct not found'))
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:'Product is deleted'
    })
})
