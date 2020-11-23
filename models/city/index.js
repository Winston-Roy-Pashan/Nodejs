/**
 * Project          : Kassara
 * Module           : City functions File
 * Source filename  : schema.js
 * Description      : This file is to set the schema for the City model related functions.
 * Author           : Sanjana  <sanjana.b@robosoftin.com>
 * Copyright        : Copyright © 2017, Kassara
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */
"use strict";

module.exports = function (schema) {
   // Schema Statics are methods that can be invoked directly by a Model (unlike Schema Methods, which need to be invoked by an instance of a Mongoose document). You assign a Static to a schema by adding the function to the schema's statics object.
    schema.statics.addCity = function (cityData, callback) {
       // self is being used to maintain a reference to the original this even as the context is changing.
        var self = this;
        var city = new self(cityData); 
        //.save method is used to insert the data to the city collection
        city.save(function (err, data) {
            if (err) {
                console.log('city save err:', err);
            }
            callback(err, data);
        });
    }

    schema.statics.getCityById = function (cityId, callback) {
        var self = this; 
        //findById method is used to get the data by _id
        self.findById(cityId).lean().exec(function (err, data) {
            callback(err, data);
        });
    };

    schema.statics.getCity = function (query, callback) {
        var self = this; 
        //findOne method is used to get the data based on query condition
        self.findOne(query).lean().exec(function (err, data) {
            callback(err, data);
        });

    };

    schema.statics.getCitys = function (queryObj, callback) {
        var self = this;
        var dbQuery;
        var query = (queryObj.query) ? queryObj.query : {};
        var options = (queryObj.options) ? queryObj.options : {};
        var selectFields = (queryObj.selectFields) ? queryObj.selectFields : {};
        options.lean = true;
        var populate = (queryObj.populate) ? queryObj.populate : '';
        if (populate) {
            dbQuery = self.find(query, selectFields, options).populate(populate);
        } else {
            dbQuery = self.find(query, selectFields, options);
        }

        dbQuery.exec(function (err, data) {
            self.count(query, function (error, count) {
                if (error) {
                    console.log('error: ', error);
                }
                callback(err, data, count);
            });
        });
    };

    schema.statics.updateCityById = function (cityId, updateQuery, callback) {
        var self = this;
        var options = { new: true };
        self.findByIdAndUpdate(cityId, updateQuery, options, function (err, data) {
            callback(err, data);
        });
    };
    schema.statics.updateCity = function (query, updateQuery, callback) {
        var self = this;
        var options = { new: true };
        self.findOneAndUpdate(query, updateQuery, options, function (err, data) {
            callback(err, data);
        });
    };

    schema.statics.updateCitys = function (queryObj, callback) {
        var self = this;
        var query = (queryObj.query) ? queryObj.query : {};
        var options = (queryObj.options) ? queryObj.options : {};

        var updateQuery = queryObj.updateQuery;
        self.update(query, updateQuery, options, function (err, data) {
            callback(err, data);
        });
    };

    schema.statics.removeCityById = function (cityId, callback) {
        var self = this;
        self.findByIdAndRemove(cityId, function (err, data) {
            callback(err, data);
        });
    }
  
    schema.statics.removeCity = function (query, callback) {
        var self = this;
        self.findOneAndRemove(query, function (err, data) {
            callback(err, data);
        });
    }

    schema.statics.removeCitys = function (query, callback) {
        var self = this;
        options = { multi: true };
        self.remove(query, options, function (err, data) {
            callback(err, data);
        });
    }

    return schema;
}