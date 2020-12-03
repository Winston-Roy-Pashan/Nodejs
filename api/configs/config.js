/**
  * Project         : Invision
 * Module           : Configuration
 * Source filename  : config.js
 * Description      : Environment related configuration variables
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */

"use strict";

var _ = require("lodash");

var config = {
    local: {
        mongo: {
            dbURL: process.env.MONGO_URL,
            options: {
                
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        passwordSecret: process.env.PASSWORD_SECRET,
        tokenExpiry: 60
    },

    development: {
        mongo: {
            dbURL: process.env.MONGO_URL,
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        passwordSecret: process.env.PASSWORD_SECRET,
        tokenExpiry: 60
    },

    staging: {
        mongo: {
            dbURL:process.env.MONGO_URL,
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        passwordSecret: process.env.PASSWORD_SECRET,
        jwtTokenSecret: process.env.JWT_SECRET,
        tokenExpiry: 60
    },
    production: {
        mongo: {
            dbURL: process.env.MONGO_URL,
            options: {
                db: {
                    native_parser: true
                },
                user: process.env.MONGODBAuthUser,
                pass: process.env.MONGODBAuthPass,
                auth: {
                    authdb: "admin"
                }
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        passwordSecret: process.env.PASSWORD_SECRET,
        jwtTokenSecret: process.env.JWT_SECRET,
        tokenExpiry: 60
    }
};

module.exports = (function () {
    var env = process.env.NODE_ENV || "development";
    return _.merge(config[env]);
})();
