/**
 * Project          : Kassara
 * Module           : City Controller File
 * Source filename  : City.js
 * Description      : This file defines all the operation for City module.
 * Author           : Sanjana  <sanjana.b@robosoftin.com>
 * Copyright        : Copyright © 2017, Kassara
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";

//Here we’re assigning the functions  we want to export to an exports property on module
module.exports = function (mongoose, utils, config, constants) {

    var Citys = mongoose.model('Citys');
    // var recentsearchCtrl = require("../controllers/recentSearch")(mongoose, utils, config, constants);
    var RecentSearchs = mongoose.model('RecentSearchs');
    var cityCtrl = {}
    cityCtrl.createCity = function (req, res) {

        console.log("citybody .............", req.body);
        // eslint-disable-next-line no-var
        var cityObj = {};
        if (req.body.name) {
            cityObj.name = req.body.name;
        }
        // if (req.file && req.file.originalname) {
        //     cityObj.logo = req.file.originalname;
        // }
        if (req.body.minTemperature) {
            cityObj.minTemperature = req.body.minTemperature;
        }
        if (req.body.maxTemperature) {
            cityObj.maxTemperature = req.body.maxTemperature;
        }
        if (req.body.precipitation) {
            cityObj.precipitation = req.body.precipitation;
        }
        if (req.body.humidity) {
            cityObj.humidity = req.body.humidity;
        }
        if (req.body.wind) {
            cityObj.wind = req.body.wind;
        }
        if (req.body.visibility) {
            cityObj.visibility = req.body.visibility;
        }

        console.log("=====req body", req.body);

        var query = {};
        query.name = req.body.name;
        Citys.getCity(query, function (err, cityData) {
            console.log("cityData .............", cityData);
            if (cityData) {
                return utils.sendCustomError(req, res, "CONFLICT", "CONFLICT", "CITY_EXISTS")
            } else {
                Citys.addCity(cityObj, function (err, data) {
                    if (!err && data) {
                        console.log("------------>Uploaded city file is ", cityObj);
                        return utils.sendResponse(req, res, 'SUCCESS', data);
                    }
                    else {
                        return utils.sendDBCallbackErrs(req, res, err, data);
                    }
                });
            }
        })

    }

    cityCtrl.getCity = function (req, res) {
        Citys.getCityById(req.params.cityId, function (err, data) {
            //   recentsearchCtrl.createRecentSearch(req,res, req.params.cityId)
            return utils.dbCallbackHandler(req, res, data, err);
        });

    }

    cityCtrl.getCitys = function (req, res) {

        var queryObj = {};
        queryObj.query = {};

        queryObj.options = {};

        Citys.getCitys(queryObj, function (err, data, count) {
            console.log("err", err, data)
            return utils.dbArrayCallbackHandler(req, res, data, err, count);
        });

    }
    cityCtrl.updateCity = function (req, res) {
        var cityObj = {};

        if (req.body.name) {
            cityObj.name = req.body.name;
        }
        if (req.body.minTemperature) {
            cityObj.minTemperature = req.body.minTemperature;
        }
        if (req.body.maxTemperature) {
            cityObj.maxTemperature = req.body.maxTemperature;
        }
        if (req.body.precipitation) {
            cityObj.precipitation = req.body.precipitation;
        }
        if (req.body.humidity) {
            cityObj.humidity = req.body.humidity;
        }
        if (req.body.wind) {
            cityObj.wind = req.body.wind;
        }
        if (req.body.visibility) {
            cityObj.visibility = req.body.visibility;
        }
        Citys.updateCityById(req.params.cityId, cityObj, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });
    }

    cityCtrl.deleteCity = function (req, res) {
        Citys.removeCityById(req.params.cityId, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });
    }
    cityCtrl.getSearch = function (req, res) {
        console.log("hii search.....")
        //console.log("body.....",req)
        var query = {
            name: req.query.city  //city name
        }
        console.log("body.....", query)

        Citys.getCity(query, function (err, data) {
            console.log("data.....", data)
            if (err || !data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "HTTP_ERR", "CITY_DOESNT_EXISTS")
            } else {
                var searchObj = {
                    cityid: data._id,
                    userid: req.query.user
                }
                RecentSearchs.addRecentSearch(searchObj, function (err, searchData) {});
                return utils.sendResponse(req, res,"SUCCESS",data);
            }

        });
    }



    return cityCtrl;
}