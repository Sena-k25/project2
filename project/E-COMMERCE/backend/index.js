const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
require('./connection');

//imported express
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cart = require('./models/cartend')

//initialise express
const app = express()

//mid
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

app.post("/cartAdd", async (req, res) => {
    try {
        const Cart = new cart(req.body);
        await Cart.save();
        res.status(201).send({ message: "Data Added" }); // Use 201 for resource creation
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to add product" }); // 500 for server errors
    }
});

app.delete("/cartRemove/:id", async (req, res) => {
    try {
        await cart.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Data Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to delete product" });
    }
});

app.get("/cartView", async (req, res) => {
    try {
        const Cart = await cart.find();
        res.status(200).send(Cart); // 200 for success
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to fetch products" });
    }
});


//create api
app.get('/', (req, res) => {
    res.send('Hello World!')
})


const PORT = process.env.PORT || 3011;
app.listen(3011, () => {
    console.log("port is running on 3011")
})  //port is running on 3007
