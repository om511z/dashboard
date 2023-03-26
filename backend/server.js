const app =require('./app')

const connectDatabase = require('./config/database')

const dotenv = require('dotenv')
const cloudinary = require('cloudinary')

//conntecing to databse
connectDatabase();

dotenv.config({path:'backend/config/config.env'})
const PORT =5000
const server = app.listen(PORT,() =>{
    console.log(`Server started on PORT: ${PORT}.`)
})

//set up cloudinary config
cloudinary.config({
    cloud_name : 'df9fjwvbk',
    api_key : 632712224776739,
    api_secret: '6lX0oIQBV-vrE2KvO_V0yiJO8c8'
})


//handle unhandle promise rejection

process.on('unhandledRejection', err=>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection')
    server.close(() =>{
        process.exit(1)
    })
})