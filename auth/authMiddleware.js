/**
 * Project          : weather
 * Module           : Configuration
 * Source filename  : authMiddleware.js
 * Description      : Middleware function to verify the token
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, weather app
 *                    Written under contract by 99games Pvt. Ltd.
 */
var mongoose = require("mongoose");
var utils = require("../utils/util");
var Users = mongoose.model('Users');
var config = require("../configs/config");


module.exports = function (req, res, next) {

    var token = req.headers['authorization'];
    console.log("token------------------->", token)
    console.log("auth body------------------->", req.body)
    if (token) {
        var decodedData = utils.verifyToken(token);
        console.log("decodedData----------------->", decodedData);
        if(decodedData._id !=req.body.userid){
            console.log("token is not generated for ",req.body.userid)
         return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED");
        }
        if (decodedData && decodedData.exp <= new Date()) {
            return utils.sendCustomError(req, res, "BAD_REQUEST","BAD_REQUEST", "TOKEN_EXPIRED");
        } else {
            var userId = decodedData._id;
            Users.getUserById(userId, function (err, user) {
                console.log("user data...........",user)
                if (err || !user) {
                    return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED");
                } else {
                    req.user = user;
                    next();
                    //return utils.sendCustomError(req, res, "SUCCESS", "SUCCESS", "AUTHERIZED")
                }

            })

        }

    } else {
        return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED");
    }




}