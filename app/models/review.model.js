'use strict';
const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    product:{ type : mongoose.Schema.Types.ObjectId, ref:'Product'},
    title:String,
    description:String,
    rating:Number,
    user:{ type : mongoose.Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Review', ReviewSchema);