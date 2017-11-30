const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users');
//const apartments = require('./routes/apartments');
//const shoppingLists = require('./routes/shoppingLists');

const url = 'mongodb://localhost/RoommateDB';
mongoose.connect(url);

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// User Management
app.use('/api/users', users);

// Apartment Management
//app.use('/api/apartments', apartments);

// Shopping List Management
//app.use('api/shoppingLists', shoppingLists);

app.listen(3000);
console.log('Listening on port 3000...');