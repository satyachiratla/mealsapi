const express = require('express');
const bodyParser = require('body-parser');
const mealRoutes = require('./routes/meals');
const db = require('./DataBase/db');
require("dotenv").config();
const path = require('path');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

db().then(() => console.log('Db connected'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', mealRoutes);

// app.use(express.static(path.join(__dirname + '/public')));

app.listen(PORT);