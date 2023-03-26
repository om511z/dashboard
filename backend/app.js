const express = require('express')
const cors = require('cors');
const app = express();

const errorMiddleware = require('./middlewares/errors')
const cookeiparser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
const path = require('path')

if(process.env.NODE_ENV === 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env'})

app.use(cors());
app.use(cookeiparser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(fileupload())
const product = require('./routes/product');
const auth = require('./routes/auth');
const shirt = require('./routes/shirt')
const jeans = require('./routes/jeans')
const tshirt = require('./routes/tshirt')
const kurta = require('./routes/kurta')
const jacket = require('./routes/jacket')
app.use('/api/v2',product)
app.use('/api/v2',auth)
app.use('/api/v2',shirt)
app.use('/api/v2',jeans)
app.use('/api/v2',tshirt)
app.use('/api/v2',kurta)
app.use('/api/v2',jacket)

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
})

app.use(errorMiddleware);

module.exports = app