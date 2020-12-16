/**
 * Project          : Invision
 * Module           : Questionnaire
 * Source filename  : Questionnaire.js
 * Description      : Api routes for the Questionnaire.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
const express = require("express");
module.exports = function (app, mongoose, utils, config, constants, upload, logger) {
    var questionnaireCtrl = require("../controllers/questionnaire")(mongoose, utils, config, constants, logger);
    var authenticateToken = require("../auth/bearer").isAuthenticated;

    var questionnaireRouter = express.Router();

    questionnaireRouter.get("/remindQuestionnaire", questionnaireCtrl.remindQuestionnaire);


    //api to save Questionnaire
    questionnaireRouter.post("/addQuestionnaire", authenticateToken, questionnaireCtrl.addQuestionnaire);
    /**
          * @api {post} /questionnaires/addQuestionnaire save Questionnaire
          * @apiName save Questionnaire
          * @apiGroup Questionnaire
          * @apiDescription API to save Questionnaire
          * @apiUse AuthorizationHeader
          * @apiParam {String} title Questionnaire title.
          * @apiParam {String} description Questionnaire description.
          * @apiParam {String} buttonTitle buttonTitle.
          * @apiParam {String} buttonText buttonTitle.
          * @apiParam {String} checkBoxText Questionnaire checkBoxText.
          * @apiParam {String} selectStartDate selectStartDate.
          * @apiParam {String} selectEndDate selectEndDate.
          * @apiParam {String} autoReminder autoReminder.
          * @apiParam {String} selectContentFile selectContentFile.
          * @apiParam {String} description Admin Email.
          * @apiParam {String} selectParticipantXLSheet selectParticipantXLSheet.
          * 
          * @apiParamExample {json} Request-Example:
          *    {
                "title": "ISMS Questionnaire",
                "description": "these guidelines helps you code...",
                "buttonTitle": "I Accept",
                "buttonText": "I have read the guidelines",
                "checkBoxText": "I have read the guidelines",
                "selectStartDate": "2020/08/17",
                "selectEndDate": "2020/08/20",
                "autoReminder": 4,
                "selectContentFile": "IsmsQuestionnaire.ppt",
                "selectParticipantXLSheet": "Participant.xls",
                "mailBody":  "hello , your invited to read and accept the terms and conditions by clicking below link"
              }
          *
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/addQuestionnaire
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/addQuestionnaire
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
                        "adminId": "5fd06e584b311e1b51d3110c",
                        "title": "MS Questionnaire",
                        "description": "these guidelines helps you code...",
                        "buttonTitle": "I Accept",
                        "buttonText": "I have read the guidelines",
                        "checkBoxText": "I have read the guidelines",
                        "selectStartDate": "2020-08-16T18:30:00.000Z",
                        "selectEndDate": "2020-08-19T18:30:00.000Z",
                        "autoReminder": 4,
                        "selectContentFile": "IsmsQuestionnaire.ppt",
                        "selectParticipantXLSheet": "Participant.xls",
                        "mailBody": "hello , your invited to read and accept the terms and conditions by clicking below link",
                        "createdAt": "2020-12-10T09:11:07.361Z",
                        "updatedAt": "2020-12-10T09:11:07.361Z",
            "__v": 0
              }
            }
          *
           
          *
          * @apiErrorExample Error-Response:
          *     HTTP/1.1 409 Bad Request
          *     {
                "meta": {
                "code": 409,
                "message": " Entered Questionnaire Already Exists",
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
    //api to get questionnaire 
    questionnaireRouter.get("/getQuestionnaire", authenticateToken, questionnaireCtrl.getQuestionnaires);
    /**
          * @api {get} /questionnaires/getQuestionnaire Get Questionnaire
          * @apiName get Questionnaire
          * @apiGroup Questionnaire
          * @apiDescription API to Get Questionnaire
          * @apiUse AuthorizationHeader
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/getQuestionnaire
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/getQuestionnaire
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
                        "_id": "5fd1e62b4cd3c851bd15c2d6",
                        "adminId": "5fd06e584b311e1b51d3110c",
                        "title": "ISMS Questionnaire",
                        "description": "these guidelines helps you code...",
                        "buttonTitle": "I Accept",
                        "buttonText": "I have read the guidelines",
                        "checkBoxText": "I have read the guidelines",
                        "selectStartDate": "2020-08-16T18:30:00.000Z",
                        "selectEndDate": "2020-08-19T18:30:00.000Z",
                        "autoReminder": 4,
                        "selectContentFile": "IsmsQuestionnaire.ppt",
                        "selectParticipantXLSheet": "Participant.xls" ,
                        "createdAt": "2020-12-10T09:11:07.361Z",
                        "updatedAt": "2020-12-10T09:11:07.361Z",
                        "__v": 0
                    },
                    {
                        "_id": "5fd1e62b4cd3c851bd15c2d6",
                        "adminId": "5fd06e584b311e1b51d3110c",
                        "title": "MS Questionnaire",
                        "description": "these guidelines helps you code...",
                        "buttonTitle": "I Accept",
                        "buttonText": "I have read the guidelines",
                        "checkBoxText": "I have read the guidelines",
                        "selectStartDate": "2020-08-16T18:30:00.000Z",
                        "selectEndDate": "2020-08-19T18:30:00.000Z",
                        "autoReminder": 4,
                        "selectContentFile": "IsmsQuestionnaire.ppt",
                        "selectParticipantXLSheet": "Participant.xls",
                        "createdAt": "2020-12-10T09:11:07.361Z",
                        "updatedAt": "2020-12-10T09:11:07.361Z",
                        "__v": 0
                    }
                ]
            }
          *
           
          *
          * @apiErrorExample Error-Response:
          *     HTTP/1.1 404 Bad Request
          *     {
                "meta": {
                "code": 404,
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

    questionnaireRouter.post("/previewQuestionnaire", authenticateToken, questionnaireCtrl.previewQuestionnaires);
    /**
          * @api {post} /questionnaires/previewQuestionnaire Preview Questionnaire
          * @apiName Preview Questionnaire
          * @apiGroup Questionnaire
          * @apiDescription API to Preview Questionnaire
          * @apiUse AuthorizationHeader
          * @apiParam {string} questionnaireId questionnaire Id
          * @apiParamExample {json} Request-Example:
     *    {
     *         "questionnaireId":"5fd1e62b4cd3c851bd15c2d6"
     *     }
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/previewQuestionnaire
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/previewQuestionnaire
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
                        "adminId": "5fd06e584b311e1b51d3110c",
                        "title": "ISMS Questionnaire",
                        "description": "these guidelines helps you code...",
                        "buttonTitle": "I Accept",
                        "buttonText": "I have read the guidelines",
                        "checkBoxText": "I have read the guidelines",
                        "selectStartDate": "2020-08-16T18:30:00.000Z",
                        "selectEndDate": "2020-08-19T18:30:00.000Z",
                        "autoReminder": 4,
                        "selectContentFile": "IsmsQuestionnaire.ppt",
                        "selectParticipantXLSheet": "Participant.xls" ,
                        "createdAt": "2020-12-10T09:11:07.361Z",
                        "updatedAt": "2020-12-10T09:11:07.361Z",
                        "__v": 0
                    }
               }
          *
           
          *
          * @apiErrorExample Error-Response:
          *     HTTP/1.1 404 Bad Request
          *     {
                "meta": {
                "code": 404,
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
    //api to Publish Questionnaire 
    questionnaireRouter.post("/publishQuestionnaire", authenticateToken, questionnaireCtrl.publishQuestionnaire);
    /**
          * @api {post} /questionnaires/publishQuestionnaire Publish Questionnaire
          * @apiName Publish Questionnaire
          * @apiGroup Questionnaire
          * @apiDescription API to Publish Questionnaire
          * @apiUse AuthorizationHeader
          * @apiParam {String} Questionnaire_id Questionnaire_id.
            @apiParamExample {json} Request-Example:
          *    {
          *         "questionnaireId": "5fd1e62b4cd3c851bd15c2d6",
          *     }
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/publishQuestionnaire
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/publishQuestionnaire
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
                        "adminId": "5fd06e584b311e1b51d3110c",
                        "title": "ISMS Questionnaire",
                        "description": "these guidelines helps you code...",
                        "buttonTitle": "I Accept",
                        "buttonText": "I have read the guidelines",
                        "checkBoxText": "I have read the guidelines",
                        "selectStartDate": "2020-08-16T18:30:00.000Z",
                        "selectEndDate": "2020-08-19T18:30:00.000Z",
                        "autoReminder": 4,
                        "selectContentFile": "IsmsQuestionnaire.ppt",
                        "selectParticipantXLSheet": "Participant.xls" ,
                        "createdAt": "2020-12-10T09:11:07.361Z",
                        "updatedAt": "2020-12-10T09:11:07.361Z",
                        "__v": 0
                    }
            }
          *
           
          *
          * @apiErrorExample Error-Response:
          *     HTTP/1.1 404 Bad Request
          *     {
                "meta": {
                "code": 404,
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
    //api to Remind questionnaire
    questionnaireRouter.post("/autoRemind",authenticateToken, questionnaireCtrl.autoRemind);
    /**
          * @api {post} /questionnaires/autoRemind  autoRemind
          * @apiName autoRemind
          * @apiGroup Questionnaire
          * @apiDescription API to autoRemind
          * @apiUse AuthorizationHeader
          * @apiParam {String} Questionnaire_id Questionnaire_id.
            @apiParamExample {json} Request-Example:
          *    {
          *         "questionnaireId": "5fd1e62b4cd3c851bd15c2d6",
          *     }
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/autoRemind
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/autoRemind
          * @apiSuccessExample Success-Response:
          *     HTTP/1.1 200 OK
          *     {
                "meta": {
                "code": 200,
                "message": "Success",
                "timestamp": "2020-11-12T04:47:52.234Z"
               }
          *}
           
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

    // //api to update Questionnaire
    questionnaireRouter.put("/:questionnaireId", authenticateToken, questionnaireCtrl.updateQuestionnaire);
    /**
          * @api {put} /questionnaires/5fd1e62b4cd3c851bd15c2d6 Update Questionnaire
          * @apiName Update Questionnaire
          * @apiGroup Questionnaire
          * @apiDescription API to Update Questionnaire
          * @apiUse AuthorizationHeader
          * @apiParam {String} title Questionnaire title.
          * @apiParam {String} description Questionnaire description.
          * @apiParam {String} buttonTitle buttonTitle.
          * @apiParam {String} buttonText buttonTitle.
          * @apiParam {String} checkBoxText Questionnaire checkBoxText.
          * @apiParam {String} selectStartDate selectStartDate.
          * @apiParam {String} selectEndDate selectEndDate.
          * @apiParam {String} autoReminder autoReminder.
          * @apiParam {String} selectContentFile selectContentFile.
          * @apiParam {String} description Admin Email.
          * @apiParam {String} selectParticipantXLSheet selectParticipantXLSheet.
          * 
          * @apiParamExample {json} Request-Example:
          *    {
                "title": "ISMS Questionnaire",
                "description": "these guidelines helps you code...",
                "buttonTitle": "I Accept",
                "buttonText": "I have read the guidelines",
                "checkBoxText": "I have read the guidelines",
                "selectStartDate": "2020/08/17",
                "selectEndDate": "2020/08/20",
                "autoReminder": 4,
                "selectContentFile": "IsmsQuestionnaire.ppt",
                "selectParticipantXLSheet": "Participant.xls",
                "mailBody":  "hello , your invited to read and accept the terms and conditions by clicking below link"
              }
          *
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/5fd1e62b4cd3c851bd15c2d6
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/5fd1e62b4cd3c851bd15c2d6
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
                        "adminId": "5fd06e584b311e1b51d3110c",
                        "title": "ISMS Questionnaire",
                        "description": "these guidelines helps you code...",
                        "buttonTitle": "I Accept",
                        "buttonText": "I have read the guidelines",
                        "checkBoxText": "I have read the guidelines",
                        "selectStartDate": "2020-08-16T18:30:00.000Z",
                        "selectEndDate": "2020-08-19T18:30:00.000Z",
                        "autoReminder": 4,
                        "selectContentFile": "IsmsQuestionnaire.ppt",
                        "selectParticipantXLSheet": "Participant.xls",
                        "mailBody": "hello , your invited to read and accept the terms and conditions by clicking below link",
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
    //api to upload file
    questionnaireRouter.post("/uploadFiles", questionnaireCtrl.uploadFile);
    /**
          * @api {post} /questionnaires/uploadFiles  upload file 
          * @apiName upload file
          * @apiGroup Questionnaire
          * @apiDescription API to upload file
          * @apiUse AuthorizationHeader
            @apiParam {String} file filename.
            @apiParamExample {json} Request-Example:
          *    {
          *         "file": "END-USER.xlsx",
          *     }
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/uploadFiles
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/uploadFiles
          * @apiSuccessExample Success-Response:
          *     HTTP/1.1 200 OK
          *     {
                "meta": {
                "code": 200,
                "message": "Success",
                "timestamp": "2020-11-12T04:47:52.234Z"
               }
          *}
           
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




    //api to generate Report of questionnaire data
    questionnaireRouter.post("/generateReportQuestionnaire", authenticateToken, questionnaireCtrl.generateReportQuestionnaire);
    /**
          * @api {get} /questionnaires/generateReportQuestionnaire generate Report of questionnaire data
          * @apiName generate Report of questionnaire data
          * @apiGroup Questionnaire
          * @apiDescription API to generate Report of questionnaire data
          * @apiUse AuthorizationHeader
        
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/generateReportQuestionnaire
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/generateReportQuestionnaire
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
                        "_id": "5fd1e62b4cd3c851bd15c2d6",
                        "userId": "5fd06e584b311e1b51d3110c",
                        "questionnaireId": "5fd06e584b311e1b51d3110c",
                        "policyAccept":"true",
                        "createdAt": "2020-12-10T09:11:07.361Z",
                        "updatedAt": "2020-12-10T09:11:07.361Z",
                        "__v": 0
                     },
                     {
                        "_id": "5fd1e62b4cd3c851bd15c2d6",
                        "userId": "5fd06e584b311e1b51d3110c",
                        "questionnaireId": "5fd06e584b311e1b51d3110c",
                        "policyAccept":"false",
                        "createdAt": "2020-12-10T09:11:07.361Z",
                        "updatedAt": "2020-12-10T09:11:07.361Z",
                        "__v": 0
                     },
                     {
                        "_id": "5fd1e62b4cd3c851bd15c2d6",
                        "userId": "5fd06e584b311e1b51d3110c",
                        "questionnaireId": "5fd06e584b311e1b51d3110c",
                        "policyAccept":"true",
                        "createdAt": "2020-12-10T09:11:07.361Z",
                        "updatedAt": "2020-12-10T09:11:07.361Z",
                        "__v": 0
                     },
    
                    ]
                }
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
    //api to delete details of questionnaire data
    questionnaireRouter.delete("/:questionnaireId", authenticateToken, questionnaireCtrl.deleteQuestionnaire);
    /**
          * @api {delete} /questionnaires/5fd1e62b4cd3c851bd15c2d6  delete questionnaire data
          * @apiName delete  questionnaire data
          * @apiGroup Questionnaire
          * @apiDescription API to delete  questionnaire data
          * @apiUse AuthorizationHeader
            @apiParam {String} questionnaireId questionnaire Id.
            @apiParamExample {json} Request-Example:
          *    {
          *         "questionnaireId": "5fd1e62b4cd3c851bd15c2d6",
          *     }
          * @apiExample {curl} Example usage:
          *     curl -i http://localhost:4000/api/v1/questionnaires/5fd1e62b4cd3c851bd15c2d6
          * @apiSampleRequest http://localhost:4000/api/v1/questionnaires/5fd1e62b4cd3c851bd15c2d6
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
                        "adminId": "5fd06e584b311e1b51d3110c",
                        "title": "ISMS Questionnaire",
                        "description": "these guidelines helps you code...",
                        "buttonTitle": "I Accept",
                        "buttonText": "I have read the guidelines",
                        "checkBoxText": "I have read the guidelines",
                        "selectStartDate": "2020-08-16T18:30:00.000Z",
                        "selectEndDate": "2020-08-19T18:30:00.000Z",
                        "autoReminder": 4,
                        "selectContentFile": "IsmsQuestionnaire.ppt",
                        "selectParticipantXLSheet": "Participant.xls",
                        "mailBody": "hello , your invited to read and accept the terms and conditions by clicking below link",
                        "createdAt": "2020-12-10T09:11:07.361Z",
                        "updatedAt": "2020-12-10T09:11:07.361Z",
                        "__v": 0
    
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

    app.use("/api/v1/questionnaires", questionnaireRouter);
};