define({ "api": [
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
          "content": "{\n       \"name\":\"winston\",\n       \"email\":\"winston.123@99games.in\",\n       \"employeeCode\":\"SA001\",\n       \"userType\":\"Admin\"\n       }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/addAdmin",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/addAdmin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\": {\n        \"_id\": \"5facbe780e43085622fe5c82\",\n        \"name\":\"winston\",\n        \"email\":\"winston.123@99games.in\",\n        \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n        \"employeeCode\":\"SA001\",\n        \"userType\":\"Admin\"\n        \"isAdmin\":\"true\",\n        \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n        \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n        \"__v\": 0\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n        \"meta\": {\n        \"code\": 400,\n        \"message\": \"User Already Exists\",\n        \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n       }\n      }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n          \"meta\": {\n          \"code\": 500,\n          \"message\": \"Error in  Database\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
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
          "content": "{\n   \"name\":\"Kevin\",\n   \"email\":\"Kevin.123@99games.in\",\n   \"employeeCode\":\"SA001\",\n   \"userType\":\"SuperAdmin\"\n   }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/addSuperAdmin",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/addSuperAdmin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"meta\": {\n    \"code\": 200,\n    \"message\": \"Success\",\n    \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n   },\n  \"pagination\": {},\n  \"data\": {\n    \"_id\": \"5facbe780e43085622fe5c82\",\n    \"name\":\"Kevin\",\n    \"email\":\"Kevin.123@99games.in\",\n    \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n    \"employeeCode\":\"SA001\",\n    \"userType\":\"SuperAdmin\"\n    \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n    \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"meta\": {\n    \"code\": 400,\n    \"message\": \"User Already Exists\",\n    \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n   }\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 500 Bad Request\n  {\n        \"meta\": {\n        \"code\": 500,\n        \"message\": \"Error in  Database\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
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
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\":[ {\n        \"_id\": \"5facbe780e43085622fe5c82\",\n        \"name\":\"Kevin\",\n        \"email\":\"Kevin.123@99games.in\",\n        \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n        \"employeeCode\":\"SA001\",\n        \"userType\":\"SuperAdmin\"\n        \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n        \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n        \"__v\": 0\n      },\n      {\n        \"_id\": \"5facbe780e43085622fe5c87\",\n        \"name\":\"John\",\n        \"email\":\"John.123@99games.in\",\n        \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n        \"employeeCode\":\"AD001\",\n        \"userType\":\"Admin\"\n        \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n        \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n        \"__v\": 0\n      },\n      {\n        \"_id\": \"5facbe780e43085622fe5c83\",\n        \"name\":\"David\",\n        \"email\":\"David.123@99games.in\",\n        \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n        \"employeeCode\":\"MNG001\",\n        \"userType\":\"endUser\"\n        \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n        \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n        \"__v\": 0\n      }\n    ]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n          \"meta\": {\n          \"code\": 500,\n          \"message\": \"Error in  Database\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
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
    "url": "/users/:userId",
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
          "content": "{\n       \"_id\": \"5facbe780e43085622fe5c82\"\n       }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/:userId",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/:userId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\": {\n        \"_id\": \"5facbe780e43085622fe5c82\",\n        \"name\":\"Kevin\",\n        \"email\":\"Kevin.123@99games.in\",\n        \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n        \"employeeCode\":\"SA001\",\n        \"userType\":\"SuperAdmin\"\n        \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n        \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n        \"__v\": 0\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n          \"meta\": {\n          \"code\": 500,\n          \"message\": \"Error in  Database\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:userId",
    "title": "Get all user based on Id",
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
          "content": "{\n       \"_id\": \"5facbe780e43085622fe5c82\"\n       }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/:userId",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/:userId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\": {\n        \"_id\": \"5facbe780e43085622fe5c82\",\n        \"name\":\"Kevin\",\n        \"email\":\"Kevin.123@99games.in\",\n        \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n        \"employeeCode\":\"SA001\",\n        \"userType\":\"SuperAdmin\"\n        \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n        \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n        \"__v\": 0\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n          \"meta\": {\n          \"code\": 500,\n          \"message\": \"Error in  Database\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
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
          "content": "{\n       \"username\":\"winston.123@99games.in\",\n       \"password\":\"6765ggf\"\n       }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/login",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/login"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\": {\n       \"userType\": \"Admin\",\n        \"IsAdmin\": true,\n        \"_id\": \"5fd06e584b311e1b51d3110c\",\n        \"name\": \"Winston Roy\",\n        \"email\": \"pashanwinsty1998@gmail.com\",\n        \"Employee_code\": \"AD002\",\n        \"password\": \"bebfa51272db59813f689192241116f07a6ce49c\",\n        \"createdAt\": \"2020-12-09T06:27:36.304Z\",\n        \"updatedAt\": \"2020-12-10T04:49:06.075Z\",\n        \"token\": \"bb98a320-c3f2-4f0c-b91f-7b9aef83f86e\",\n        \"tokenExpiry\": \"2020-12-10T05:49:06.074Z\"\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n        \"meta\": {\n        \"code\": 400,\n        \"message\": \"USER_NOT_EXISTS\",\n        \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n       }\n      }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n          \"meta\": {\n          \"code\": 500,\n          \"message\": \"Error in  Database\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
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
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/logout",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/logout"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\": {\n       \"userType\": \"Admin\",\n        \"IsAdmin\": true,\n        \"_id\": \"5fd06e584b311e1b51d3110c\",\n        \"name\": \"Winston Roy\",\n        \"email\": \"pashanwinsty1998@gmail.com\",\n        \"Employee_code\": \"AD002\",\n        \"password\": \"bebfa51272db59813f689192241116f07a6ce49c\",\n        \"createdAt\": \"2020-12-09T06:27:36.304Z\",\n        \"updatedAt\": \"2020-12-10T04:49:06.075Z\",\n        \"token\": null,\n        \"tokenExpiry\": null\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n        \"meta\": {\n        \"code\": 400,\n        \"message\": \"USER_NOT_EXISTS\",\n        \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n       }\n      }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n          \"meta\": {\n          \"code\": 500,\n          \"message\": \"Error in  Database\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
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
    "url": "/users/addAdmin/:userId",
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
          "content": "{\n       \"name\":\"Kevin\",\n       \"email\":\"Kevin.123@99games.in\",\n       \"employeeCode\":\"SA001\",\n       \"userType\":\"Admin\"\n       }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/addAdmin/:userId",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/addAdmin/:userId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\": {\n        \"_id\": \"5facbe780e43085622fe5c82\",\n        \"name\":\"Kevin\",\n        \"email\":\"Kevin.123@99games.in\",\n        \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n        \"employeeCode\":\"SA001\",\n        \"userType\":\"Admin\"\n        \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n        \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n        \"__v\": 0\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n        \"meta\": {\n        \"code\": 400,\n        \"message\": \"User Already Exists\",\n        \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n       }\n      }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n          \"meta\": {\n          \"code\": 500,\n          \"message\": \"Error in  Database\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
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
    "url": "/users/addSuperAdmin/:userId",
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
          "content": "{\n       \"name\":\"Kevin\",\n       \"email\":\"Kevin.123@99games.in\",\n       \"employeeCode\":\"SA001\",\n       \"userType\":\"SuperAdmin\"\n       }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/addSuperAdmin/:userId",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/addSuperAdmin/:userId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\": {\n        \"_id\": \"5facbe780e43085622fe5c82\",\n        \"name\":\"Kevin\",\n        \"email\":\"Kevin.123@99games.in\",\n        \"password\":\"2erw43redfd56egtegdhhd67e7e\",\n        \"employeeCode\":\"SA001\",\n        \"userType\":\"SuperAdmin\"\n        \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n        \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n        \"__v\": 0\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n        \"meta\": {\n        \"code\": 400,\n        \"message\": \"User Already Exists\",\n        \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n       }\n      }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n          \"meta\": {\n          \"code\": 500,\n          \"message\": \"Error in  Database\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
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
          "content": "{\n       \"password\":\"qwer45\"\n       }",
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
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/changePassword",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/changePassword"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\": {\n       \"userType\": \"Admin\",\n        \"IsAdmin\": true,\n        \"_id\": \"5fd06e584b311e1b51d3110c\",\n        \"name\": \"Winston Roy\",\n        \"email\": \"pashanwinsty1998@gmail.com\",\n        \"Employee_code\": \"AD002\",\n        \"password\": \"bebfa51272db59813f689192241116f07a6ce49c\",\n        \"createdAt\": \"2020-12-09T06:27:36.304Z\",\n        \"updatedAt\": \"2020-12-10T04:49:06.075Z\",\n        \"token\": \"bb98a320-c3f2-4f0c-b91f-7b9aef83f86e\",\n        \"tokenExpiry\": \"2020-12-10T05:49:06.074Z\"\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n        \"meta\": {\n        \"code\": 400,\n        \"message\": \"USER_NOT_EXISTS\",\n        \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n       }\n      }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Bad Request\n{\n          \"meta\": {\n          \"code\": 500,\n          \"message\": \"Error in  Database\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
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
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/policy.robosoftin.com/users/sendPasswordUpdateLink",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/policy.robosoftin.com/users/sendPasswordUpdateLink"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n       },\n      \"pagination\": {},\n      \"data\": {\n            \"_id\": \"5fd06e584b311e1b51d3110c\",\n            \"userType\": \"Admin\",\n            \"IsAdmin\": true,\n            \"name\": \"Winston Roy\",\n            \"email\": \"winston1998@gmail.com\",\n            \"employeeCode\": \"AD002\",\n            \"createdAt\": \"2020-12-09T06:27:36.304Z\",\n            \"updatedAt\": \"2020-12-10T04:49:06.075Z\"\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n        \"meta\": {\n        \"code\": 400,\n        \"message\": \"NO_RECORDS\",\n        \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n       }\n      }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n          \"meta\": {\n          \"code\": 400,\n          \"message\": \"HTTP_ERR\",\n          \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n      }\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  }
] });