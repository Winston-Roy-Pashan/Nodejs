'use strict';
module.exports = (app ) => {
    const category = require('../controllers/category.controller.js');
    //create category
    app.post('/category', category.create);

    // Retrieve all category
    app.get('/category', category.findAll);

    //finding category by ID
    app.get('/category/:categoryId', category.findOne);

    // Update a category with categoryId
    app.put('/category/:categoryId', category.update);

    // Delete a category with categoryId
    app.delete('/category/:categoryId', category.delete);
};