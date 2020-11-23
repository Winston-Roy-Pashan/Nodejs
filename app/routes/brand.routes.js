'use strict';
module.exports = (app,upload) => {
    const brand = require('../controllers/brand.controller.js');
    //create brand
   app.post('/brand', upload.single('logo'), brand.create);

    // Retrieve all brand
    app.get('/brand', brand.findAll);

    //finding brand by ID
    app.get('/brand/:brandId', brand.findOne);

    // Update a brand with brandId
    app.put('/brand/:brandId', brand.update);

    // Delete a brand with brandId
    app.delete('/brand/:brandId', brand.delete);

    //calling user defined function
    app.get('/countproduct', brand.countproduct);
    
};