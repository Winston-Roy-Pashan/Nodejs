/**
 * Project          : Invision
 * Module           : PolicyStatus
 * Source filename  : PolicyStatus.js
 * Description      : Api routes for the PolicyStatus.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
const express = require("express");
module.exports = function (app, mongoose, utils, config, constants, upload, logger) {
    var policyStatusCtrl = require("../controllers/policyStatus")(mongoose, utils, config, constants, logger);
    var authenticateToken = require("../auth/bearer").isAuthenticated;

    var policyStatusRouter = express.Router();

    //api to save PolicyStatus
    policyStatusRouter.post("/acceptPolicyStatus", authenticateToken, policyStatusCtrl.acceptPolicy);


    app.use("/policy.robosoftin.com/policyStatus", policyStatusRouter);
};