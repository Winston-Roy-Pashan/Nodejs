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
                        return utils.sendCustomError(req, res, 'INVALID', 'INVALID_DATE');
                    } else {
                        questionnaireObj.selectStartDate = startDate;
                    }
                }
                if (req.body.selectEndDate) {
                    var startDate = new Date(req.body.selectStartDate);
                    var endDate = new Date(req.body.selectEndDate);
                    console.log("endDate......", endDate)


                    if (endDate <= questionnaireObj.selectStartDate) {
                        return utils.sendCustomError(req, res, 'INVALID', 'INVALID_DATE');
                    } else {
                        questionnaireObj.selectEndDate = endDate;
                    }
                }
                if (req.body.autoReminder) {
                    var startDate = new Date(questionnaireObj.selectStartDate);
                    var endDate = new Date(questionnaireObj.selectEndDate);
                    var diffDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
                    console.log("Date minusss......", diffDays)
                    if (req.body.autoReminder <= diffDays) {
                        questionnaireObj.autoReminder = req.body.autoReminder;
                    } else {
                        return utils.sendCustomError(req, res, 'INVALID', 'INVALID_AUTO_REMIND');
                    }
                }
                if (req.body.selectContentFile) {
                    questionnaireObj.selectContentFile = path.join(__dirname, "..", "uploads/") + req.body.selectContentFile;

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
                if (questionnaireData && questionnaireData.isExists == false) {
                    var questionnaireObj = {};
                    questionnaireObj.isExists = true;
                    let data = await Questionnaires.updateDataById(questionnaireData._id, questionnaireObj);
                    data = "questionnaire Saved Sucessfully............"
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
                else if (questionnaireData) {
                    return utils.sendCustomError(req, res, "CONFLICT", "QUESTIONNAIRE_EXISTS")
                } else {
                    let data = await Questionnaires.addData(questionnaireObj);
                    console.log("________________data", data);
                    fs.rename(path.join(__dirname, "..", "uploads/") + data.selectParticipantXLSheet, path.join(__dirname, "..", "uploads/") + data._id + '.xlsx', function (err) {
                        if (err) console.log('ERROR: ' + err);
                    });
                    data = "questionnaire Saved Sucessfully............"
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
                queryObj.query.isExists = true;
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
                // console.log("req. user..........", req.user);
                var questionnaireObj = {};
                if (req.body.questionnaireId) {
                    questionnaireObj.questionnaireId = req.body.questionnaireId;
                }
                var questionnareId = req.body.questionnaireId

                let policyData = await policyStatus.getData(questionnaireObj);
                if (policyData) {
                    policyData = "Sorry..Questionnaire is already  Published!!!!! ......."
                    return utils.sendResponse(req, res, policyData, "SUCCESS", "SUCCESS");
                } else {
                    let data = await Questionnaires.getDataById(questionnaireObj.questionnaireId);
                    console.log("questionnire data.......", data);
                    var mailBody = data.mailBody

                    var datafile = path.join(__dirname, "..", "uploads/") + data._id + '.xlsx';
                    var dataExcel = await utils.readexcelsheet(datafile)
                    console.log("dataExcel...........", dataExcel)

                    dataExcel.forEach(async function (user) {
                        var queryObj = {};
                        queryObj.email = user.EMAIL;
                        let userData = await Users.getData(queryObj);
                        if (!userData) {
                            // console.log("user alredy exists.....", userData);
                            var userObj = {};
                            userObj.email = user.EMAIL;
                            userObj.name = user.NAME;
                            userObj.employeeCode = user.EMPLOYEE_CODE;
                            userObj.password = utils.generatePassword();
                            var userPassword = userObj.password;
                            userObj.password = await utils.encryptPassword(userObj.password);
                            let data = await Users.addData(userObj);
                            var sub = "Congratulations ,Your account has been created in In-vision";
                            var link = "https://projects.invisionapp.com/d/main?origin=v7#/console/20430572/432692886/preview?scrollOffset=0";
                            var intro = "Username: " + data.email + "<br>Password: " + userPassword + "<br>Please use this credential to login into Invision";
                            await utils.sendMail(data.name, data.email, intro, sub, link);
                        }
                        let Data = await Users.getData(queryObj);
                        var sub = "Read and Accept the Policy";
                        var link = "http://localhost:4000/policy.robosoftin.com/questionnaires?" + questionnaireObj.questionnaireId;
                        var intro = mailBody + "<br>Please use your existence credential to login into Invision";

                        var policyStatusObj = {};
                        policyStatusObj.userId = Data._id;
                        policyStatusObj.questionnaireId = questionnareId;
                        await policyStatus.addData(policyStatusObj);
                        await utils.sendMail(Data.name, Data.email, intro, sub, link);
                    });
                    data = "Questionnaire Published Sucessfully............."
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

    //Remind Questionnaire
    questionnaireCtrl.remindQuestionnaire = async function (req, res) {
        try {
            var queryObj = {};
            queryObj.query = {};
            queryObj.options = {};
            let data = await Questionnaires.getLists(queryObj);
            data.forEach(async function (questionnaire) {
                if (questionnaire.reminder) {
                    var policyTitle = questionnaire.title;
                    var currentDate = new Date();
                    var startDate = new Date(questionnaire.selectStartDate);
                    var endDate = new Date(questionnaire.selectEndDate);
                    var dateGap = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));
                    console.log("date gap..........", dateGap);
                    if (dateGap % questionnaire.autoReminder == 0) {
                        if (startDate <= currentDate && currentDate <= endDate) {
                            var queryObj = {};
                            queryObj.query = {};
                            queryObj.query.questionnaireId = questionnaire._id;
                            queryObj.options = {};
                            queryObj.populate = ([{ path: 'userId', select: 'name email employeeCode' }])
                            let policyData = await policyStatus.getLists(queryObj);
                            policyData.forEach(async function (policy) {
                                if (policy.policyAccept == false) {
                                    var sub = "Reminder";
                                    var link = "https://projects.invisionapp.com/d/main?origin=v7#/console/20430572/432692886/preview?scrollOffset=0";
                                    var intro = "Please Complete the " + policyTitle + " Policy Process within a " + endDate;
                                    await utils.sendMail(policy.userId.name, policy.userId.email, intro, sub, link);
                                }
                            })
                            console.log("*********************************************")
                        }
                    }
                }
            });
        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }

    //auto reminder
    questionnaireCtrl.autoRemind = async function (req, res) {
        try {
            console.log("useer type .......", req.user);
            if (req.user && req.user.userType === 'Admin') {

                var autoRemindObj = {};
                if (req.body.questionnaireId) {
                    autoRemindObj._id = req.body.questionnaireId;
                }
                autoRemindObj.reminder = true;
                var query = {};
                query._id = req.body.questionnaireId;
                let questionnaireData = await Questionnaires.getData(query);
                console.log("questionnaireData data.........", questionnaireData)
                if (!questionnaireData) {
                    return utils.sendCustomError(req, res, "CONFLICT", "NO_RECORDS")
                } else {
                    let data = await Questionnaires.updateDataById(questionnaireData._id, autoRemindObj);
                    console.log("________________data", data);
                    data = "Auto Reminder set for the Questionnaire............."
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
                var data = "File Uploaded Successfully............."
                utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
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
            var questionnaireObj = {};
            if (req.body.questionnaireId) {
                questionnaireObj.questionnaireId = req.body.questionnaireId;
            }
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
                    if (element.questionnaireId == questionnaireObj.questionnaireId) {
                       // console.log("Current Element------>", element);
                        xlsData.push({ "Name": element.userId.name, "E-mail": element.userId.email, "Employee_Code": element.userId.employeeCode, "Policy_Id": element.questionnaireId, "Policy_Status": element.policyAccept });
                    }
                });
            }

            // try {
            //     var xls = json2xls(xlsData);
            //     fs.writeFile(path.join(__dirname + '/../downloads') + '/' + questionnaireObj.questionnaireId + '.xlsx', xls, 'binary', function (err) {
            //         res.download(path.join(__dirname + '/../downloads') + '/' + questionnaireObj.questionnaireId + '.xlsx', function (err) {
            //             if (err) {
            //                 console.log("Error");
            //                 console.log(err);
            //             } else {
            //                 console.log("Success");
            //                 //data = "Report Generated Successfully............."
            //                 //utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            //                 // utils.sendCustomError(req, res, "SUCCESS", "SUCCESS")
            //                 // fs.unlink(path.join(__dirname + '/../downloads') + '/report.xlsx', function (err) {
            //                 //     if (err) {
            //                 //         console.error(err);
            //                 //     }
            //                 //     console.log('Temp File Delete');
            //                 // });
            //             }
            //         });
            //     });
            // } catch (err) {
            //     console.error(err);
            // }

            try {
                var xls = json2xls(xlsData);
                var time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
                var filename= questionnaireObj.questionnaireId + "-" + time;
                fs.writeFile(path.join(__dirname + '/../downloads') + '/' + filename + '.xlsx', xls, 'binary', function (err) {
                    res.download(path.join(__dirname + '/../downloads') + '/' + filename  + '.xlsx', function (err) {
                        if (err) {
                            console.log("Error");
                            console.log(err);
                        } else {
                            console.log("Success");
                        }
                    });
                }
                )
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
                    data = "Questionnaire Updated Successfully............."
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
                var questionnaireObj = {};
                questionnaireObj.isExists = false;
                let data = await Questionnaires.updateDataById(req.params.questionnaireId, questionnaireObj);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                } else {
                    data = "Questionnaire Deleted Successfully............."
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