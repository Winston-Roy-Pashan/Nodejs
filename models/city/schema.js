/**
 * Project          : NodejsBasics
 * Module           : City model File
 * Source filename  : schema.js
 * Description      : This file is to set the schema for the brand collection.
 * Author           : Likhitha M<likhitha.m@robosoftin.com>
 * Copyright        : Copyright © 2020, NodejsBasics
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";

/**
 * Module dependencies.
 * https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527
 */
/*Mongoose is a JavaScript library that allows you to define schemas with strongly typed data. Once a schema is defined, Mongoose lets you create a Model based on a specific schema. A Mongoose Model is then mapped to a MongoDB Document via the Model's schema definition.

Once you have defined your schemas and models, Mongoose contains many different functions that allow you to validate, save, delete, and query your data using common MongoDB functions.*/
module.exports = function (mongoose) {
    var Schema = mongoose.Schema;


    /*
     * City Schema
     */
    var CitySchema = new Schema({
        name: {
            type: String  
        },
        minTemperature: {
            type: Number 
        },
        maxTemperature: {
            type: Number 
        },
        precipitation: {
            type: Number 
        },
        humidity: {
            type: Number 
        },
        wind: {
            type: Number 
        },
        visibility: {
            type: Number 
        },
        
        
        // isDeleted:{
        //     type: Boolean,
        //     default: false,
        //     select: false
        // },
        createdAt: {
            type: Date,
            select: false
        },
        updatedAt: {
            type: Date,
            select: false
        },
        __v: {
            type: Number,
             select: false
        }
    }, { timestamps: true });

    CitySchema = require('./index.js')(CitySchema);
    return mongoose.model('Citys', CitySchema);
};
