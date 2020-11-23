'use strict';
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email:String,
    phone:Number,
    image:{type:String},
    address:String
});

module.exports = mongoose.model('User', UserSchema);