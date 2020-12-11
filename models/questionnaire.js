/**
 * Project          : Invision
 * Module           : Questionnaire model File
 * Source filename  : Questionnaire.js
 * Description      : This file is to set the schema for the Questionnaire collection.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
"use strict";

module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    var QuestionnaireSchema = new Schema({
        adminId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        buttonTitle: {
            type: String
        },
        buttonText: {
            type: String
        },
        checkBoxText: {
            type: String
        },
        selectStartDate: {
            type: Date,
        },
        selectEndDate: {
            type: Date,
        },
        autoReminder: {
            type: Number,
        },
        selectContentFile: {
            type: String
        },
        selectParticipantXLSheet: {
            type: String
        },
        mailBody: {
            type: String
        },
        __v: {
            type: Number,
            select: false
        }
    }, { timestamps: true });

    QuestionnaireSchema = require('../utils/db_queries')(QuestionnaireSchema);
    return mongoose.model('Questionnaires', QuestionnaireSchema);
};