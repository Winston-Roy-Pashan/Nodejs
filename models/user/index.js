/**
 * Project          : Kassara
 * Module           : User functions File
 * Source filename  : schema.js
 * Description      : This file is to set the schema for the User model related functions.
 * Author           : Sanjana  <sanjana.b@robosoftin.com>
 * Copyright        : Copyright © 2017, Kassara
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */
"use strict";

module.exports = function (schema) {
   // Schema Statics are methods that can be invoked directly by a Model (unlike Schema Methods, which need to be invoked by an instance of a Mongoose document). You assign a Static to a schema by adding the function to the schema's statics object.
    schema.statics.addUser = function (userData, callback) {
       // self is being used to maintain a reference to the original this even as the context is changing.
        var self = this;
        var user = new self(userData); 
        //.save method is used to insert the data to the user collection
        user.save(function (err, data) {
            if (err) {
                console.log('user save err:', err);
            }
            callback(err, data);
        });
    }

    schema.statics.getUserById = function (userId, callback) {
        var self = this; 
        //findById method is used to get the data by _id
        self.findById(userId).lean().exec(function (err, data) {
            callback(err, data);
        });
    };

    schema.statics.getUser = function (query, callback) {
        var self = this; 
        //findOne method is used to get the data based on query condition
        self.findOne(query).lean().exec(function (err, data) {
            callback(err, data);
        });

    };

    schema.statics.getUsers = function (queryObj, callback) {
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

    schema.statics.updateUserById = function (userId, updateQuery, callback) {
        var self = this;
        var options = { new: true };
        self.findByIdAndUpdate(userId, updateQuery, options, function (err, data) {
            callback(err, data);
        });
    };
    schema.statics.updateUser = function (query, updateQuery, callback) {
        var self = this;
        var options = { new: true };
        self.findOneAndUpdate(query, updateQuery, options, function (err, data) {
            callback(err, data);
        });
    };

    schema.statics.updateUsers = function (queryObj, callback) {
        var self = this;
        var query = (queryObj.query) ? queryObj.query : {};
        var options = (queryObj.options) ? queryObj.options : {};

        var updateQuery = queryObj.updateQuery;
        self.update(query, updateQuery, options, function (err, data) {
            callback(err, data);
        });
    };

    schema.statics.removeUserById = function (userId, callback) {
        var self = this;
        self.findByIdAndRemove(userId, function (err, data) {
            callback(err, data);
        });
    }
  
    schema.statics.removeUser = function (query, callback) {
        var self = this;
        self.findOneAndRemove(query, function (err, data) {
            callback(err, data);
        });
    }

    schema.statics.removeUsers = function (query, callback) {
        var self = this;
        options = { multi: true };
        self.remove(query, options, function (err, data) {
            callback(err, data);
        });
    }

    return schema;
}