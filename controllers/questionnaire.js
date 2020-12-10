/**
 * Project          : Invision
 * Module           : Questionnaire Controller File
 * Source filename  : Questionnaire.js
 * Description      : This file defines all the operation for Questionnaire module.
 * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */
"use strict";

const util = require("../utils/util");
var Busboy = require('busboy');
var path = require('path');
var json2xls = require('json2xls');
var fs = require('fs');
module.exports = function (mongoose, utils, config, constants, logger) {

    var Questionnaires = mongoose.model('Questionnaires');
    var PolicyStatus = mongoose.model('PolicyStatus');
    var Users = mongoose.model('Users');
    var questionnaireCtrl = {}

    questionnaireCtrl.addQuestionnaire = async function (req, res) {
        try {
            console.log("useer type in questionnaire.......", req.user);
            if (req.user && req.user.userType === 'Admin') {

                var questionnaireObj = {};
                questionnaireObj.adminId = req.user._id;
                if (req.body.title) {
                    questionnaireObj.title = req.body.title;
                }
                if (req.body.description) {
                    questionnaireObj.description = req.body.description;
                }
                if (req.body.buttonTitle) {
                    questionnaireObj.buttonTitle = req.body.buttonTitle;
                }
                if (req.body.buttonText) {
                    questionnaireObj.buttonText = req.body.buttonText;
                }
                if (req.body.checkBoxText) {
                    questionnaireObj.checkBoxText = req.body.checkBoxText;
                }
                if (req.body.selectStartDate) {
                    questionnaireObj.selectStartDate = req.body.selectStartDate;
                }
                if (req.body.selectEndDate) {
                    questionnaireObj.selectEndDate = req.body.selectEndDate;
                }
                if (req.body.autoReminder) {
                    questionnaireObj.autoReminder = req.body.autoReminder;
                }
                if (req.body.selectContentFile) {
                    questionnaireObj.selectContentFile = req.body.selectContentFile;
                }
                if (req.body.selectParticipantXLSheet) {
                    questionnaireObj.selectParticipantXLSheet = req.body.selectParticipantXLSheet;
                }
                if (req.body.mailBody) {
                    questionnaireObj.mailBody = req.body.mailBody;
                }

                var query = {};
                query.title = req.body.title;
                let questionnaireData = await Questionnaires.getData(query);
                console.log("questionnaire data.........", questionnaireData)
                if (questionnaireData) {
                    return utils.sendCustomError(req, res, "CONFLICT", "QUESTIONNAIRE_EXISTS")
                } else {
                    let data = await Questionnaires.addData(questionnaireObj);
                    console.log("________________data", data);
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }

    //get ALL  Questionnaire
    questionnaireCtrl.getQuestionnaires = async function (req, res) {
        try {
            if (req.user && req.user.userType === 'Admin') {
                var queryObj = {};
                queryObj.query = {};
                if (req.query.adminId) {
                    queryObj.adminId = req.user._id;
                }
                //  console.log(queryObj)
                queryObj.options = {};
                if (req.query.limit) {
                    queryObj.options.limit = JSON.parse(req.query.limit)
                }
                if (req.query.skip) {
                    queryObj.options.skip = JSON.parse(req.query.skip);
                }
                if (req.query.sortField && req.query.sortOrder) {
                    var sortField = req.query.sortField;
                    var sortOrder = req.query.sortOrder;
                    queryObj.options.sort = { [`${sortField}`]: JSON.parse(sortOrder) };
                };
                if (req.query.searchText) {
                    queryObj.query.name = { $regex: req.query.searchText, $options: 'i' }
                };
                // queryObj.selectFields = 'title description buttonTitle buttonText checkBoxText  ';
                queryObj.selectFields = '-mailBody';
                let data = await Questionnaires.getLists(queryObj);
                let count = await Questionnaires.getCount(queryObj.query);
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS", count);
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

        //  Preview Questionnaire
    questionnaireCtrl.previewQuestionnaires = async function (req, res) {
        try {
            if (req.user && req.user.userType === 'Admin') {
                var questionnaireObj = {};
                if (req.body.questionnaireId) {
                    questionnaireObj._id = req.body.questionnaireId;
                }
                 console.log("questionnaireObj._id,,,,,,",questionnaireObj._id)
                 console.log("req.body.questionnaireId,,,,,,",req.body.questionnaireId)
               
               // queryObj.selectFields = '-mailBody';
                let data = await Questionnaires.getDataById(questionnaireObj._id);
                console.log("questionnaiere data..........",data)
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    //Pubish Questionnaire 
    questionnaireCtrl.publishQuestionnaire = async function (req, res) {
        try {
            if (req.user && req.user.userType === 'Admin') {

                var questionnaireObj = {};
                if (req.body.Questionnaire_id) {
                    questionnaireObj.Questionnaire_id = req.body.Questionnaire_id;
                }
                let data = await Questionnaires.getDataById(questionnaireObj.Questionnaire_id);
                console.log("questionnire data.......", data);
                // var filename= data.selectParticipantXLSheet;
                // var datafile = path.join(__dirname, "..", "uploads/") + filename;
                var datafile = path.join(__dirname, "..", "uploads/") + 'END-USER.xlsx';
                var dataExcel = await utils.readexcelsheet(datafile)
                console.log("dataExcel...........", dataExcel)

                var userObj = {};
                var policyStatusObj = {};
                dataExcel.forEach(async function (user) {
                    userObj.email = user.EMAIL;
                    userObj.name = user.NAME;
                    userObj.employeeCode = user.EMPLOYEE_CODE;
                    userObj.password = utils.generatePassword();
                    var userPassword = userObj.password;
                    console.log("userObj.password.....", userPassword)

                    userObj.password = utils.encryptPassword(userObj.password);
                    var sub = "Read and Accept the Policy";
                    var link = "http://localhost:4000/policy.robosoftin.com/questionnaires?" + questionnaireObj.Questionnaire_id;
                    
                    console.log("user obj.....", userObj)

                    let data = await Users.addData(userObj);

                    var intro ="Username: "+data.email+",Password: "+userPassword +",Please use this credential to login into Invision";
                    policyStatusObj.userId=data._id;
                    policyStatusObj.questionnaireId=req.body.Questionnaire_id
                    let Policydata = await PolicyStatus.addData(policyStatusObj);
                    await utils.sendMail(data.name,data.email, intro, sub, link);
                });
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }

        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }

    //Remind Questionnaire
    questionnaireCtrl.remindQuestionnaire = async function (req, res) {
        try {
           
                // var questionnaireObj = {};
                // if (req.body.Questionnaire_id) {
                //     questionnaireObj.Questionnaire_id = req.body.Questionnaire_id;
                // }
                // let data = await Questionnaires.getDataById(questionnaireObj.Questionnaire_id);
                // console.log("questionnire data.......", data);
                // var filename= data.selectParticipantXLSheet;
                // var datafile = path.join(__dirname, "..", "uploads/") + filename;
                var datafile = path.join(__dirname, "..", "uploads/") + 'END-USER.xlsx';
                var dataExcel = await utils.readexcelsheet(datafile)
                console.log("dataExcel...........", dataExcel)

                var userObj = {};
                dataExcel.forEach(async function (user) {
                    userObj.email = user.EMAIL;
                    
                    var sub = "Reminder";
                    var link = "https://projects.invisionapp.com/d/main?origin=v7#/console/20430572/432692886/preview?scrollOffset=0";
                    var intro ="Please Complete the Policy Process within a Due Date";

                    console.log("user obj.....", userObj)

                    let data = await Users.getData(userObj);
                    await utils.sendMail(data.name, data.email, intro, sub, link);
                });
        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }
 //UPLOAD FILE
 questionnaireCtrl.uploadFile = async function (req, res, params) {
    // if (req.user && req.user.userType === 'Admin') {
    // console.log("req...file...",res);
    if (req.method === 'POST') {

        // Create an Busyboy instance passing the HTTP Request headers.
        var busboy = new Busboy({ headers: req.headers });

        // Listen for event when Busboy finds a file to stream.
        busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
            var saveTo = path.join(__dirname + '/../uploads', path.basename(filename));
            file.pipe(fs.createWriteStream(saveTo));

            // We are streaming! Handle chunks
            file.on('data', function (data) {
                console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
                // Here we can act on the data chunks streamed.
            });

            // Completed streaming the file.
            file.on('end', function () {
                console.log('Finished with ' + fieldname);
                console.log("file name ........", filename);

            });
        });

        // Listen for event when Busboy finds a non-file field.
        busboy.on('field', function (fieldname, val) {
            console.log("Non-file field found");
            // Do something with non-file field.
        });

        // Listen for event when Busboy is finished parsing the form.
        busboy.on('finish', function () {
            res.statusCode = 200;
            utils.sendCustomError(req, res, "SUCCESS", "SUCCESS")
            res.end();
        });

        // Pipe the HTTP Request into Busboy.
        req.pipe(busboy);

    }
    // } else {
    //     return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
    // }
};





    //api to Generate Report , { path: 'questionnaireId', select: 'title' }
    questionnaireCtrl.generateReportQuestionnaire = async function (req, res) {
        if (req.user && req.user.userType === 'Admin') {
            console.log("Downloading user collection");
            var queryObj = {};
            queryObj.query = {};

            queryObj.options = {};

            queryObj.populate = ([{ path: 'userId',select: 'name email employeeCode' }])

            queryObj.selectFields = 'questionnaireId policyAccept';
            let data = await PolicyStatus.getLists(queryObj);
            console.log("policy data..........",data)

            var xlsData = [];
            if (data.length > 0) {
                data.forEach(element => {
                    console.log("Current Element------>", element);;
                    console.log("Current Element of user------>", element.userId.email);
                    console.log("Current Element of questionnaireId------>", element.questionnaireId);
                   var Questionnaireid= element.questionnaireId === undefined ? 'none' :element.questionnaireId;
                    console.log("Current Element of questionnaireId------>", Questionnaireid);
                    xlsData.push({ "Name": element.userId.name, "E-mail": element.userId.email, "Employee_code": element.userId.employeeCode ,"Policy_Id":element.questionnaireId,"Policy_Status":element.policyAccept});
                });
            }
            try {
                var xls = json2xls(xlsData);
                fs.writeFile(path.join(__dirname + '/../downloads') + '/report.xlsx', xls, 'binary', function (err) {
                    res.download(path.join(__dirname + '/../downloads') + '/report.xlsx', function (err) {
                        if (err) {
                            console.log("Error");
                            console.log(err);
                        } else {
                            console.log("Success");
                            utils.sendCustomError(req, res, "SUCCESS", "SUCCESS")
                            fs.unlink(path.join(__dirname + '/../downloads') + '/report.xlsx', function (err) {
                                if (err) {
                                    console.error(err);
                                }
                                console.log('Temp File Delete');
                            });
                        }
                    });
                });
            } catch (err) {
                console.error(err);
            }
           // return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
        } else {
           //  utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
        }
    }

    //api to Update Questionnaire
    questionnaireCtrl.updateQuestionnaire = async function (req, res) {
        try {
            if (req.user && req.user.userType === 'Admin') {
                var questionnaireObj = {};

                if (req.body.title) {
                    questionnaireObj.title = req.body.title;
                }
                if (req.body.description) {
                    questionnaireObj.description = req.body.description;
                }
                if (req.body.buttonTitle) {
                    questionnaireObj.buttonTitle = req.body.buttonTitle;
                }
                if (req.body.buttonText) {
                    questionnaireObj.buttonText = req.body.buttonText;
                }
                if (req.body.checkBoxText) {
                    questionnaireObj.checkBoxText = req.body.checkBoxText;
                }
                if (req.body.selectStartDate) {
                    questionnaireObj.selectStartDate = req.body.selectStartDate;
                }
                if (req.body.selectEndDate) {
                    questionnaireObj.selectEndDate = req.body.selectEndDate;
                }
                if (req.body.autoReminder) {
                    questionnaireObj.autoReminder = req.body.autoReminder;
                }
                if (req.body.selectContentFile) {
                    questionnaireObj.selectContentFile = req.body.selectContentFile;
                }
                if (req.body.selectParticipantXLSheet) {
                    questionnaireObj.selectParticipantXLSheet = req.body.selectParticipantXLSheet;
                }
                if (req.body.mailBody) {
                    questionnaireObj.mailBody = req.body.mailBody;
                }
                let data = await Questionnaires.updateDataById(req.params.questionnaireId, questionnaireObj);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                } else {
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    //API to Delete Questionnaire
    questionnaireCtrl.deleteQuestionnaire = async function (req, res) {
        try {
            if (req.questionnaire && req.questionnaire.questionnaireType === 'Admin') {
                let data = await Questionnaires.removeDataById(req.params.questionnaireId);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                } else {
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    // questionnaireCtrl.getQuestionnairesCount = async function (req, res) {
    //     try {
    //         let data = await Questionnaires.aggregate([
    //             {
    //                 $group: {
    //                     _id: '$category',
    //                     count: { $sum: 1 }
    //                 }
    //             }
    //         ]);
    //         logger.info("----data", data)
    //         return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
    //     } catch (error) {
    //         return utils.sendDBCallbackErrs(req, res, error, null);
    //     }
    // }
    return questionnaireCtrl;
}