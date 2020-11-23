'use strict';
module.exports = (app,upload) => {
    const product = require('../controllers/product.controller.js');
    //create product
    app.post('/product',upload.single('image'), product.create);

    // Retrieve all product
    app.get('/product', product.findAll);

    //finding product by ID
    app.get('/product/:productId', product.findOne);

    // Update a product with productId
    app.put('/product/:productId', product.update);

    // Delete a product with productId
    app.delete('/product/:productId', product.delete);

    app.get('/getCountOfProducts',product.getCountOfProducts);
};