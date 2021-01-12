const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

const mongoose = require('mongoose');
const url = "mongodb+srv://myUser:gNRiLkhrwsFcHut6@cluster0.gt18p.mongodb.net/test";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const lists = mongoose.model('list', {
    name: String,
    price: Number
});

const bmw = new Users({ name: 'hillel', price: 12345 });
bmw.save().then(doc => console.log(doc)).catch(e => { console.log(e) });
