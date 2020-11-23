/**
 * Project          : Kassara
 * Module           : RecentSearch Controller File
 * Source filename  : recentsearch.js
 * Description      : This file defines all the operation for RecentSearch module.
 * Author           : Sanjana  <sanjana.b@robosoftin.com>
 * Copyright        : Copyright © 2017, Kassara
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */

"use strict";

//Here we’re assigning the functions  we want to export to an exports property on module
module.exports = function (mongoose, utils, config, constants) {

    var RecentSearchs = mongoose.model('RecentSearchs');
    // var Citys = mongoose.model('Citys');
    var recentsearchCtrl = {}
    // recentsearchCtrl.createRecentSearch = function (req, res) {

    //    // console.log("recentsearchbody .............", recent);
    //     // eslint-disable-next-line no-var
    //    // var recentsearchObj = {};
    //    // if (recent) {
    //     //     recentsearchObj.cityId = recent;
    //     //     console.log("=====req body", req.body);
    //     //   console.log("recentsearchbody .............", recentsearchObj);
    //         var query = {};
    //         query.cityId = recent;
    //         Citys.getCityById(query.favCityId, function (err, cityData) {
    //             // console.log("cityData .............", cityData);
    //             if (cityData == null) {
    //                 return utils.sendCustomError(req, res, "INVALID", "INVALID", "CITY_DOESNT_EXISTS")
    //             } else {
    //                 RecentSearchs.addRecentSearch(recentsearchObj, function (err, data) {
    //                     if (!err && data) {
    //                         console.log("------------>Uploaded recentsearch file is ", recentsearchObj);
    //                         return utils.sendResponse(req, res, 'SUCCESS', data);
    //                     }
    //                     else {
    //                         return utils.sendDBCallbackErrs(req, res, err, data);
    //                     }
    //                 });
    //             }
    //         })
    //   //  }
    // }
    recentsearchCtrl.createRecentSearch = function (req, res) {

        console.log("recentsearchbody .............", req.body);
        // eslint-disable-next-line no-var
        var recentsearchObj = {};
        if (req.body.city) {
            recentsearchObj.cityname = req.body.city;
        }
        if (req.body.user) {
            recentsearchObj.userid = req.body.user;
        }

        console.log("=====req body", req.body);

      //  var query = {};
     //   query.name = req.body.name;
      //  RecentSearchs.getRecentSearch(query, function (err, recentsearchData) {
        //    console.log("recentsearchData .............", recentsearchData);
          //  if (recentsearchData) {
             //   return utils.sendCustomError(req, res, "CONFLICT", "CONFLICT", "CITY_EXISTS")
          //  } else {
                RecentSearchs.addRecentSearch(recentsearchObj, function (err, data) {
                    console.log("------------>Uploaded recentsearch file is ", recentsearchObj);
                    if (!err && data) {
                        
                        return utils.sendResponse(req, res, 'SUCCESS', data);
                    }
                    else {
                        return utils.sendDBCallbackErrs(req, res, err, data);
                    }
                });
           // }
       // })


    }
    recentsearchCtrl.getRecentSearch = function (req, res) {
        RecentSearchs.getRecentSearchById(req.params.recentsearchId, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });

    }

    recentsearchCtrl.getRecentSearchs = function (req, res) {

        var queryObj = {};
        queryObj.query = {};

        queryObj.options = {};

        if (req.query.limit) {
            queryObj.options.limit = JSON.parse(req.query.limit)
        }
        if (req.query.skip) {
            queryObj.options.skip = JSON.parse(req.query.skip);
        }
        queryObj.populate = 'cityid userid';
       // queryObj.populate = 'userid';///////////////////////////////////////////////////////////////
        //queryObj.selectFields = 'favCityId';

        RecentSearchs.getRecentSearchs(queryObj, function (err, data, count) {
            console.log("err", err, data)
            return utils.dbArrayCallbackHandler(req, res, data, err, count);
        });

    }
    recentsearchCtrl.updateRecentSearch = function (req, res) {
        var recentsearchObj = {};

        if (req.body.name) {
            recentsearchObj.name = req.body.name;
        }
        if (req.body.minTemperature) {
            recentsearchObj.minTemperature = req.body.minTemperature;
        }
        if (req.body.maxTemperature) {
            recentsearchObj.maxTemperature = req.body.maxTemperature;
        }
        if (req.body.precipitation) {
            recentsearchObj.precipitation = req.body.precipitation;
        }
        if (req.body.humidity) {
            recentsearchObj.humidity = req.body.humidity;
        }
        if (req.body.wind) {
            recentsearchObj.wind = req.body.wind;
        }
        if (req.body.visibility) {
            recentsearchObj.visibility = req.body.visibility;
        }
        RecentSearchs.updateRecentSearchById(req.params.recentsearchId, recentsearchObj, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });
    }

    recentsearchCtrl.deleteRecentSearch = function (req, res) {
        RecentSearchs.removeRecentSearchById(req.params.recentsearchId, function (err, data) {
            return utils.dbCallbackHandler(req, res, data, err);
        });
    }

    return recentsearchCtrl;
}