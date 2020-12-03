/**
 * Project          : Invision
 * Module           : User
 * Source filename  : user.js
 * Description      : Api routes for the user.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
const express = require("express");
module.exports = function (app, mongoose, utils, config, constants, upload, logger) {
    var userCtrl = require("../controllers/user")(mongoose, utils, config, constants, logger);
   
    var userRouter = express.Router();

    //api to add user
    userRouter.post("/", upload.single('profilePic'), userCtrl.createUser);

    //api to get user count
    userRouter.get("/getCount", userCtrl.getUsersCount);

   //api to login
    userRouter.post("/login", userCtrl.loginUser);

    //api to edit user data
    userRouter.put("/:userId",upload.single('profilePic'), userCtrl.updateUser);

    //api to list user data
    userRouter.get("/", userCtrl.getUsers);

    //api to get details of user data
    userRouter.get("/:userId", userCtrl.getUser);

    //api to delete details of user data
    userRouter.delete("/:userId", userCtrl.deleteUser);


    app.use("/api/v1/users", userRouter);
};