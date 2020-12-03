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

    userCtrl.createUser = async function (req, res) {
        try {
            var userObj = {};
            if (req.body.name) {
                userObj.name = req.body.name;
            }
            if (req.body.email) {
                userObj.email = req.body.email;
            }
            if (req.body.gender) {
                userObj.gender = req.body.gender;
            }
            if (req.body.phone) {
                userObj.phone = req.body.phone;
            }
            if (req.body.Employee_code) {
                userObj.Employee_code = req.body.Employee_code;
            }
            if (req.body.userType) {
                userObj.userType = req.body.userType;
            }
            if (req.body.username) {
                userObj.username = req.body.username;
            }
            if (req.body.password) {
                userObj.password = req.body.password;
            }
            if (req.file && req.file.originalname) {
                userObj.profilePic = req.file.originalname;
            }
            userObj.password = await utils.encryptPassword(userObj.password);

            var query = {};
            query.email = req.body.email;
            let user = await Users.getData(query)
            if (!user) {
                let data = await Users.addData(userObj);
                logger.info("user added..", data);
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            } else {
                return utils.sendCustomError(req, res, "HTTP_ERR", "USER_EXISTS")
            }

        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }


    userCtrl.loginUser = async function (req, res) {
        try {
            var query = {};
            query.username = req.body.username;
            query.password = req.body.password;

            query.password = await utils.encryptPassword(req.body.password);
            let data = await Users.getData(query);
            // console.log("********data", data)
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
            queryObj.options = {

            };
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
            var userObj = {};
            if (req.body.name) {
                userObj.name = req.body.name;
            }
            if (req.body.email) {
                userObj.email = req.body.email;
            }
            if (req.body.gender) {
                userObj.gender = req.body.gender;
            }
            if (req.body.phone) {
                userObj.phone = req.body.phone;
            }
            if (req.body.Employee_code) {
                userObj.Employee_code = req.body.Employee_code;
            }
            if (req.body.userType) {
                userObj.userType = req.body.userType;
            }
            if (req.body.username) {
                userObj.username = req.body.username;
            }
            if (req.body.password) {
                userObj.password = req.body.password;
            }
            if (req.file && req.file.originalname) {
                userObj.profilePic = req.file.originalname;
            }
            userObj.password = await utils.encryptPassword(userObj.password);

            let data = await Users.updateDataById(req.params.userId, userObj);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
            } else {
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }

    userCtrl.deleteUser = async function (req, res) {
        try {
            let data = await Users.removeDataById(req.params.userId);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
            } else {
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }
    userCtrl.getUsersCount = async function (req, res) {
        logger.info("*********")
        try {
            let data = await Users.aggregate([
                {
                    $group: {
                        _id: '$category',
                        count: { $sum: 1 }
                    }
                }


            ]);
            console.log("---data", data)
            logger.info("----data", data)
            return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");

        } catch (error) {
            console.log("------err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }
    return userCtrl;
}