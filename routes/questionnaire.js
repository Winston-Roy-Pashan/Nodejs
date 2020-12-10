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

    //api to save Questionnaire
    questionnaireRouter.post("/addQuestionnaire", authenticateToken, questionnaireCtrl.addQuestionnaire);

     //api to get questionnaire 
    questionnaireRouter.get("/previewQuestionnaire",authenticateToken,  questionnaireCtrl.getQuestionnaires);

   //api to Publish Questionnaire 
   questionnaireRouter.post("/publishQuestionnaire",authenticateToken,  questionnaireCtrl.publishQuestionnaire);

    //api to Remind questionnaire
    // questionnaireRouter.get("/", questionnaireCtrl.remindQuestionnaire);

    // //api to update Questionnaire
    questionnaireRouter.put("/:questionnaireId", authenticateToken, questionnaireCtrl.updateQuestionnaire);

    //api to upload file
    questionnaireRouter.post("/uploadFiles", questionnaireCtrl.uploadFile);

    //api to generate Report of questionnaire data
    questionnaireRouter.get("/generateReportQuestionnaire",authenticateToken, questionnaireCtrl.generateReportQuestionnaire);

    //api to delete details of questionnaire data
    questionnaireRouter.delete("/:questionnaireId",authenticateToken, questionnaireCtrl.deleteQuestionnaire);


    app.use("/policy.robosoftin.com/questionnaires", questionnaireRouter);
};