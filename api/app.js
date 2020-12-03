
/**
 * Project          : Invision
 * Source filename  : app.js
 * Description      : App Entry point , which loads all modules.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */

"use strict"; 

require("dotenv").config();

//The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().
var env = process.env.NODE_ENV || "development"; // Node.js exposes the current process’s environment variables to the script as an object called process.env.
var config = require("./configs/config"); //loading config 

// Load  modules
var express = require("express"); //nodejs framework which is used to expose the APIS
var app = express(); //First we invoke the require() function, specifying the name of the module as a string ('express'), and calling the returned object to create an Express application. We can then access the properties and functions of the application object.
//The body-parser package that we’ll use to parse the body of incoming requests.
const bodyParser = require("body-parser");

var passport = require('passport')
app.use(passport.initialize());

const mongoose = require("./configs/mongodb"); //mongodb connection
const constants = require("./configs/constants"); //loading constants
var utils = require("./utils/util"); //loading util file
console.log("Entering environment \"" + env + "\"");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/images", express.static(__dirname + "/uploads"));
var logger = require('logger').createLogger('development.log');
require("./configs/loader")(app, mongoose, utils, config, constants,logger);

app.listen(config.port, function () {
    console.log("Server Listening to port :", config.port);
});

module.exports = app;