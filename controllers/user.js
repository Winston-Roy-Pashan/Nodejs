/**
 * Project          : Kassara
 * Module           : User Controller File
 * Source filename  : user.js
 * Description      : This file defines all the operation for User module.
 * Author           : Sanjana  <sanjana.b@robosoftin.com>
 * Copyright        : Copyright © 2017, Kassara
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";

//Here we’re assigning the functions  we want to export to an exports property on module
module.exports = function (mongoose, utils, config, constants) {

    var Users = mongoose.model('Users');
    var userCtrl = {}
    userCtrl.createUser = function (req, res) {

        //console.log("userbody .............", req.body);
        // eslint-disable-next-line no-var
        var userObj = {};
        if (req.body.name) {
            userObj.name = req.body.name;
        }
        if (req.body.phone) {
            userObj.phone = req.body.phone;
        }
        if (req.body.email) {
            userObj.email = req.body.email;
        }
        if (req.body.password) {
            userObj.password = req.body.password;
        }
        console.log("-------------password", userObj.password);
        userObj.password = utils.encryptPassword(userObj.password);

        console.log("---------------encrypted password", userObj.password);
        // var dec=utils.decryptPassword(userObj.password);
       // console.log("---------------dencrypted password", utils.decryptPassword(userObj.password));
        // console.log("=====req body", req.body);

        var query = {};
        query.name = req.body.name;
        Users.getUser(query, function (err, userData) {
            console.log("userData .............", userData);
            if (userData) {
                return utils.sendCustomError(req, res, "CONFLICT", "CONFLICT", "USER_EXISTS")
            } else {
                Users.addUser(userObj, function (err, data) {
                    if (!err && data) {
                        console.log("------------>Uploaded user file is ", userObj);
                        return utils.sendResponse(req, res, 'SUCCESS', data);
                    }
                    else {
                        return utils.sendDBCallbackErrs(req, res, err, data);
                    }
                });
            }
        })

    }

    userCtrl.loginUser = function (req, res) {
        var query = {};
        query.email = req.body.email;
        query.password = req.body.password;
         console.log("-----------password", query.password)
        query.password = utils.encryptPassword(req.body.password);
         console.log("---------query", query)
        Users.getUser(query, function (err, userData) {
            console.log("userData------------------>", userData)
            if (userData) {
                var payload = {
                    _id: userData._id,
                    exp: utils.generateExpiryTime(),
                   // userType: userData.userType
                };
                console.log("payload.............",payload)
                userData.token = utils.generateToken(payload);
                return utils.sendResponse(req, res,  "SUCCESS",userData);
            } else {
                //Users is our mongoose model.addUser is the function written in index.js of user. All the db related query functions are written in the index.js , function(err,data) is called as callback function where err is always a first argument.
                return utils.sendCustomError(req, res, "HTTP_ERR","HTTP_ERR", "USER_NOT_EXISTS")
            }

        })
    }





    userCtrl.getUser = function (req, res) {
        Users.getUserById(req.params.userId, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });

    }

    userCtrl.getUsers = function (req, res) {

        var queryObj = {};
        queryObj.query = {};

        queryObj.options = {};

        if (req.query.limit) {
            queryObj.options.limit = JSON.parse(req.query.limit)
        }
        if (req.query.skip) {
            queryObj.options.skip = JSON.parse(req.query.skip);
        }
        // queryObj.populate = '';///////////////////////////////////////////////////////////////
        //queryObj.selectFields = 'favCityId';
        //  queryObj.populate = { path: 'category', select: 'name' }

        Users.getUsers(queryObj, function (err, data, count) {
            console.log("err", err, data)
            return utils.dbArrayCallbackHandler(req, res, data, err, count);
        });

    }
    userCtrl.updateUser = function (req, res) {
        var userObj = {};

        if (req.body.name) {
            userObj.name = req.body.name;
        }
        if (req.body.phone) {
            userObj.phone = req.body.phone;
        }
        if (req.body.email) {
            userObj.email = req.body.email;
        }

        Users.updateUserById(req.params.userId, userObj, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });
    }

    userCtrl.deleteUser = function (req, res) {
        Users.removeUserById(req.params.userId, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });
    }

    return userCtrl;
}