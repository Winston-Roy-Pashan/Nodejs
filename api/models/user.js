/**
 * Project          : Invision
 * Module           : User model File
 * Source filename  : schema.js
 * Description      : This file is to set the schema for the user collection.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
"use strict";

module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        name: {
            type: String,
            required: [true, 'invalid name']
        },
        email: {
            type: String,
            required: [true, 'Please enter your valid email address!!!'],
            unique: true
        },
        gender: {
            type: String
        },
        phone: {
            type: String,
            validate: {
                validator: function (v) {
                    return /\d{10}/.test(v);
                },
                message: props => `${props.value} is not a valid phone number!`
            },
            required: [true, 'User phone number required'],
            unique: true
        },
        Employee_code: {
            type: String,
            required: true
        },
        userType: {
            type: String,
            enum: ['superadmin', 'admin', 'user']
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        profilePic: {
            type: String
        },
        token: {
            type: String
        },
        tokenExpiry: {
            type: Date
        },
        __v: {
            type: Number,
            select: false
        }
    }, { timestamps: true });

    UserSchema = require('../utils/db_queries')(UserSchema);
    return mongoose.model('Users', UserSchema);
};