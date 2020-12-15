/**
 * Project          : Invision
 * Module           : User Controller File
 * Source filename  : User.js
 * Description      : This file defines all the operation for User module.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
"use strict";

const util = require("../utils/util");

module.exports = function (mongoose, utils, config, constants, logger) {

    var Users = mongoose.model('Users');
    var userCtrl = {}

    userCtrl.addUser = async function (req, res) {
        try {
            if (req.user && req.user.userType === 'SuperAdmin') {
                var userObj = {};
                if (req.body.name) {
                    userObj.name = req.body.name;
                }
                if (req.body.email) {
                    userObj.email = req.body.email;
                }
                if (req.body.employeeCode) {
                    userObj.employeeCode = req.body.employeeCode;
                }
                if (req.body.userType) {
                    userObj.userType = req.body.userType;
                }

                console.log("userObj.userType........", userObj.userType)
                if (userObj.userType === 'SuperAdmin') {
                    userObj.password = await utils.generatePassword();
                    var sub = "Congratulations, You are selected as SuperAdmin";
                    var link = "https://projects.invisionapp.com/d/main?origin=v7#/console/20430572/432692886/preview?scrollOffset=0";
                    var intro = ["Username :" + userObj.email, "<br>Password :" + userObj.password, "<br>Please use this credential to login into Invision"];
                    await utils.sendMail(userObj.name, userObj.email, intro, sub, link);
                    userObj.password = await utils.encryptPassword(userObj.password);
                }
                if (userObj.userType === 'Admin') {
                    userObj.isAdmin = 'true';
                    userObj.password = await utils.generatePassword();
                    var sub = "Congratulations, You are selected as Admin";
                    var link = "https://projects.invisionapp.com/d/main?origin=v7#/console/20430572/432692886/preview?scrollOffset=0";
                    var intro = ["Username :" + userObj.email, "<br>Password :" + userObj.password, "<br>Please use this credential to login into Invision"];
                    console.log("intrcution..........", intro);
                    await utils.sendMail(userObj.name, userObj.email, intro, sub, link);
                    userObj.password = await utils.encryptPassword(userObj.password);
                }
                var query = {};
                query.email = req.body.email;
                let userData = await Users.getData(query);
                console.log("user data.........", userData)
                if (userData) {
                    return utils.sendCustomError(req, res, "CONFLICT", "USER_EXISTS")
                } else {
                    let data = await Users.addData(userObj);
                    console.log("________________data", data);
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }


    userCtrl.loginUser = async function (req, res) {
        try {
            var query = {};
            query.email = req.headers.username;
            query.password = await utils.encryptPassword(req.headers.password);
            let data = await Users.getData(query);
            logger.info("user logged in ..", data);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
            } else {
                data.token = await utils.generateBearerToken();
                data.tokenExpiry = await utils.generateExpiryTime();
                data = await Users.updateDataById(data._id, { token: data.token, tokenExpiry: data.tokenExpiry });
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    userCtrl.logoutUser = async function (req, res) {
        try {
            if (req.user) {
                var query = {};
                query.email = req.user.email;
                let data = await Users.getData(query);
                logger.info("user logged out ..", data);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
                } else {
                    data.token = null;
                    data.tokenExpiry = null;
                    data = await Users.updateDataById(data._id, { token: data.token, tokenExpiry: data.tokenExpiry });
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    userCtrl.changePassword = async function (req, res) {
        try {
            var userObj = {};
            userObj.mail = req.user.email;
            if (req.headers.newpassword) {
                userObj.password = req.headers.newpassword;
            }
            userObj.password = await utils.encryptPassword(userObj.password);
            let data = await Users.updateDataById(req.user._id, userObj);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
            } else {
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    userCtrl.sendPasswordUpdateLink = async function (req, res) {
        try {
            var queryObj = {};
            queryObj.query = {};
            queryObj.options = {};

            queryObj.query.email = req.body.email;
            queryObj.selectFields = '-password -token -tokenExpiry';
            console.log("quesyobj...", queryObj)
            let user = await Users.getLists(queryObj);
            console.log("user.......", user)
            if (!user) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "NO_RECORDS");
            } else {
                var subject = "Change Password";
                var passwordUpdateLink = "https://projects.invisionapp.com/share/UVYGK8TWQJZ#/screens/432694629";
                var intro = "UserType :" + user.userType + " <br>Username " + user.email;
                await utils.sendMail(user.name, user.email, intro, subject, passwordUpdateLink);
                return utils.sendResponse(req, res, user, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }
    

    userCtrl.getUser = async function (req, res) {
        try {
            let data = await Users.getDataById(req.params.userId);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
            } else {
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    userCtrl.getUsers = async function (req, res) {
        try {
            var queryObj = {};
            queryObj.query = {};
            if (req.query.name) {
                queryObj.query.name = req.query.name;
            }
            console.log(queryObj)
            queryObj.options = {};
            if (req.query.limit) {
                queryObj.options.limit = JSON.parse(req.query.limit)
            }
            if (req.query.skip) {
                queryObj.options.skip = JSON.parse(req.query.skip);
            }
            if (req.query.sortField && req.query.sortOrder) {
                var sortField = req.query.sortField;
                var sortOrder = req.query.sortOrder;
                queryObj.options.sort = { [`${sortField}`]: JSON.parse(sortOrder) };
            };
            if (req.query.searchText) {
                queryObj.query.name = { $regex: req.query.searchText, $options: 'i' }
            };
            queryObj.selectFields = 'name email userType';
            let data = await Users.getLists(queryObj);
            let count = await Users.getCount(queryObj.query);
            return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS", count);
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    userCtrl.updateUser = async function (req, res) {
        try {
            if (req.user && req.user.userType === 'SuperAdmin') {
                var userObj = {};
                if (req.body.name) {
                    userObj.name = req.body.name;
                }
                if (req.body.email) {
                    userObj.email = req.body.email;
                }
                if (req.body.employeeCode) {
                    userObj.employeeCode = req.body.employeeCode;
                }
                if (req.body.userType) {
                    userObj.userType = req.body.userType;
                }
                let data = await Users.updateDataById(req.params.userId, userObj);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                } else {
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    userCtrl.deleteUser = async function (req, res) {
        try {
            if (req.user && (req.user.userType === 'SuperAdmin' || req.user.userType === 'Admin')) {
                let data = await Users.removeDataById(req.params.userId);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                } else {
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    return userCtrl;
}