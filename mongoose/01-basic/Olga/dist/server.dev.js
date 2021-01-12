"use strict";

var express = require('express');

var app = express();
var url = "mongodb+srv://OlgaPan:lHwvtf8aIZl9BWpZ@cluster0.sxv7i.mongodb.net/test"; //body parser

var bodyParser = require('body-parser'); // parse various different custom JSON types as JSON


app.use(bodyParser.urlencoded({
  extended: false
})); // parse application/json

app.use(bodyParser.json());
app.use(express["static"]('public'));

var mongoose = require('mongoose');

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var Car = mongoose.model('Car', {
  name: String,
  price: Number
});
var bmw = new Car({
  name: 'renult',
  price: 1230
});
bmw.save().then(function () {
  return console.log('meow3');
});
var House = mongoose.model('house', {
  address: String,
  price: Number
});
var house1 = new House({
  address: 'Meir Grossman st 123/14',
  price: 7000000
});
house1.save().then(function (doc) {
  return console.log(doc);
});
/* app.get('/api/geroup', async (req, res) => {
    let docs = await Car.aggregate([
        { $match: {  } },
        {
            $group: {
                _id: '$name',
                carTypes: { $push: "$$ROOT" },
                sum: { $sum: '$price' }
            }
        },
        {$project:
            {'sum':true,'carTypes':true}
        }
    ])

    res.send(docs)
})
 */

var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log('server listen on port ', port);
});