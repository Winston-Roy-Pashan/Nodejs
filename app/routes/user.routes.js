'use strict';
module.exports = (app , upload) => {
    const user = require('../controllers/user.controller.js');
    //create user
    app.post('/user',upload.single('image'), user.create);

    // Retrieve all user
    app.get('/user', user.findAll);

    //finding user by ID
    app.get('/user/:userId', user.findOne);

    // Update a user with userId
    app.put('/user/:userId', user.update);

    // Delete a user with userId
    app.delete('/user/:userId', user.delete);
};