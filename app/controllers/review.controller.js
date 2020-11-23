'use strict';
const Review = require('../models/review.model');

// Create and Save a new Review
exports.create = (req, res) => {
    // Validate request
    // console.log("re.body", req.body)
    if (!req.body) {
        //400 - status code
        return res.status(400).send({
            message: "Name cannot be empty"
        });
    }

    // Create a Review
    const review = new Review({
        product: req.body.product,
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        user: req.body.user
    });


    review.save()
        .then(data => {
            //if no error then we will be sending data in the response
            res.send(data);
        }).catch(err => {
            // if error found, we will be sending error message in the response along with status code as 500
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Review."
            });
        });
};

// Retrieve and return all reviews from the database.
exports.findAll = (req, res) => {

    // Finds documents.
    //Mongoose models provide several static helper functions for CRUD operations. 
    Review.find()
        .populate([{ path: 'product', select: 'name' }, { path: 'user', select: 'name' }])
        .then(reviews => {
            res.send(reviews);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving reviews."
            });
        });
};

// Find a single review with a reviewId
exports.findOne = (req, res) => {
    //Finds a single document by its _id field. 
    Review.findById(req.params.reviewId)
        .then(review => {
            if (!review) {
                return res.status(404).send({
                    message: "Review not found with id " + req.params.reviewId
                });
            } else {
                res.send(review);
            }

        }).catch(err => {

            return res.status(500).send({
                message: err
            });
        });
};

// Update a review identified by the reviewId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Review  can not be empty"
        });
    }

    // Find review and update it with the request body
    //An object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the "name" property is available as req.params.name. This object defaults to {}.
    Review.findByIdAndUpdate(req.params.reviewId, {
        product: req.body.product,
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        user: req.body.user
    }, { new: true })
        .then(review => {
            if (!review) {
                return res.status(404).send({
                    message: "Review not found with id " + req.params.reviewId
                });
            }
            res.send(review);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Review not found with id " + req.params.reviewId
                });
            }
            return res.status(500).send({
                message: "Error updating review with id " + req.params.reviewId
            });
        });
};



// Delete a review with the specified reviewId in the request
exports.delete = (req, res) => {
    Review.findByIdAndRemove(req.params.reviewId)
        .then(review => {
            if (!review) {
                return res.status(404).send({
                    message: "Review not found with id " + req.params.reviewId
                });
            } else {
                res.send({ message: "Review with id " + req.params.reviewId + " deleted successfully!" });
            }

        }).catch(err => {
            return res.status(404).send({
                message: err
            });
        });
};
//to get the product details along with average rating
exports.getProductRating = (req, res) => {
    Review.aggregate([
        // {
        //     $lookup: {
        //         from: 'products',    //collection name 
        //         localField: 'product',  //field present in review collection
        //         foreignField: '_id',   //field present in product collection
        //         as: 'product' //field in review
        //     }

        // },
        // { $unwind: '$product' },
        // {
        //     $group:
        //     {
        //         _id: "$product",
        //         Average_Rating: { $avg: "$rating" }
        //     }
        // },
        // {
        //     $project: {
        //        _id: 0,
        //         product: '$_id',
        //         Average_Rating: '$Average_Rating'
        //     }
        // }
        {$lookup: {
            from:'products',
            localField:'product',
            foreignField:'_id',
            as:'product'
            }
        },
        {$unwind:'$product'
        },
        {$group: {
                    _id:'$product',
                    avg: {$avg:'$rating'
                },
            }
        },
        {
                          $project: {
                                _id: 0,
                                product:'$_id' ,     
                                avg:'$avg'
            }
        },
        {
                       $lookup: {
                           from:'brands',
                           localField:'product.brand',
                           foreignField:'_id',
                           as:'brand'
            }
        },
        {$unwind:'$brand'}
    ])
        .then(brand => {
            res.send(brand);
        }).catch(err => {
            return res.status(500).send({
                message: err
            });
        });
};