const mongoose =require('mongoose');
DATABASE = 'mongodb+srv://omkhot:omkhot@cluster0.2mf4so5.mongodb.net/?retryWrites=true&w=majority'
const connectDatabase =() => {
    mongoose.connect(DATABASE ,{ 
      
    }).then(con => {
        console.log(`Mongo db connected with HOST : ${con.connection.host}`)
    })
}


module.exports = connectDatabase;