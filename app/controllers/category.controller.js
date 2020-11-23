'use strict';
const Category = require('../models/category.model');

// Create and Save a new Category
exports.create = (req, res) => {
    // Validate request
    // console.log("re.body", req.body)
    if (!req.body.name) {
        //400 - status code
        return res.status(400).send({
            message: "Name cannot be empty"
        });
    }

    // Create a Category
    const category = new Category({
        name: req.body.name 
    });

    // Save Category in the database
    //Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occurred. then() and catch() is error handling methods

    // category.save(function (err, data) {
    //     if (err) {
    //         res.status(500).send({
    //             message: err.message || "Some error occurred while creating the Category."
    //         });
    //     } else {
    //         res.send(data);
    //     }

    // });
    category.save()
        .then(data => {
            //if no error then we will be sending data in the response
            res.send(data);
        }).catch(err => {
            // if error found, we will be sending error message in the response along with status code as 500
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Category."
            });
        });
};

// Retrieve and return all categorys from the database.
exports.findAll = (req, res) => {

    // Finds documents.
    //Mongoose models provide several static helper functions for CRUD operations. 
    Category.find()
        .then(categorys => {
            res.send(categorys);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categorys."
            });
        });
};

// Find a single category with a categoryId
exports.findOne = (req, res) => {
    //Finds a single document by its _id field. 
    Category.findById(req.params.categoryId)
        .then(category => {
            if (!category) {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.categoryId
                });
            }else{
                res.send(category);
            }
           
        }).catch(err => {
            
            return res.status(500).send({
                message: err
            });
        });
};

// Update a category identified by the categoryId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Category  can not be empty"
        });
    }

    // Find category and update it with the request body
    //An object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the "name" property is available as req.params.name. This object defaults to {}.
    Category.findByIdAndUpdate(req.params.categoryId, {
        name: req.body.name 
    }, { new: true })
        .then(category => {
            if (!category) {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.categoryId
                });
            }
            res.send(category);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.categoryId
                });
            }
            return res.status(500).send({
                message: "Error updating category with id " + req.params.categoryId
            });
        });
};


// Delete a category with the specified categoryId in the request
// Delete a category with the specified categoryId in the request
exports.delete = (req, res) => {
    Category.findByIdAndRemove(req.params.categoryId)
        .then(category => {
            if (!category) {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.categoryId
                });
            }else{
                res.send({ message: "Category with id "+req.params.categoryId+" deleted successfully!" });
            }
         
        }).catch(err => {
            return res.status(404).send({
                message: err
            });
            // if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            //     return res.status(404).send({
            //         message: "Category not found with id " + req.params.categoryId
            //     });
            // }
            // return res.status(500).send({
            //     message: "Could not delete category with id " + req.params.categoryId
            // });
        });
};