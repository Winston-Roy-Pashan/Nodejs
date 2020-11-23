'use strict';
const Brand = require('../models/brand.model');
const Product = require('../models/product.model');

// Create and Save a new Brand
exports.create = (req, res) => {
    // Validate request
 console.log("re.body", req.file);
    if (!req.body) {
        //400 - status code
        return res.status(400).send({
            message: "Name cannot be empty"
        });
    }

    // Create a Brand
    const brand = new Brand({
        name: req.body.name,
        category: req.body.category,
        logo:req.file.originalname
    });


    brand.save()
        .then(data => {
            //if no error then we will be sending data in the response
            res.send(data);
            //console.log("req file ..."+ req.body);
        }).catch(err => {
            // if error found, we will be sending error message in the response along with status code as 500
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Brand."
            });
        });
};

// Retrieve and return all brands from the database.
exports.findAll = (req, res) => {
   

  //  Finds documents.
   // Mongoose models provide several static helper functions for CRUD operations. 
    Brand.find()
        // .$group[{_id: "$name", total_Product: { $sum: 1 }}]
        .populate({ path: 'category', select: 'name' })
        .then(brands => {
            for (let index = 0; index < brands.length; index++) {
                brands[index].logo = 'localhost:3000/image/' + brands[index].logo;
                // const element = books[index];

            }
            res.send(brands);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving brands."
            });
        });
};

// Find a single brand with a brandId
exports.findOne = (req, res) => {
    //Finds a single document by its _id field. 
    Brand.findById(req.params.brandId)
        .then(brand => {
            if (!brand) {
                return res.status(404).send({
                    message: "Brand not found with id " + req.params.brandId
                });
            } else {
                res.send(brand);
            }

        }).catch(err => {

            return res.status(500).send({
                message: err
            });
        });
};

// Update a brand identified by the brandId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Brand  can not be empty"
        });
    }

    // Find brand and update it with the request body
    //An object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the "name" property is available as req.params.name. This object defaults to {}.
    Brand.findByIdAndUpdate(req.params.brandId, {
        name: req.body.name,
        category: req.body.category,
        logo: req.body.logo
    }, { new: true })
        .then(brand => {
            if (!brand) {
                return res.status(404).send({
                    message: "Brand not found with id " + req.params.brandId
                });
            }
            res.send(brand);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Brand not found with id " + req.params.brandId
                });
            }
            return res.status(500).send({
                message: "Error updating brand with id " + req.params.brandId
            });
        });
};



// Delete a brand with the specified brandId in the request
exports.delete = (req, res) => {
    Brand.findByIdAndRemove(req.params.brandId)
        .then(brand => {
            if (!brand) {
                return res.status(404).send({
                    message: "Brand not found with id " + req.params.brandId
                });
            } else {
                res.send({ message: "Brand with id " + req.params.brandId + " deleted successfully!" });
            }

        }).catch(err => {
            return res.status(404).send({
                message: err
            });
        });
};
exports.countproduct = (req, res) => {

    Product.aggregate([
        {
            $lookup: {
                from: 'brands',    //collection name 
                localField: 'brand',  //field present in brand collection
                foreignField: '_id',   //field present in product collection
                as: 'product' //field in review
            }

        },
        {
            $group:
            {
                _id: "$product",
                total_Product: { $sum: 1 }
            },
        },
        {
            $project:
            {
                _id: 0,
                Brand: '$_id',
                Total_Product: '$total_Product'
            }

        }

    ])
        .then(brand => {
            res.send(brand);
        }).catch(err => {
            return res.status(500).send({
                message: err
            });
        });
};
