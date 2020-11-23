'use strict';
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    image:{type:String},
    price:Number,
    quantity:Number,
    features:String,
    brand:{ type : mongoose.Schema.Types.ObjectId, ref:'Brand'}
});

module.exports = mongoose.model('Product', ProductSchema);