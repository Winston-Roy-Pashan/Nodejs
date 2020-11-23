/**
 * Project          : Kassara
 * Module           : Favourite Controller File
 * Source filename  : favourite.js
 * Description      : This file defines all the operation for Favourite module.
 * Author           : Sanjana  <sanjana.b@robosoftin.com>
 * Copyright        : Copyright © 2017, Kassara
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";

//Here we’re assigning the functions  we want to export to an exports property on module
module.exports = function (mongoose, utils, config, constants) {


    var Favourites = mongoose.model('Favourites');
    var Citys = mongoose.model('Citys');
    var Users = mongoose.model('Users');
    var favouriteCtrl = {}
    favouriteCtrl.createFavourite = function (req, res) {

        console.log("favouritebody .............", req.body);
        // eslint-disable-next-line no-var
        var favouriteObj = {};
        if (req.body.favCityId) {
            favouriteObj.favCityId = req.body.favCityId;
        }
        if (req.body.userid) {
            favouriteObj.userid = req.body.userid;
        }
        var query = {};
        query.favCityId = req.body.favCityId;
        query.userid = req.body.userid;
        //console.log("cityData  id.............", query);
        Citys.getCityById(query.favCityId, function (err, cityData) {
            // console.log("cityData .............", cityData);
            if (cityData == null) {
                return utils.sendCustomError(req, res, "INVALID", "INVALID", "CITY_DOESNT_EXISTS")
            }
            else {
                Users.getUserById(query.userid, function (err, userData) {
                    // console.log("cityData .............", cityData);
                    if (userData == null) {
                        return utils.sendCustomError(req, res, "INVALID", "INVALID", "USER_NOT_EXISTS")
                    }
                    else {
                        Favourites.addFavourite(favouriteObj, function (err, data) {
                            if (!err && data) {
                                console.log("------------>Uploaded favourite file is ", favouriteObj);
                                return utils.sendResponse(req, res, 'SUCCESS', data);
                            }
                            else {
                                return utils.sendDBCallbackErrs(req, res, err, data);
                            }
                        });
                    }
                });
            }
        });
    }

    favouriteCtrl.getFavourite = function (req, res) {
        Favourites.getFavouriteById(req.params.favouriteId, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });

    }

    favouriteCtrl.getFavourites = function (req, res) {

        var queryObj = {};
        queryObj.query = {};

        queryObj.options = {};

        if (req.query.limit) {
            queryObj.options.limit = JSON.parse(req.query.limit)
        }
        if (req.query.skip) {
            queryObj.options.skip = JSON.parse(req.query.skip);
        }
        queryObj.populate = 'favCityId';///////////////////////////////////////////////////////////////
        //queryObj.selectFields = 'favCityId';

        Favourites.getFavourites(queryObj, function (err, data, count) {
            console.log("err", err, data)
            return utils.dbArrayCallbackHandler(req, res, data, err, count);
        });

    }
    favouriteCtrl.updateFavourite = function (req, res) {
        var favouriteObj = {};
        if (req.body.favCityId) {
            favouriteObj.favCityId = req.body.favCityId;
        }
        if (req.body.userid) {
            favouriteObj.userid = req.body.userid;
        }
        Favourites.updateFavouriteById(req.params.favouriteId, favouriteObj, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });
    }

    favouriteCtrl.deleteFavourite = function (req, res) {
        Favourites.removeFavouriteById(req.params.favouriteId, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });
    }

    return favouriteCtrl;
}