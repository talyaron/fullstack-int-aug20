"use strict";

var express = require('express');

var app = express();
var url = "mongodb+srv://reem:sh9968096@cluster0.owuec.mongodb.net/test"; //body parser

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
app.get('/api/geroup', function _callee(req, res) {
  var docs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Car.aggregate([{
            $match: {}
          }, {
            $group: {
              _id: '$name',
              carTypes: {
                $push: "$$ROOT"
              },
              sum: {
                $sum: '$price'
              }
            }
          }, {
            $project: {
              'sum': true,
              'carTypes': true
            }
          }]));

        case 2:
          docs = _context.sent;
          res.send(docs);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log('server listen on port ', port);
});