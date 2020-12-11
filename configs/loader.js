/**
  * Project         : Invision
 * Module           : Loader
 * Source filename  : loader.js
 * Description      : Loading all models and routes.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
"use strict";

var fs = require("fs");
var multer = require('multer');
module.exports = function (app, mongoose, utils, config, constants, logger, upload) {

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname + '/../uploads');
        },
        filename: function (req, file, cb) {
            let fileName = file.originalname;
            cb(null, fileName);
        }
    });

    var upload = multer({ storage: storage });


    var modelPath = config.root + "/models";
    var routePath = config.root + "/routes";

    fs.readdirSync(modelPath).forEach(function (file) {
        console.log("Loading model : " + file);
        require(modelPath + "/" + file)(mongoose, utils);
    });

    fs.readdirSync(routePath).forEach(function (file) {
        console.log("Loading routes : " + file);
        require(routePath + "/" + file)(app, mongoose, utils, config, constants, upload, logger);
    });
};