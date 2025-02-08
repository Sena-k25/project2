const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
require('./connection');

//imported express
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');


//initialise express
const app = express()

//mid
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

//create api
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 3011;
app.listen(3011, () => {
    console.log("port is running on 3011")
})  //port is running on 3007