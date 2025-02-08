const mongoose = require('mongoose')

var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Department: String,
    Salary: Number
})

var Employee = mongoose.model("emp", schema)
module.exports = Employee