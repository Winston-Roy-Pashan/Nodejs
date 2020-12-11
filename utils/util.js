/**
 * Project          : Invision
 * Module           : Utilities
 * Source filename  : utility.js
 * Description      : Utility functions for multiple modules.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */

"use strict";
var _ = require("lodash");
var CryptoJS = require("crypto-js");
const { v4: uuidv4 } = require('uuid');
var otpGenerator = require('otp-generator')
var constants = require("./../configs/constants.js");
var config = require("./../configs/config.js");
var fs = require("fs");
var xlsx = require("xlsx");

const CODE = constants.code;
const MSG = constants.text;
var servicePath = config.root + "/services/";
var services = {};
fs.readdirSync(servicePath).forEach(function (file) {
    services[file] = require(servicePath + file);
});
module.exports = {

    notifyError: function (req, res, httpStatus, code, message, extraMsg) {
        console.log("-----httpStatus", httpStatus, '----code', code, '----message', message.errors, '---extraMsg', extraMsg)
        //setting http status code for response      
        httpStatus = (typeof httpStatus === "undefined") ? 400 : CODE[httpStatus];
        if (!code) {
            code = "ERR";
        }
        if (!message) {
            message = "ERR";
        }
        var errorMsg = MSG[message];
        if (extraMsg) {
            errorMsg = extraMsg + " : " + errorMsg;
        }
        if (message.errors) {
            message = message.message
        }
        res.status(httpStatus)
            .json({
                meta: {
                    code: CODE[code],
                    message: message,
                    timestamp: new Date().toISOString()
                }
            });
    },

    sendCustomError: function (req, res, code, message) {
        res.status(CODE[code])
            .json({
                meta: {
                    code: CODE[code],
                    message: MSG[message],
                    timestamp: new Date().toISOString()
                }
            });
    },

    sendAuthError: function (req, res, code, message) {
        res.status(CODE[code])
            .json({
                meta: {
                    code: CODE[code],
                    message: MSG[message],
                    timestamp: new Date().toISOString()
                }
            });
    },

    sendResponse: function (req, res, data, code, message, count) {
        var skip;
        var limit;
        res.status(CODE[code]).json({
            meta: {
                code: CODE[code],
                message: MSG[message],
                timestamp: new Date().toISOString()
            },
            pagination: {
                skip: skip,
                limit: limit,
                totalCount: count
            },
            data: data
        });
    },


    sendDBError: function (req, res, err) {
        if (err && err.code === 11000) {
            return module.exports.sendCustomError(req, res, "CONFLICT", "DB_DUPLICATE", "DB_DUPLICATE");
        } else {
            return module.exports.notifyError(req, res, "HTTP_ERR", "DB_ERR", err);
        }
    },

    sendDBCallbackErrs: function (req, res, err, data) {
        if (err) {
            return module.exports.sendDBError(req, res, err);
        } else {
            if (!data) {
                data = {};
            }
            return module.exports.sendResponse(req, res, "SUCCESS", data, "NO_RECORDS", "NO_RECORDS");
        }
    },

    dbCallbackHandler: function (req, res, data, err) {
        if (!err && data) {
            return module.exports.sendResponse(req, res, "SUCCESS", data);
        } else {
            return module.exports.sendDBCallbackErrs(req, res, err, data);
        }
    },

    encryptPassword: function (password) {
        var ciphertext = CryptoJS.HmacSHA1(password, config.passwordSecret).toString();
        return ciphertext;
    },

    generateExpiryTime: function () {
        var currentDate = new Date();
        var tokenExpiry = new Date(currentDate.setMinutes(currentDate.getMinutes() + config.tokenExpiry));
        return tokenExpiry;

    },

    generateBearerToken: function () {
        return uuidv4();
    },

    generatePassword: function () {
        var otp = otpGenerator.generate(6, { upperCase: true, digits: true, alphabets: true });
        return otp;
    },

    sendMail: function (name, email, intro, subject, link) {
        console.log("Mail sent to successfully to " + name)
        services.email.sendMail(name, email, intro, subject, link, function (err, data) {
            // console.log("err", err, "data", data)
        })
    },
    readexcelsheet: function (filepath) {
        var wb = xlsx.readFile(filepath);
        var ws = wb.Sheets["Sheet1"];
        var data = xlsx.utils.sheet_to_json(ws);
        return data;
    }

}
