define({ "api": [
  {
    "type": "get",
    "url": "/policyStatus/pendingPolicyStatus",
    "title": "Pending PolicyStatus",
    "name": "Pending_PolicyStatus",
    "group": "PolicyStatus",
    "description": "<p>API to get pending PolicyStatus</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/policyStatus/pendingPolicyStatus",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/policyStatus/pendingPolicyStatus"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"meta\": {\n            \"code\": 200,\n            \"message\": \"Success\",\n            \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n           },\n          \"pagination\": {},\n          \"data\": [\n      {\n          \"_id\": \"5fd39303a8d5d8306c4aa0ec\",\n          \"policyAccept\": false,\n          \"userId\": {\n              \"_id\": \"5fd391849268552ecfd2cc0c\",\n              \"email\": \"mail2winstonroy@yahoo.com\",\n              \"name\": \"Roy Pashan\",\n              \"employeeCode\": \"MNG002\"\n          },\n          \"questionnaireId\": {\n              \"_id\": \"5fd0709530a434204c3007d5\",\n              \"title\": \"Secure coding Guidelines\",\n              \"description\": \"these guidelines helps you code...\",\n              \"selectStartDate\": \"2020-12-09T18:30:00.000Z\",\n              \"selectEndDate\": \"2020-12-20T18:30:00.000Z\"\n          },\n          \"createdAt\": \"2020-12-11T15:40:51.464Z\",\n          \"updatedAt\": \"2020-12-11T15:50:03.890Z\"\n      },\n      {\n          \"_id\": \"5fd83926b66955345c3eaf3d\",\n          \"policyAccept\": false,\n          \"userId\": {\n              \"_id\": \"5fd391849268552ecfd2cc0c\",\n              \"email\": \"mail2winstonroy@yahoo.com\",\n              \"name\": \"Roy Pashan\",\n              \"employeeCode\": \"MNG002\"\n          },\n          \"questionnaireId\": {\n              \"_id\": \"5fd320a7d28d01408a4c4e2a\",\n              \"title\": \"ISMS Questionnaire\",\n              \"description\": \"these guidelines helps you code...\",\n              \"selectStartDate\": \"2020-12-09T18:30:00.000Z\",\n              \"selectEndDate\": \"2020-12-15T18:30:00.000Z\"\n          },\n          \"createdAt\": \"2020-12-15T04:18:46.768Z\",\n          \"updatedAt\": \"2020-12-15T04:18:46.768Z\"\n      }\n  ]\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n            \"meta\": {\n            \"code\": 400,\n             \"message\": \"NO_RECORDS\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/policyStatus.js",
    "groupTitle": "PolicyStatus",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/policyStatus/acceptPolicyStatus",
    "title": "Update PolicyStatus",
    "name": "Update_PolicyStatus",
    "group": "PolicyStatus",
    "description": "<p>API to Update PolicyStatus</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionnaireId",
            "description": "<p>questionnaire Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n           \"questionnaireId\":\"5fd1e62b4cd3c851bd15c2d6\"\n         }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/policyStatus/acceptPolicyStatus",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/policyStatus/acceptPolicyStatus"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n          \"meta\": {\n          \"code\": 200,\n          \"message\": \"Success\",\n          \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n         },\n        \"pagination\": {},\n        \"data\": {\n                  \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                  \"userId\": \"5fd06e584b311e1b51d3110c\",\n                  \"questionnaireId\": \"5fd06e584b311e1b51d3110c\",\n                  \"policyAccept\":\"true\",\n                  \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                  \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                  \"__v\": 0\n        }\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n          \"meta\": {\n          \"code\": 400,\n           \"message\": \"NO_RECORDS\",\n          \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n         }\n        }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n            \"meta\": {\n            \"code\": 500,\n            \"message\": \"Error in  Database\",\n            \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n        }\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/policyStatus.js",
    "groupTitle": "PolicyStatus",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/questionnaires/previewQuestionnaire",
    "title": "Preview Questionnaire",
    "name": "Preview_Questionnaire",
    "group": "Questionnaire",
    "description": "<p>API to Preview Questionnaire</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "questionnaireId",
            "description": "<p>questionnaire Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"questionnaireId\":\"5fd1e62b4cd3c851bd15c2d6\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/previewQuestionnaire",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/previewQuestionnaire"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"meta\": {\n            \"code\": 200,\n            \"message\": \"Success\",\n            \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n           },\n          \"pagination\": {},\n          \"data\": {\n                    \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"adminId\": \"5fd06e584b311e1b51d3110c\",\n                    \"title\": \"ISMS Questionnaire\",\n                    \"description\": \"these guidelines helps you code...\",\n                    \"buttonTitle\": \"I Accept\",\n                    \"buttonText\": \"I have read the guidelines\",\n                    \"checkBoxText\": \"I have read the guidelines\",\n                    \"selectStartDate\": \"2020-08-16T18:30:00.000Z\",\n                    \"selectEndDate\": \"2020-08-19T18:30:00.000Z\",\n                    \"autoReminder\": 4,\n                    \"selectContentFile\": \"IsmsQuestionnaire.ppt\",\n                    \"selectParticipantXLSheet\": \"Participant.xls\" ,\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"__v\": 0\n                }\n           }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n            \"meta\": {\n            \"code\": 404,\n            \"message\": \"NO_RECORDS\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaire",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/questionnaires/publishQuestionnaire",
    "title": "Publish Questionnaire",
    "name": "Publish_Questionnaire",
    "group": "Questionnaire",
    "description": "<p>API to Publish Questionnaire</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Questionnaire_id",
            "description": "<p>Questionnaire_id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"questionnaireId\": \"5fd1e62b4cd3c851bd15c2d6\",\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/publishQuestionnaire",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/publishQuestionnaire"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"meta\": {\n            \"code\": 200,\n            \"message\": \"Success\",\n            \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n           },\n          \"pagination\": {},\n          \"data\": {\n                    \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"adminId\": \"5fd06e584b311e1b51d3110c\",\n                    \"title\": \"ISMS Questionnaire\",\n                    \"description\": \"these guidelines helps you code...\",\n                    \"buttonTitle\": \"I Accept\",\n                    \"buttonText\": \"I have read the guidelines\",\n                    \"checkBoxText\": \"I have read the guidelines\",\n                    \"selectStartDate\": \"2020-08-16T18:30:00.000Z\",\n                    \"selectEndDate\": \"2020-08-19T18:30:00.000Z\",\n                    \"autoReminder\": 4,\n                    \"selectContentFile\": \"IsmsQuestionnaire.ppt\",\n                    \"selectParticipantXLSheet\": \"Participant.xls\" ,\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"__v\": 0\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n            \"meta\": {\n            \"code\": 404,\n            \"message\": \"NO_RECORDS\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaire",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/questionnaires/5fd1e62b4cd3c851bd15c2d6",
    "title": "Update Questionnaire",
    "name": "Update_Questionnaire",
    "group": "Questionnaire",
    "description": "<p>API to Update Questionnaire</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Questionnaire title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Questionnaire description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buttonTitle",
            "description": "<p>buttonTitle.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buttonText",
            "description": "<p>buttonTitle.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "checkBoxText",
            "description": "<p>Questionnaire checkBoxText.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selectStartDate",
            "description": "<p>selectStartDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selectEndDate",
            "description": "<p>selectEndDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "autoReminder",
            "description": "<p>autoReminder.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selectContentFile",
            "description": "<p>selectContentFile.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selectParticipantXLSheet",
            "description": "<p>selectParticipantXLSheet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n             \"title\": \"ISMS Questionnaire\",\n             \"description\": \"these guidelines helps you code...\",\n             \"buttonTitle\": \"I Accept\",\n             \"buttonText\": \"I have read the guidelines\",\n             \"checkBoxText\": \"I have read the guidelines\",\n             \"selectStartDate\": \"2020/08/17\",\n             \"selectEndDate\": \"2020/08/20\",\n             \"autoReminder\": 4,\n             \"selectContentFile\": \"IsmsQuestionnaire.ppt\",\n             \"selectParticipantXLSheet\": \"Participant.xls\",\n             \"mailBody\":  \"hello , your invited to read and accept the terms and conditions by clicking below link\"\n           }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/5fd1e62b4cd3c851bd15c2d6",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/5fd1e62b4cd3c851bd15c2d6"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"meta\": {\n            \"code\": 200,\n            \"message\": \"Success\",\n            \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n           },\n          \"pagination\": {},\n          \"data\": {\n                    \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"adminId\": \"5fd06e584b311e1b51d3110c\",\n                    \"title\": \"ISMS Questionnaire\",\n                    \"description\": \"these guidelines helps you code...\",\n                    \"buttonTitle\": \"I Accept\",\n                    \"buttonText\": \"I have read the guidelines\",\n                    \"checkBoxText\": \"I have read the guidelines\",\n                    \"selectStartDate\": \"2020-08-16T18:30:00.000Z\",\n                    \"selectEndDate\": \"2020-08-19T18:30:00.000Z\",\n                    \"autoReminder\": 4,\n                    \"selectContentFile\": \"IsmsQuestionnaire.ppt\",\n                    \"selectParticipantXLSheet\": \"Participant.xls\",\n                    \"mailBody\": \"hello , your invited to read and accept the terms and conditions by clicking below link\",\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"__v\": 0\n          }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n            \"meta\": {\n            \"code\": 400,\n             \"message\": \"NO_RECORDS\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaire",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/questionnaires/autoRemind",
    "title": "upload file",
    "name": "autoRemind",
    "group": "Questionnaire",
    "description": "<p>API to autoRemind</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Questionnaire_id",
            "description": "<p>Questionnaire_id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"questionnaireId\": \"5fd1e62b4cd3c851bd15c2d6\",\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/autoRemind",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/autoRemind"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n                \"meta\": {\n                \"code\": 200,\n                \"message\": \"Success\",\n                \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n               }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n            \"meta\": {\n            \"code\": 400,\n             \"message\": \"NO_RECORDS\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaire",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/questionnaires/5fd1e62b4cd3c851bd15c2d6",
    "title": "delete questionnaire data",
    "name": "delete_questionnaire_data",
    "group": "Questionnaire",
    "description": "<p>API to delete  questionnaire data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionnaireId",
            "description": "<p>questionnaire Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"questionnaireId\": \"5fd1e62b4cd3c851bd15c2d6\",\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/5fd1e62b4cd3c851bd15c2d6",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/5fd1e62b4cd3c851bd15c2d6"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"meta\": {\n            \"code\": 200,\n            \"message\": \"Success\",\n            \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n           },\n          \"pagination\": {},\n          \"data\": {\n                   \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"adminId\": \"5fd06e584b311e1b51d3110c\",\n                    \"title\": \"ISMS Questionnaire\",\n                    \"description\": \"these guidelines helps you code...\",\n                    \"buttonTitle\": \"I Accept\",\n                    \"buttonText\": \"I have read the guidelines\",\n                    \"checkBoxText\": \"I have read the guidelines\",\n                    \"selectStartDate\": \"2020-08-16T18:30:00.000Z\",\n                    \"selectEndDate\": \"2020-08-19T18:30:00.000Z\",\n                    \"autoReminder\": 4,\n                    \"selectContentFile\": \"IsmsQuestionnaire.ppt\",\n                    \"selectParticipantXLSheet\": \"Participant.xls\",\n                    \"mailBody\": \"hello , your invited to read and accept the terms and conditions by clicking below link\",\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"__v\": 0\n\n                 }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n            \"meta\": {\n            \"code\": 400,\n             \"message\": \"NO_RECORDS\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaire",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/questionnaires/generateReportQuestionnaire",
    "title": "generate Report of questionnaire data",
    "name": "generate_Report_of_questionnaire_data",
    "group": "Questionnaire",
    "description": "<p>API to generate Report of questionnaire data</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/generateReportQuestionnaire",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/generateReportQuestionnaire"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"meta\": {\n            \"code\": 200,\n            \"message\": \"Success\",\n            \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n           },\n          \"pagination\": {},\n          \"data\":[ {\n                    \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"userId\": \"5fd06e584b311e1b51d3110c\",\n                    \"questionnaireId\": \"5fd06e584b311e1b51d3110c\",\n                    \"policyAccept\":\"true\",\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"__v\": 0\n                 },\n                 {\n                    \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"userId\": \"5fd06e584b311e1b51d3110c\",\n                    \"questionnaireId\": \"5fd06e584b311e1b51d3110c\",\n                    \"policyAccept\":\"false\",\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"__v\": 0\n                 },\n                 {\n                    \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"userId\": \"5fd06e584b311e1b51d3110c\",\n                    \"questionnaireId\": \"5fd06e584b311e1b51d3110c\",\n                    \"policyAccept\":\"true\",\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"__v\": 0\n                 },\n\n                ]\n            }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n            \"meta\": {\n            \"code\": 400,\n             \"message\": \"NO_RECORDS\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaire",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/questionnaires/getQuestionnaire",
    "title": "Get Questionnaire",
    "name": "get_Questionnaire",
    "group": "Questionnaire",
    "description": "<p>API to Get Questionnaire</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/getQuestionnaire",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/getQuestionnaire"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"meta\": {\n            \"code\": 200,\n            \"message\": \"Success\",\n            \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n           },\n          \"pagination\": {},\n          \"data\":[ {\n                    \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"adminId\": \"5fd06e584b311e1b51d3110c\",\n                    \"title\": \"ISMS Questionnaire\",\n                    \"description\": \"these guidelines helps you code...\",\n                    \"buttonTitle\": \"I Accept\",\n                    \"buttonText\": \"I have read the guidelines\",\n                    \"checkBoxText\": \"I have read the guidelines\",\n                    \"selectStartDate\": \"2020-08-16T18:30:00.000Z\",\n                    \"selectEndDate\": \"2020-08-19T18:30:00.000Z\",\n                    \"autoReminder\": 4,\n                    \"selectContentFile\": \"IsmsQuestionnaire.ppt\",\n                    \"selectParticipantXLSheet\": \"Participant.xls\" ,\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"__v\": 0\n                },\n                {\n                    \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"adminId\": \"5fd06e584b311e1b51d3110c\",\n                    \"title\": \"MS Questionnaire\",\n                    \"description\": \"these guidelines helps you code...\",\n                    \"buttonTitle\": \"I Accept\",\n                    \"buttonText\": \"I have read the guidelines\",\n                    \"checkBoxText\": \"I have read the guidelines\",\n                    \"selectStartDate\": \"2020-08-16T18:30:00.000Z\",\n                    \"selectEndDate\": \"2020-08-19T18:30:00.000Z\",\n                    \"autoReminder\": 4,\n                    \"selectContentFile\": \"IsmsQuestionnaire.ppt\",\n                    \"selectParticipantXLSheet\": \"Participant.xls\",\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"__v\": 0\n                }\n            ]\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n            \"meta\": {\n            \"code\": 404,\n            \"message\": \"NO_RECORDS\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaire",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/questionnaires/addQuestionnaire",
    "title": "save Questionnaire",
    "name": "save_Questionnaire",
    "group": "Questionnaire",
    "description": "<p>API to save Questionnaire</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Questionnaire title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Questionnaire description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buttonTitle",
            "description": "<p>buttonTitle.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buttonText",
            "description": "<p>buttonTitle.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "checkBoxText",
            "description": "<p>Questionnaire checkBoxText.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selectStartDate",
            "description": "<p>selectStartDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selectEndDate",
            "description": "<p>selectEndDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "autoReminder",
            "description": "<p>autoReminder.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selectContentFile",
            "description": "<p>selectContentFile.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "selectParticipantXLSheet",
            "description": "<p>selectParticipantXLSheet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n             \"title\": \"ISMS Questionnaire\",\n             \"description\": \"these guidelines helps you code...\",\n             \"buttonTitle\": \"I Accept\",\n             \"buttonText\": \"I have read the guidelines\",\n             \"checkBoxText\": \"I have read the guidelines\",\n             \"selectStartDate\": \"2020/08/17\",\n             \"selectEndDate\": \"2020/08/20\",\n             \"autoReminder\": 4,\n             \"selectContentFile\": \"IsmsQuestionnaire.ppt\",\n             \"selectParticipantXLSheet\": \"Participant.xls\",\n             \"mailBody\":  \"hello , your invited to read and accept the terms and conditions by clicking below link\"\n           }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/addQuestionnaire",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/addQuestionnaire"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"meta\": {\n            \"code\": 200,\n            \"message\": \"Success\",\n            \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n           },\n          \"pagination\": {},\n          \"data\": {\n                    \"_id\": \"5fd1e62b4cd3c851bd15c2d6\",\n                    \"adminId\": \"5fd06e584b311e1b51d3110c\",\n                    \"title\": \"MS Questionnaire\",\n                    \"description\": \"these guidelines helps you code...\",\n                    \"buttonTitle\": \"I Accept\",\n                    \"buttonText\": \"I have read the guidelines\",\n                    \"checkBoxText\": \"I have read the guidelines\",\n                    \"selectStartDate\": \"2020-08-16T18:30:00.000Z\",\n                    \"selectEndDate\": \"2020-08-19T18:30:00.000Z\",\n                    \"autoReminder\": 4,\n                    \"selectContentFile\": \"IsmsQuestionnaire.ppt\",\n                    \"selectParticipantXLSheet\": \"Participant.xls\",\n                    \"mailBody\": \"hello , your invited to read and accept the terms and conditions by clicking below link\",\n                    \"createdAt\": \"2020-12-10T09:11:07.361Z\",\n                    \"updatedAt\": \"2020-12-10T09:11:07.361Z\",\n        \"__v\": 0\n          }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Bad Request\n{\n            \"meta\": {\n            \"code\": 409,\n            \"message\": \" Entered Questionnaire Already Exists\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaire",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/questionnaires/uploadFiles",
    "title": "upload file",
    "name": "upload_file",
    "group": "Questionnaire",
    "description": "<p>API to upload file</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>filename.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"file\": \"END-USER.xlsx\",\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/questionnaires/uploadFiles",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/questionnaires/uploadFiles"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n                \"meta\": {\n                \"code\": 200,\n                \"message\": \"Success\",\n                \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n               }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n            \"meta\": {\n            \"code\": 400,\n             \"message\": \"NO_RECORDS\",\n            \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n           }\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n              \"meta\": {\n              \"code\": 500,\n              \"message\": \"Error in  Database\",\n              \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n          }\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/questionnaire.js",
    "groupTitle": "Questionnaire",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/addAdmin",
    "title": "Add Admin",
    "name": "AddAdmin",
    "group": "Users",
    "description": "<p>API to Add Admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Admin Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Admin Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employeeCode",
            "description": "<p>Admin employeeCode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>Admin userType.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\":\"winston\",\n     \"email\":\"winston.123@99games.in\",\n     \"employeeCode\":\"SA001\",\n     \"userType\":\"Admin\"\n     }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/addAdmin",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/addAdmin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\": {\n      \"_id\": \"5facbe780e43085622fe5c82\",\n      \"name\":\"winston\",\n      \"email\":\"winston.123@99games.in\",\n      \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n      \"employeeCode\":\"SA001\",\n      \"userType\":\"Admin\"\n      \"isAdmin\":\"true\",\n      \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n      \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n      \"__v\": 0\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n      \"meta\": {\n      \"code\": 400,\n      \"message\": \"User Already Exists\",\n      \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n     }\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/addSuperAdmin",
    "title": "Add SuperAdmin",
    "name": "AddSuperAdmin",
    "group": "Users",
    "description": "<p>API to Add SuperAdmin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>SuperAdmin Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>SuperAdmin Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employeeCode",
            "description": "<p>SuperAdmin employeeCode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>SuperAdmin userType.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\":\"Kevin\",\n \"email\":\"Kevin.123@99games.in\",\n \"employeeCode\":\"SA001\",\n \"userType\":\"SuperAdmin\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/addSuperAdmin",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/addSuperAdmin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"meta\": {\n    \"code\": 200,\n    \"message\": \"Success\",\n    \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n   },\n  \"pagination\": {},\n  \"data\": {\n    \"_id\": \"5facbe780e43085622fe5c82\",\n    \"name\":\"Kevin\",\n    \"email\":\"Kevin.123@99games.in\",\n    \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n    \"employeeCode\":\"SA001\",\n    \"userType\":\"SuperAdmin\"\n    \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n    \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"meta\": {\n  \"code\": 400,\n  \"message\": \"User Already Exists\",\n  \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Bad Request\n   {\n       \"meta\": {\n       \"code\": 500,\n       \"message\": \"Error in  Database\",\n       \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n   }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Get all users",
    "name": "All_users",
    "group": "Users",
    "description": "<p>API to get all users</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\":[ {\n      \"_id\": \"5facbe780e43085622fe5c82\",\n      \"name\":\"Kevin\",\n      \"email\":\"Kevin.123@99games.in\",\n      \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n      \"employeeCode\":\"SA001\",\n      \"userType\":\"SuperAdmin\"\n      \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n      \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"5facbe780e43085622fe5c87\",\n      \"name\":\"John\",\n      \"email\":\"John.123@99games.in\",\n      \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n      \"employeeCode\":\"AD001\",\n      \"userType\":\"Admin\"\n      \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n      \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"5facbe780e43085622fe5c83\",\n      \"name\":\"David\",\n      \"email\":\"David.123@99games.in\",\n      \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n      \"employeeCode\":\"MNG001\",\n      \"userType\":\"endUser\"\n      \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n      \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n      \"__v\": 0\n    }\n  ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/5fd1e62b4cd3c851bd15c2d6",
    "title": "Delete user based on Id",
    "name": "Delete_user",
    "group": "Users",
    "description": "<p>API to Delete user based on Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\": \"5facbe780e43085622fe5c82\"\n     }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/5fd1e62b4cd3c851bd15c2d6",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/5fd1e62b4cd3c851bd15c2d6"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\": {\n      \"_id\": \"5facbe780e43085622fe5c82\",\n      \"name\":\"Kevin\",\n      \"email\":\"Kevin.123@99games.in\",\n      \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n      \"employeeCode\":\"SA001\",\n      \"userType\":\"SuperAdmin\"\n      \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n      \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n      \"__v\": 0\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/5fd1e62b4cd3c851bd15c2d6",
    "title": "Get user based on Id",
    "name": "Get_user",
    "group": "Users",
    "description": "<p>API to get user based on Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\": \"5facbe780e43085622fe5c82\"\n     }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/5fd1e62b4cd3c851bd15c2d6",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/5fd1e62b4cd3c851bd15c2d6"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\": {\n      \"_id\": \"5facbe780e43085622fe5c82\",\n      \"name\":\"Kevin\",\n      \"email\":\"Kevin.123@99games.in\",\n      \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n      \"employeeCode\":\"SA001\",\n      \"userType\":\"SuperAdmin\"\n      \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n      \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n      \"__v\": 0\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login User",
    "name": "Login",
    "group": "Users",
    "description": "<p>API to User Login</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Email.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"username\":\"winston.123@99games.in\",\n     \"password\":\"6765ggf\"\n     }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/login",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/login"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\": {\n     \"userType\": \"Admin\",\n      \"isAdmin\": true,\n      \"_id\": \"5fd06e584b311e1b51d3110c\",\n      \"name\": \"Winston Roy\",\n      \"email\": \"pashanwinsty1998@gmail.com\",\n      \"employeeCode\": \"AD002\",\n      \"password\": \"bebfa51272db59813f689192241116f07a6ce49c\",\n      \"createdAt\": \"2020-12-09T06:27:36.304Z\",\n      \"updatedAt\": \"2020-12-10T04:49:06.075Z\",\n      \"token\": \"bb98a320-c3f2-4f0c-b91f-7b9aef83f86e\",\n      \"tokenExpiry\": \"2020-12-10T05:49:06.074Z\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n      \"meta\": {\n      \"code\": 400,\n      \"message\": \"USER_NOT_EXISTS\",\n      \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n     }\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "user Logout",
    "name": "Logout",
    "group": "Users",
    "description": "<p>API to User Logout</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/logout",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/logout"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\": {\n     \"userType\": \"Admin\",\n      \"isAdmin\": true,\n      \"_id\": \"5fd06e584b311e1b51d3110c\",\n      \"name\": \"Winston Roy\",\n      \"email\": \"pashanwinsty1998@gmail.com\",\n      \"employeeCode\": \"AD002\",\n      \"password\": \"bebfa51272db59813f689192241116f07a6ce49c\",\n      \"createdAt\": \"2020-12-09T06:27:36.304Z\",\n      \"updatedAt\": \"2020-12-10T04:49:06.075Z\",\n      \"token\": null,\n      \"tokenExpiry\": null\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n      \"meta\": {\n      \"code\": 400,\n      \"message\": \"USER_NOT_EXISTS\",\n      \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n     }\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/addAdmin/5fd1e62b4cd3c851bd15c2d6",
    "title": "Update Admin Data",
    "name": "UpdateAdmin",
    "group": "Users",
    "description": "<p>API to Update Admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Admin Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Admin Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employeeCode",
            "description": "<p>Admin employeeCode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>Admin userType.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\":\"Kevin\",\n     \"email\":\"Kevin.123@99games.in\",\n     \"employeeCode\":\"SA001\",\n     \"userType\":\"Admin\"\n     }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/addAdmin/5fd1e62b4cd3c851bd15c2d6",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/addAdmin/5fd1e62b4cd3c851bd15c2d6"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\": {\n      \"_id\": \"5facbe780e43085622fe5c82\",\n      \"name\":\"Kevin\",\n      \"email\":\"Kevin.123@99games.in\",\n      \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n      \"employeeCode\":\"SA001\",\n      \"userType\":\"Admin\"\n      \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n      \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n      \"__v\": 0\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n      \"meta\": {\n      \"code\": 400,\n      \"message\": \"User Already Exists\",\n      \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n     }\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/addSuperAdmin/5fd1e62b4cd3c851bd15c2d6",
    "title": "Update Super Admin Data",
    "name": "UpdateSuperAdmin",
    "group": "Users",
    "description": "<p>API to Update SuperAdmin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>SuperAdmin Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>SuperAdmin Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employeeCode",
            "description": "<p>SuperAdmin employeeCode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>SuperAdmin userType.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\":\"Kevin\",\n     \"email\":\"Kevin.123@99games.in\",\n     \"employeeCode\":\"SA001\",\n     \"userType\":\"SuperAdmin\"\n     }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/addSuperAdmin/5fd1e62b4cd3c851bd15c2d6",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/addSuperAdmin/5fd1e62b4cd3c851bd15c2d6"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\": {\n      \"_id\": \"5facbe780e43085622fe5c82\",\n      \"name\":\"Kevin\",\n      \"email\":\"Kevin.123@99games.in\",\n      \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n      \"employeeCode\":\"SA001\",\n      \"userType\":\"SuperAdmin\"\n      \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n      \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n      \"__v\": 0\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n      \"meta\": {\n      \"code\": 400,\n      \"message\": \"User Already Exists\",\n      \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n     }\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "User change password",
    "name": "change_password",
    "group": "Users",
    "description": "<p>API to User change password</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User newpassword.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"password\":\"qwer45\"\n     }",
          "type": "json"
        },
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/changePassword",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/changePassword"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\": {\n     \"userType\": \"Admin\",\n      \"isAdmin\": true,\n      \"_id\": \"5fd06e584b311e1b51d3110c\",\n      \"name\": \"Winston Roy\",\n      \"email\": \"pashanwinsty1998@gmail.com\",\n      \"employeeCode\": \"AD002\",\n      \"password\": \"bebfa51272db59813f689192241116f07a6ce49c\",\n      \"createdAt\": \"2020-12-09T06:27:36.304Z\",\n      \"updatedAt\": \"2020-12-10T04:49:06.075Z\",\n      \"token\": \"bb98a320-c3f2-4f0c-b91f-7b9aef83f86e\",\n      \"tokenExpiry\": \"2020-12-10T05:49:06.074Z\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n      \"meta\": {\n      \"code\": 400,\n      \"message\": \"USER_NOT_EXISTS\",\n      \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n     }\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/sendPasswordUpdateLink",
    "title": "sendPasswordUpdateLink",
    "name": "change_password",
    "group": "Users",
    "description": "<p>API to Send password updataion link to user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"email\":\"winston.pashan67@99games.com\"\n     }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/sendPasswordUpdateLink",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/sendPasswordUpdateLink"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n      \"code\": 200,\n      \"message\": \"Success\",\n      \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n     },\n    \"pagination\": {},\n    \"data\": {\n          \"_id\": \"5fd06e584b311e1b51d3110c\",\n          \"userType\": \"Admin\",\n          \"isAdmin\": true,\n          \"name\": \"Winston Roy\",\n          \"email\": \"winston1998@gmail.com\",\n          \"employeeCode\": \"AD002\",\n          \"createdAt\": \"2020-12-09T06:27:36.304Z\",\n          \"updatedAt\": \"2020-12-10T04:49:06.075Z\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n      \"meta\": {\n      \"code\": 400,\n      \"message\": \"NO_RECORDS\",\n      \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n     }\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n        \"meta\": {\n        \"code\": 400,\n        \"message\": \"HTTP_ERR\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  }
] });
