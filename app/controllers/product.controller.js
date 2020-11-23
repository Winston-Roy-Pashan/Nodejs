'use strict';
const Product = require('../models/product.model');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    // console.log("re.body", req.body)
    if (!req.body) {
        //400 - status code
        return res.status(400).send({
            message: "Name cannot be empty"
        });
    }

    // Create a Product
    const product = new Product({
        name: req.body.name,
        image: req.file.originalname,
        price: req.body.price,
        quantity: req.body.price,
        features: req.body.features,
        brand: req.body.brand
    });


    product.save()
        .then(data => {
            //if no error then we will be sending data in the response
            res.send(data);
        }).catch(err => {
            // if error found, we will be sending error message in the response along with status code as 500
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Product."
            });
        });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    // Finds documents.
    //Mongoose models provide several static helper functions for CRUD operations. 
    Product.find()
        .populate({ path: 'brand', select: 'name' })
        .then(products => {
            for (let index = 0; index < products.length; index++) {
                products[index].image = 'localhost:3000/image/' + products[index].image;
            }
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
    //Finds a single document by its _id field. 
    Product.findById(req.params.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.productId
                });
            } else {
                res.send(product);
            }

        }).catch(err => {

            return res.status(500).send({
                message: err
            });
        });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Product  can not be empty"
        });
    }

    // Find product and update it with the request body
    //An object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the "name" property is available as req.params.name. This object defaults to {}.
    Product.findByIdAndUpdate(req.params.productId, {
        name: req.body.name,
        image: req.file.originalname,
        price: req.body.price,
        quantity: req.body.price,
        features: req.body.features,
        brand: req.body.brand

    }, { new: true })
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.productId
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.productId
                });
            }
            return res.status(500).send({
                message: "Error updating product with id " + req.params.productId
            });
        });
};



// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.productId
                });
            } else {
                res.send({ message: "Product with id " + req.params.productId + " deleted successfully!" });
            }

        }).catch(err => {
            return res.status(404).send({
                message: err
            });
        });
};
exports.getCountOfProducts = (req, res) => {
    let query = {};
    query.brand = req.query.brand;
    Product.count(query)
        .then(product => {
            res.send({count:product});
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    };