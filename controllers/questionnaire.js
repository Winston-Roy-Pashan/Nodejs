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
    var policyStatus = mongoose.model('PolicyStatus');
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
                    var startDate = new Date(req.body.selectStartDate);
                    var currentDate = new Date();
                    console.log("strt date......", startDate)
                    console.log("currentDate......", currentDate)
                    if (startDate < currentDate) {
                        return utils.sendCustomError(req, res, 'CONFLICT', 'INVALID_DATE');
                    } else {
                        questionnaireObj.selectStartDate = startDate;
                    }
                }
                if (req.body.selectEndDate) {
                    var startDate = new Date(req.body.selectStartDate);
                    var endDate = new Date(req.body.selectEndDate);
                    console.log("endDate......", endDate)

                    console.log("Date minusss......", diffDays)
                    if (endDate <= questionnaireObj.selectStartDate) {
                        return utils.sendCustomError(req, res, 'CONFLICT', 'INVALID_DATE');
                    } else {
                        questionnaireObj.selectEndDate = endDate;
                    }
                }
                if (req.body.autoReminder) {
                    var startDate = new Date(questionnaireObj.selectStartDate);
                    var endDate = new Date(questionnaireObj.selectEndDate);
                    var diffDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
                    if (req.body.autoReminder <= diffDays) {
                        questionnaireObj.autoReminder = req.body.autoReminder;
                    } else {
                        return utils.sendCustomError(req, res, 'CONFLICT', 'INVALID_AUTO_REMIND');
                    }
                }
                if (req.body.selectContentFile) {
                    questionnaireObj.selectContentFile = path.join(__dirname, "..", "uploads/") + req.body.selectContentFile;

                }
                if (req.body.selectParticipantXLSheet) {
                    questionnaireObj.selectParticipantXLSheet = path.join(__dirname, "..", "uploads/") + req.body.selectParticipantXLSheet;
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

    questionnaireCtrl.addEndUser = async function (req, res, filepath) {
        var dataExcel = await utils.readexcelsheet(filepath)
        console.log("dataExcel...........", dataExcel)
        dataExcel.forEach(async function (user) {
            var userObj = {};
            userObj.email = user.EMAIL;
            userObj.name = user.NAME;
            userObj.employeeCode = user.EMPLOYEE_CODE;
            userObj.password = utils.generatePassword();
            var userPassword = userObj.password;
            var query = {};
            query.email = user.EMAIL;
            console.log("userObj.password.....", userPassword);
            userObj.password = utils.encryptPassword(userObj.password);
            let userData = await Users.getData(query);
            if (userData) {
                console.log("user alredy exists.....", userData);
            }
            else {
                let data = await Users.addData(userObj);
                var sub = "Congratulations ,Your account has been created in In-vision";
                var link = "https://projects.invisionapp.com/d/main?origin=v7#/console/20430572/432692886/preview?scrollOffset=0";
                var intro = "Username: " + data.email + "<br>Password: " + userPassword + "<br>Please use this credential to login into Invision";
                await utils.sendMail(data.name, data.email, intro, sub, link);
            }
        });

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
                let data = await Questionnaires.getDataById(questionnaireObj._id);
                console.log("questionnaiere data..........", data)
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
                console.log("req. user..........", req.user);
                var questionnaireObj = {};
                if (req.body.questionnaireId) {
                    questionnaireObj.questionnaireId = req.body.questionnaireId;
                }
                var questionnareId = req.body.questionnaireId

                let data = await Questionnaires.getDataById(questionnaireObj.questionnaireId);
                console.log("questionnire data.......", data);
                var mailBody = data.mailBody

                var sub = "Read and Accept the Policy";
                var link = "http://localhost:4000/policy.robosoftin.com/questionnaires?" + questionnaireObj.questionnaireId;
                var intro = mailBody + "<br>Please use your existence credential to login into Invision";

                var datafile = data.selectParticipantXLSheet;
                var dataExcel = await utils.readexcelsheet(datafile)
                console.log("dataExcel...........", dataExcel)

                dataExcel.forEach(async function (user) {
                    var queryObj = {};
                    queryObj.email = user.EMAIL;
                    let userData = await Users.getData(queryObj);

                    var policyStatusObj = {};
                    policyStatusObj.userId = userData._id;
                    policyStatusObj.questionnaireId = questionnareId;
                    await policyStatus.addData(policyStatusObj);
                    await utils.sendMail(user.NAME, user.EMAIL, intro, sub, link);
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
            var queryObj = {};
            queryObj.query = {};
            queryObj.options = {};
            let data = await Questionnaires.getLists(queryObj);
            data.forEach(async function (user) {
                var currentDate = new Date();
                var startDate = new Date(user.selectStartDate);
                var endDate = new Date(user.selectEndDate);
                if (startDate <= currentDate && currentDate <= endDate) {
                    var queryObj = {};
                    queryObj.query = {};
                    queryObj.query.questionnaireId = user._id;
                    queryObj.options = {};
                    queryObj.populate = ([{ path: 'userId', select: 'name email employeeCode' }])
                    let policyData = await policyStatus.getLists(queryObj);
                    policyData.forEach(async function (user) {
                        if (user.policyAccept == false) {
                            var sub = "Reminder";
                            var link = "https://projects.invisionapp.com/d/main?origin=v7#/console/20430572/432692886/preview?scrollOffset=0";
                            var intro = "Please Complete the Policy Process within a Due Date";
                            await utils.sendMail(user.userId.name, user.userId.email, intro, sub, link);

                        }
                    })
                    console.log("*********************************************")
                }
            });
        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }
    //UPLOAD FILE
    questionnaireCtrl.uploadFile = async function (req, res, params) {

        if (req.method === 'POST') {

            // Create an Busyboy instance passing the HTTP Request headers.
            var busboy = new Busboy({ headers: req.headers });

            // Listen for event when Busboy finds a file to stream.
            busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
                console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
                var saveTo = path.join(__dirname + '/../uploads', path.basename(filename));
                console.log("saved file.......", saveTo);
                questionnaireCtrl.addEndUser(req, res, saveTo);
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
                utils.sendCustomError(req, res, "SUCCESS", "SUCCESS");
                res.end();

            });

            // Pipe the HTTP Request into Busboy.
            req.pipe(busboy);

        }
    };





    //api to Generate Report 
    questionnaireCtrl.generateReportQuestionnaire = async function (req, res) {
        if (req.user && req.user.userType === 'Admin') {
            console.log("Downloading user collection");
            var queryObj = {};
            queryObj.query = {};

            queryObj.options = {};

            queryObj.populate = ([{ path: 'userId', select: 'name email employeeCode' }])

            queryObj.selectFields = 'questionnaireId policyAccept';
            let data = await policyStatus.getLists(queryObj);
            console.log("policy data..........", data)

            var xlsData = [];
            if (data.length > 0) {
                data.forEach(element => {
                    console.log("Current Element------>", element);;
                    xlsData.push({ "Name": element.userId.name, "E-mail": element.userId.email, "Employee_Code": element.userId.employeeCode, "Policy_Id": element.questionnaireId, "Policy_Status": element.policyAccept });
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
                            // utils.sendCustomError(req, res, "SUCCESS", "SUCCESS")
                            // fs.unlink(path.join(__dirname + '/../downloads') + '/report.xlsx', function (err) {
                            //     if (err) {
                            //         console.error(err);
                            //     }
                            //     console.log('Temp File Delete');
                            // });
                        }
                    });
                });
            } catch (err) {
                console.error(err);
            }
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
            if (req.user && req.user.userType === 'Admin') {
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
    return questionnaireCtrl;
}