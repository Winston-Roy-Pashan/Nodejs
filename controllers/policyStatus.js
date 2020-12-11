/**
 * Project          : Invision
 * Module           : PolicyStatus Controller File
 * Source filename  : PolicyStatus.js
 * Description      : This file defines all the operation for PolicyStatus module.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
"use strict";

const util = require("../utils/util");
var path = require('path');
module.exports = function (mongoose, utils, config, constants, logger) {

    var PolicyStatus = mongoose.model('PolicyStatus');
    var Users = mongoose.model('Users');
    var policyStatusCtrl = {}

    policyStatusCtrl.acceptPolicy = async function (req, res) {
        try {
            console.log("useer type in policyStatus.......", req.user);
            if (req.user && req.user.userType === 'endUser') {

                var policyStatusObj = {};
                if (req.body.questionnaireId) {
                    policyStatusObj.questionnaireId = req.body.questionnaireId;
                }
                policyStatusObj.policyAccept = true;
                var query = {};
                query.userId = req.user._id;
                let policyStatusData = await PolicyStatus.getData(query);
                console.log("policyStatus data.........", policyStatusData)
                if (!policyStatusData) {
                    return utils.sendCustomError(req, res, "CONFLICT", "NO_RECORDS")
                } else {
                    let data = await PolicyStatus.updateDataById(policyStatusData._id, policyStatusObj);
                    console.log("________________data", data);
                    return utils.sendResponse(req, res, data, "SUCCESS", "ACCEPTED");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }
    return policyStatusCtrl;
}