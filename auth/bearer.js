/**
 * Project          : Invision
 * Module           : Configuration
 * Source filename  : bearer.js
 * Description      : Middleware function to verify the token
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games Pvt. Ltd.
 */
var passport = require("passport");
var BearerStrategy = require("passport-http-bearer").Strategy;
var mongoose = require("mongoose");
var Users = mongoose.model("Users");
var config = require("../configs/config");

passport.use(new BearerStrategy(
    async function (token, done) {
        try {
            console.log("-----------token", token);
            var queryObj = {
                token: token,
                tokenExpiry: { $gte: new Date() }
            };

            let user = await Users.getData(queryObj);
            if (!user) {
                return done(null, false);
            }
            return done(null, user)

        } catch (error) {
            return done(error);
        }


    }
));

exports.isAuthenticated = passport.authenticate('bearer', { session: false });