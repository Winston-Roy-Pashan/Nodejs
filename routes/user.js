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
    var authenticateToken = require("../auth/bearer").isAuthenticated;

    var userRouter = express.Router();

    /**
* @apiDefine AuthorizationHeader
*
* @apiHeader {String} Authorization Bearer token obtained through login
*
* @apiHeaderExample {json} Header-Example:
*     {
*       "Authorization": "Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab"
*     }
*/
    //api to list user data
    userRouter.get("/", userCtrl.getUsers);
    /**
      * @api {get} /users/  Get all users
      * @apiName All users
      * @apiGroup Users
      * @apiDescription API to get all users
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data":[ {
            "_id": "5facbe780e43085622fe5c82",
            "name":"Kevin",
            "email":"Kevin.123@99games.in",
            "password":"2erw43redfd56egtegdhhd67e7e",
            "employeeCode":"SA001",
            "userType":"SuperAdmin"
            "createdAt": "2020-11-12T04:47:52.199Z",
            "updatedAt": "2020-11-12T04:47:52.199Z",
            "__v": 0
          },
          {
            "_id": "5facbe780e43085622fe5c87",
            "name":"John",
            "email":"John.123@99games.in",
            "password":"2erw43redfd56egtegdhhd67e7e",
            "employeeCode":"AD001",
            "userType":"Admin"
            "createdAt": "2020-11-12T04:47:52.199Z",
            "updatedAt": "2020-11-12T04:47:52.199Z",
            "__v": 0
          },
          {
            "_id": "5facbe780e43085622fe5c83",
            "name":"David",
            "email":"David.123@99games.in",
            "password":"2erw43redfd56egtegdhhd67e7e",
            "employeeCode":"MNG001",
            "userType":"endUser"
            "createdAt": "2020-11-12T04:47:52.199Z",
            "updatedAt": "2020-11-12T04:47:52.199Z",
            "__v": 0
          }
        ]
        }
      *
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 500 Bad Request
      *    {
             "meta": {
             "code": 500,
             "message": "Error in  Database",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */
    //api to get details of user data
    userRouter.get("/:userId", userCtrl.getUser);
    /**
      * @api {get} /users/:userId  Get all user based on Id
      * @apiName Get user
      * @apiGroup Users
      * @apiDescription API to get user based on Id
      * @apiParam {String} id User Id.
      * @apiParamExample {json} Request-Example:
      *    {
          "_id": "5facbe780e43085622fe5c82"
          }
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users/:userId
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/:userId
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data": {
            "_id": "5facbe780e43085622fe5c82",
            "name":"Kevin",
            "email":"Kevin.123@99games.in",
            "password":"2erw43redfd56egtegdhhd67e7e",
            "employeeCode":"SA001",
            "userType":"SuperAdmin"
            "createdAt": "2020-11-12T04:47:52.199Z",
            "updatedAt": "2020-11-12T04:47:52.199Z",
            "__v": 0
          }
        }
      *
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 500 Bad Request
      *    {
             "meta": {
             "code": 500,
             "message": "Error in  Database",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */
    //api to delete details of user data
    userRouter.delete("/:userId", authenticateToken, userCtrl.deleteUser);
    /**
      * @api {delete} /users/:userId   Delete user based on Id
      * @apiName Delete user
      * @apiGroup Users
      * @apiDescription API to Delete user based on Id
      * @apiParam {String} id User Id.
      * @apiParamExample {json} Request-Example:
      *    {
          "_id": "5facbe780e43085622fe5c82"
          }
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users/:userId
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/:userId
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data": {
            "_id": "5facbe780e43085622fe5c82",
            "name":"Kevin",
            "email":"Kevin.123@99games.in",
            "password":"2erw43redfd56egtegdhhd67e7e",
            "employeeCode":"SA001",
            "userType":"SuperAdmin"
            "createdAt": "2020-11-12T04:47:52.199Z",
            "updatedAt": "2020-11-12T04:47:52.199Z",
            "__v": 0
          }
        }
      *
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 500 Bad Request
      *    {
             "meta": {
             "code": 500,
             "message": "Error in  Database",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */





    //api to add superAdmin
    userRouter.post("/addSuperAdmin", authenticateToken, userCtrl.addUser);
    /**
  * @api {post} /users/addSuperAdmin Add SuperAdmin
  * @apiName AddSuperAdmin
  * @apiGroup Users
  * @apiDescription API to Add SuperAdmin
  * @apiUse AuthorizationHeader
  * @apiParam {String} name SuperAdmin Name.
  * @apiParam {String} email SuperAdmin Email.
  * @apiParam {String} employeeCode SuperAdmin employeeCode.
  * @apiParam {String} userType SuperAdmin userType.
  * @apiParamExample {json} Request-Example:
  *    {
      "name":"Kevin",
      "email":"Kevin.123@99games.in",
      "employeeCode":"SA001",
      "userType":"SuperAdmin"
      }
  *
  * @apiExample {curl} Example usage:
  *     curl -i http://localhost:4000/policy.robosoftin.com/users/addSuperAdmin
  * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/addSuperAdmin
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
        "meta": {
        "code": 200,
        "message": "Success",
        "timestamp": "2020-11-12T04:47:52.234Z"
       },
      "pagination": {},
      "data": {
        "_id": "5facbe780e43085622fe5c82",
        "name":"Kevin",
        "email":"Kevin.123@99games.in",
        "password":"2erw43redfd56egtegdhhd67e7e",
        "employeeCode":"SA001",
        "userType":"SuperAdmin"
        "createdAt": "2020-11-12T04:47:52.199Z",
        "updatedAt": "2020-11-12T04:47:52.199Z",
        "__v": 0
      }
    }
  *
   
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
        "meta": {
        "code": 400,
        "message": "User Already Exists",
        "timestamp": "2020-11-12T04:49:00.959Z"
       }
      }
      * @apiErrorExample Error-Response:
  *     HTTP/1.1 500 Bad Request
  *    {
         "meta": {
         "code": 500,
         "message": "Error in  Database",
         "timestamp": "2020-11-12T09:47:19.345Z"
     }
 }
 }
  */
    //api to add Admin
    userRouter.post("/addAdmin", authenticateToken, userCtrl.addUser);
    /**
      * @api {post} /users/addAdmin Add Admin
      * @apiName AddAdmin
      * @apiGroup Users
      * @apiDescription API to Add Admin
      * @apiUse AuthorizationHeader
      * @apiParam {String} name Admin Name.
      * @apiParam {String} email Admin Email.
      * @apiParam {String} employeeCode Admin employeeCode.
      * @apiParam {String} userType Admin userType.
      * @apiParamExample {json} Request-Example:
      *    {
          "name":"winston",
          "email":"winston.123@99games.in",
          "employeeCode":"SA001",
          "userType":"Admin"
          }
      *
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users/addAdmin
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/addAdmin
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data": {
            "_id": "5facbe780e43085622fe5c82",
            "name":"winston",
            "email":"winston.123@99games.in",
            "password":"2erw43redfd56egtegdhhd67e7e",
            "employeeCode":"SA001",
            "userType":"Admin"
            "isAdmin":"true",
            "createdAt": "2020-11-12T04:47:52.199Z",
            "updatedAt": "2020-11-12T04:47:52.199Z",
            "__v": 0
          }
        }
      *
       
      *
      * @apiErrorExample Error-Response:
      *     HTTP/1.1 400 Bad Request
      *     {
            "meta": {
            "code": 400,
            "message": "User Already Exists",
            "timestamp": "2020-11-12T04:49:00.959Z"
           }
          }
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 500 Bad Request
      *    {
             "meta": {
             "code": 500,
             "message": "Error in  Database",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */

    //api to login
    userRouter.post("/login", userCtrl.loginUser);
    /**
      * @api {post} /users/login Login User
      * @apiName Login
      * @apiGroup Users
      * @apiDescription API to User Login
      * @apiHeader {String} username User Email.
      * @apiHeader {String} password User password.
      * @apiHeaderExample {json} Request-Example:
      *    {
          "username":"winston.123@99games.in",
          "password":"6765ggf"
          }
      *
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users/login
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/login
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data": {
           "userType": "Admin",
            "isAdmin": true,
            "_id": "5fd06e584b311e1b51d3110c",
            "name": "Winston Roy",
            "email": "pashanwinsty1998@gmail.com",
            "employeeCode": "AD002",
            "password": "bebfa51272db59813f689192241116f07a6ce49c",
            "createdAt": "2020-12-09T06:27:36.304Z",
            "updatedAt": "2020-12-10T04:49:06.075Z",
            "token": "bb98a320-c3f2-4f0c-b91f-7b9aef83f86e",
            "tokenExpiry": "2020-12-10T05:49:06.074Z"
          }
        }
      *
       
      *
      * @apiErrorExample Error-Response:
      *     HTTP/1.1 400 Bad Request
      *     {
            "meta": {
            "code": 400,
            "message": "USER_NOT_EXISTS",
            "timestamp": "2020-11-12T04:49:00.959Z"
           }
          }
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 500 Bad Request
      *    {
             "meta": {
             "code": 500,
             "message": "Error in  Database",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */
    //api to logout

    //api to change password
    userRouter.post("/changePassword", authenticateToken, userCtrl.changePassword);
    /**
      * @api {post} /users/login  User change password
      * @apiName change password
      * @apiGroup Users
      * @apiDescription API to User change password
      * @apiUse AuthorizationHeader
      * @apiHeader {String} password User newpassword.
      * @apiHeaderExample {json} Request-Example:
      *    {
          "password":"qwer45"
          }
      *
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users/changePassword
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/changePassword
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data": {
           "userType": "Admin",
            "isAdmin": true,
            "_id": "5fd06e584b311e1b51d3110c",
            "name": "Winston Roy",
            "email": "pashanwinsty1998@gmail.com",
            "employeeCode": "AD002",
            "password": "bebfa51272db59813f689192241116f07a6ce49c",
            "createdAt": "2020-12-09T06:27:36.304Z",
            "updatedAt": "2020-12-10T04:49:06.075Z",
            "token": "bb98a320-c3f2-4f0c-b91f-7b9aef83f86e",
            "tokenExpiry": "2020-12-10T05:49:06.074Z"
          }
        }
      *
       
      *
      * @apiErrorExample Error-Response:
      *     HTTP/1.1 400 Bad Request
      *     {
            "meta": {
            "code": 400,
            "message": "USER_NOT_EXISTS",
            "timestamp": "2020-11-12T04:49:00.959Z"
           }
          }
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 500 Bad Request
      *    {
             "meta": {
             "code": 500,
             "message": "Error in  Database",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */
    //API to change password for End User
    userRouter.post("/sendPasswordUpdateLink", userCtrl.sendPasswordUpdateLink);
    /**
      * @api {post} /users/sendPasswordUpdateLink  sendPasswordUpdateLink 
      * @apiName change password
      * @apiGroup Users
      * @apiDescription API to Send password updataion link to user
      * @apiParams {String} email User email.
      * @apiParamsExample {json} Request-Example:
      *    {
          "email":"winston.pashan67@99games.com"
          }
      *
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users/sendPasswordUpdateLink
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/sendPasswordUpdateLink
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data": {
                "_id": "5fd06e584b311e1b51d3110c",
                "userType": "Admin",
                "isAdmin": true,
                "name": "Winston Roy",
                "email": "winston1998@gmail.com",
                "employeeCode": "AD002",
                "createdAt": "2020-12-09T06:27:36.304Z",
                "updatedAt": "2020-12-10T04:49:06.075Z"
          }
        }
      *
       
      *
      * @apiErrorExample Error-Response:
      *     HTTP/1.1 400 Bad Request
      *     {
            "meta": {
            "code": 400,
            "message": "NO_RECORDS",
            "timestamp": "2020-11-12T04:49:00.959Z"
           }
          }
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 400 Bad Request
      *    {
             "meta": {
             "code": 400,
             "message": "HTTP_ERR",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */
    //api to edit admin data
    userRouter.put("/addAdmin/:userId", authenticateToken, userCtrl.updateUser);
    /**
      * @api {put} /users/addAdmin/:userId Update Admin Data
      * @apiName UpdateAdmin
      * @apiGroup Users
      * @apiDescription API to Update Admin
      * @apiUse AuthorizationHeader
      * @apiParam {String} name Admin Name.
      * @apiParam {String} email Admin Email.
      * @apiParam {String} employeeCode Admin employeeCode.
      * @apiParam {String} userType Admin userType.
      * @apiParamExample {json} Request-Example:
      *    {
          "name":"Kevin",
          "email":"Kevin.123@99games.in",
          "employeeCode":"SA001",
          "userType":"Admin"
          }
      *
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users/addAdmin/:userId
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/addAdmin/:userId
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data": {
            "_id": "5facbe780e43085622fe5c82",
            "name":"Kevin",
            "email":"Kevin.123@99games.in",
            "password":"2erw43redfd56egtegdhhd67e7e",
            "employeeCode":"SA001",
            "userType":"Admin"
            "createdAt": "2020-11-12T04:47:52.199Z",
            "updatedAt": "2020-11-12T04:47:52.199Z",
            "__v": 0
          }
        }
      *
       
      *
      * @apiErrorExample Error-Response:
      *     HTTP/1.1 400 Bad Request
      *     {
            "meta": {
            "code": 400,
            "message": "User Already Exists",
            "timestamp": "2020-11-12T04:49:00.959Z"
           }
          }
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 500 Bad Request
      *    {
             "meta": {
             "code": 500,
             "message": "Error in  Database",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */
    //api to edit superadmin data
    userRouter.put("/addSuperAdmin/:userId", authenticateToken, userCtrl.updateUser);
    /**
      * @api {put} /users/addSuperAdmin/:userId Update Super Admin Data
      * @apiName UpdateSuperAdmin
      * @apiGroup Users
      * @apiDescription API to Update SuperAdmin
      * @apiUse AuthorizationHeader
      * @apiParam {String} name SuperAdmin Name.
      * @apiParam {String} email SuperAdmin Email.
      * @apiParam {String} employeeCode SuperAdmin employeeCode.
      * @apiParam {String} userType SuperAdmin userType.
      * @apiParamExample {json} Request-Example:
      *    {
          "name":"Kevin",
          "email":"Kevin.123@99games.in",
          "employeeCode":"SA001",
          "userType":"SuperAdmin"
          }
      *
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users/addSuperAdmin/:userId
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/addSuperAdmin/:userId
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data": {
            "_id": "5facbe780e43085622fe5c82",
            "name":"Kevin",
            "email":"Kevin.123@99games.in",
            "password":"2erw43redfd56egtegdhhd67e7e",
            "employeeCode":"SA001",
            "userType":"SuperAdmin"
            "createdAt": "2020-11-12T04:47:52.199Z",
            "updatedAt": "2020-11-12T04:47:52.199Z",
            "__v": 0
          }
        }
      *
       
      *
      * @apiErrorExample Error-Response:
      *     HTTP/1.1 400 Bad Request
      *     {
            "meta": {
            "code": 400,
            "message": "User Already Exists",
            "timestamp": "2020-11-12T04:49:00.959Z"
           }
          }
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 500 Bad Request
      *    {
             "meta": {
             "code": 500,
             "message": "Error in  Database",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */

    userRouter.post("/logout", authenticateToken, userCtrl.logoutUser);
    /**
      * @api {post} /users/logout user Logout
      * @apiName Logout
      * @apiGroup Users
      * @apiDescription API to User Logout
      *  @apiUse AuthorizationHeader
      * @apiExample {curl} Example usage:
      *     curl -i http://localhost:4000/policy.robosoftin.com/users/logout
      * @apiSampleRequest http://localhost:4000/policy.robosoftin.com/users/logout
      * @apiSuccessExample Success-Response:
      *     HTTP/1.1 200 OK
      *     {
            "meta": {
            "code": 200,
            "message": "Success",
            "timestamp": "2020-11-12T04:47:52.234Z"
           },
          "pagination": {},
          "data": {
           "userType": "Admin",
            "isAdmin": true,
            "_id": "5fd06e584b311e1b51d3110c",
            "name": "Winston Roy",
            "email": "pashanwinsty1998@gmail.com",
            "employeeCode": "AD002",
            "password": "bebfa51272db59813f689192241116f07a6ce49c",
            "createdAt": "2020-12-09T06:27:36.304Z",
            "updatedAt": "2020-12-10T04:49:06.075Z",
            "token": null,
            "tokenExpiry": null
          }
        }
      *
       
      *
      * @apiErrorExample Error-Response:
      *     HTTP/1.1 400 Bad Request
      *     {
            "meta": {
            "code": 400,
            "message": "USER_NOT_EXISTS",
            "timestamp": "2020-11-12T04:49:00.959Z"
           }
          }
          * @apiErrorExample Error-Response:
      *     HTTP/1.1 500 Bad Request
      *    {
             "meta": {
             "code": 500,
             "message": "Error in  Database",
             "timestamp": "2020-11-12T09:47:19.345Z"
         }
     }
     }
      */


    app.use("/policy.robosoftin.com/users", userRouter);
};