const express = require('express');
const router = express.Router();
const Product = require('../models/products');  // Import the Product model
const { verifyToken, isAdmin } = require("../middleware/authMiddleware")
// Add a product
router.post('/add',verifyToken, isAdmin, async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send({ message: "Product Added Successfully" });
    } catch (error) {
        res.status(500).send({ error: "Failed to add product" });
    }
});

// Get all products
router.get('/view',verifyToken, async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch products" });
    }
});
router.delete("/remove/:id",verifyToken, isAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Data Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to delete product" });
    }
});

router.put("/update/:id",verifyToken, isAdmin, async (req,res) => {
    try{
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send({ message: "Update successful", updated });
    }
    catch (error){
        console.log(error)
    }
})
module.exports = router;
