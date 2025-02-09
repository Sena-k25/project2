const mongoose = require('mongoose')

var schema = mongoose.Schema({
     userId:String,
     productId:String,
     quantity:Number
});


var Cart = mongoose.model("cart",schema)
module.exports = Cart