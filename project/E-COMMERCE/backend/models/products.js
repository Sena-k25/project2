const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: String,
    Details: String,
    Price: Number,
    Cat: String,
    Image: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
