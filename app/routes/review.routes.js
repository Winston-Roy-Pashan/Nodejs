'use strict';
module.exports = (app) => {
    const review = require('../controllers/review.controller.js');
    //create review
    app.post('/review', review.create);

    // Retrieve all review
    app.get('/review', review.findAll);

    //finding review by ID
    app.get('/review/:reviewId', review.findOne);

    // Update a review with reviewId
    app.put('/review/:reviewId', review.update);

    // Delete a review with reviewId
    app.delete('/review/:reviewId', review.delete);

    //API to get the product details along with average rating.
    app.get('/getProductRating', review.getProductRating);
};