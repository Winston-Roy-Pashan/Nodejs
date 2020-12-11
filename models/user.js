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
            type: String
        },
        email: {
            type: String
        },
        employeeCode: {
            type: String
        },
        userType: {
            type: String,
            default: 'endUser'
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
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