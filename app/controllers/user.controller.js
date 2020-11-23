'use strict';
const User = require('../models/user.model');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    // console.log("re.body", req.body)
    if (!req.body) {
        //400 - status code
        return res.status(400).send({
            message: "Name cannot be empty"
        });
    }

    // Create a User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image:req.file.originalname,
        address:req.body.address 
    });


    user.save()
        .then(data => {
            //if no error then we will be sending data in the response
            res.send(data);
        }).catch(err => {
            // if error found, we will be sending error message in the response along with status code as 500
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {

    // Finds documents.
    //Mongoose models provide several static helper functions for CRUD operations. 
    User.find()
        .then(users => {
            for (let index = 0; index < users.length; index++) {
                users[index].image = 'localhost:3000/image/' + users[index].image;
            }
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    //Finds a single document by its _id field. 
    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            } else {
                res.send(user);
            }

        }).catch(err => {

            return res.status(500).send({
                message: err
            });
        });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "User  can not be empty"
        });
    }

    // Find user and update it with the request body
    //An object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the "name" property is available as req.params.name. This object defaults to {}.
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image:req.file.originalname,
        address:req.body.address 
    }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.userId
            });
        });
};



// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            } else {
                res.send({ message: "User with id " + req.params.userId + " deleted successfully!" });
            }

        }).catch(err => {
            return res.status(404).send({
                message: err
            });
        });
};