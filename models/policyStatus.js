/**
 * Project          : Invision
 * Module           : PolicyStatus model File
 * Source filename  : PolicyStatus.js
 * Description      : This file is to set the schema for the PolicyStatus collection.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
"use strict";

module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    var PolicyStatusSchema = new Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        questionnaireId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Questionnaires'
        },
        policyAccept: {
            type:Boolean,
            default:false
        },
      
        __v: {
            type: Number,
            select: false
        }
    }, { timestamps: true });

    PolicyStatusSchema = require('../utils/db_queries')(PolicyStatusSchema);
    return mongoose.model('PolicyStatus', PolicyStatusSchema);
};