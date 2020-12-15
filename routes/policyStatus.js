/**
 * Project          : Invision
 * Module           : PolicyStatus
 * Source filename  : PolicyStatus.js
 * Description      : Api routes for the PolicyStatus.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
const express = require("express");
module.exports = function (app, mongoose, utils, config, constants, upload, logger) {
  var policyStatusCtrl = require("../controllers/policyStatus")(mongoose, utils, config, constants, logger);
  var authenticateToken = require("../auth/bearer").isAuthenticated;

  var policyStatusRouter = express.Router();

  //api to Update PolicyStatus
  policyStatusRouter.put("/acceptPolicyStatus", authenticateToken, policyStatusCtrl.acceptPolicy);
  /**
        * @api {put} /policyStatus/acceptPolicyStatus Update PolicyStatus
        * @apiName Update PolicyStatus
        * @apiGroup PolicyStatus
        * @apiDescription API to Update PolicyStatus
        * @apiUse AuthorizationHeader
        * @apiParam {String} questionnaireId questionnaire Id.
        * @apiParamExample {json} Request-Example:
        *    {
              "questionnaireId":"5fd1e62b4cd3c851bd15c2d6"
            }
        *
        * @apiExample {curl} Example usage:
        *     curl -i http://localhost:4000/api/v1/policyStatus/acceptPolicyStatus
        * @apiSampleRequest http://localhost:4000/api/v1/policyStatus/acceptPolicyStatus
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
                      "_id": "5fd1e62b4cd3c851bd15c2d6",
                      "userId": "5fd06e584b311e1b51d3110c",
                      "questionnaireId": "5fd06e584b311e1b51d3110c",
                      "policyAccept":"true",
                      "createdAt": "2020-12-10T09:11:07.361Z",
                      "updatedAt": "2020-12-10T09:11:07.361Z",
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
               "message": "NO_RECORDS",
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
  //pending policy list 

  policyStatusRouter.get("/pendingPolicyStatus", authenticateToken, policyStatusCtrl.getPendingAgreements);
  /**
          * @api {get} /policyStatus/pendingPolicyStatus Pending PolicyStatus
          * @apiName Pending PolicyStatus
          * @apiGroup PolicyStatus
          * @apiDescription API to get pending PolicyStatus
          * @apiUse AuthorizationHeader
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/policyStatus/pendingPolicyStatus
          * @apiSampleRequest http://localhost:4000/api/v1/policyStatus/pendingPolicyStatus
          * @apiSuccessExample Success-Response:
          *     HTTP/1.1 200 OK
          *     {
                "meta": {
                "code": 200,
                "message": "Success",
                "timestamp": "2020-11-12T04:47:52.234Z"
               },
              "pagination": {},
              "data": [
          {
              "_id": "5fd39303a8d5d8306c4aa0ec",
              "policyAccept": false,
              "userId": {
                  "_id": "5fd391849268552ecfd2cc0c",
                  "email": "mail2winstonroy@yahoo.com",
                  "name": "Roy Pashan",
                  "employeeCode": "MNG002"
              },
              "questionnaireId": {
                  "_id": "5fd0709530a434204c3007d5",
                  "title": "Secure coding Guidelines",
                  "description": "these guidelines helps you code...",
                  "selectStartDate": "2020-12-09T18:30:00.000Z",
                  "selectEndDate": "2020-12-20T18:30:00.000Z"
              },
              "createdAt": "2020-12-11T15:40:51.464Z",
              "updatedAt": "2020-12-11T15:50:03.890Z"
          },
          {
              "_id": "5fd83926b66955345c3eaf3d",
              "policyAccept": false,
              "userId": {
                  "_id": "5fd391849268552ecfd2cc0c",
                  "email": "mail2winstonroy@yahoo.com",
                  "name": "Roy Pashan",
                  "employeeCode": "MNG002"
              },
              "questionnaireId": {
                  "_id": "5fd320a7d28d01408a4c4e2a",
                  "title": "ISMS Questionnaire",
                  "description": "these guidelines helps you code...",
                  "selectStartDate": "2020-12-09T18:30:00.000Z",
                  "selectEndDate": "2020-12-15T18:30:00.000Z"
              },
              "createdAt": "2020-12-15T04:18:46.768Z",
              "updatedAt": "2020-12-15T04:18:46.768Z"
          }
      ]
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

  app.use("/api/v1/policyStatus", policyStatusRouter);
};