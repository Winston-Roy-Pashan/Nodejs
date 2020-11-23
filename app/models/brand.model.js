'use strict';
const mongoose = require('mongoose');

const BrandSchema = mongoose.Schema({
    name: String,
    category:{ type : mongoose.Schema.Types.ObjectId, ref:'Category'},
    logo:{type:String}
});

module.exports = mongoose.model('Brand', BrandSchema);