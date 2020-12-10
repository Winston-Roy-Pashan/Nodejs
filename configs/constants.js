/**
  * Project         : Invision
 * Module           : Constants
 * Source filename  : constants.js
 * Description      : Common  messages and codes.
  * Author           : Winston Roy Pashan
 * Copyright        : Copyright © 2020, Invision
 *                    Written under contract by 99games online Pvt. Ltd.                   
 */

"use strict";

module.exports = {
    code: {
        HTTP_ERR: 400, //  bad request to the server
        CONFLICT: 409,  //if data already exists
        SUCCESS: 200, //get result success
        INVALID: 400, //invalid data
        HTTP_POST_S: 201, //post request succcess
        DB_ERR: 500, //Error in database
        NOT_FOUND: 404, //if data is not present
        NOT_AUTHERIZED: 401, //user is not authorised to access the api
        FORBIDDEN: 403, //forbidden
        NO_RECORDS: 404, //no records found
        BAD_REQUEST: 400, //bad request 
        BAD_PARAMS: 400, //invalid  params
        PARAM_MISSING: 400, // required params are missing

    },
    text: {
        "SUCCESS": "Success",
        "HTTP_SUCCESS": "Success",
        "DB_FAILURE": "Database Failure",
        "DB_ERR": "Error in  Database",
        "DB_DUPLICATE": "Duplicate data is entered",
        "NO_RECORDS": "No Records Found",
        "BAD_PARAMS": "Invalid params",
        "BAD_REQUEST": "Bad request to server.",
        "PARAM_MISSING": "Required Parameter missing",
        "NO_PARAMS": "Parameter Missing !",
        "NOT_AUTHERIZED": "Not Authorized",
        "INV_CRED": "Invalid Credentials.",
        "USER_EXISTS": "Entered User Already Exists",
        "USER_NOT_EXISTS":"User Not Exists",
        "WRONG_PASSWORD":"Entered Wrong Password",
        "ACCEPTED":"You are accepted the Policy",
        "ALREADY_ACCEPTED":"You are already accepted the Policy",
        "QUESTIONNAIRE_EXISTS":"Entered Questionnaire Already Exists"
    }
};

