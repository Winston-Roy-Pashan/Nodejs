'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

let multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads');
    },
    filename: function (req, file, cb) {
        let fileName = file.originalname;
        //image-20201019
        cb(null, fileName);
    }
});

let upload = multer({ storage: storage });




// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

require('./app/routes/category.routes.js')(app);
require('./app/routes/brand.routes.js')(app , upload);
require('./app/routes/product.routes.js')(app, upload);
require('./app/routes/review.routes.js')(app);
require('./app/routes/user.routes.js')(app , upload);


// listen for requests
app.listen(PORT, () => {
    console.log("Server is listening on port "+PORT);
});
app.use('/image',  express.static(__dirname + "/uploads"));
    