const mongoose = require("mongoose")

const productSchema = mongoose.Schema({

    "Title": String,
    "Description": String,
    "Price": Number,
    "Quantity" : Number,

})

const Product=mongoose.model("product", productSchema)
module.exports=Product