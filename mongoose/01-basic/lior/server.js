const express = require('express');
const app = express();
const url = "mongodb+srv://tal1:SA7b7sT6TOsrpovW@tal-test1-m39if.mongodb.net/cars?retryWrites=true&w=majority";

//body parser
var bodyParser = require('body-parser');
// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'))

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Car = mongoose.model('Car', {
    name: String,
    price: Number
});