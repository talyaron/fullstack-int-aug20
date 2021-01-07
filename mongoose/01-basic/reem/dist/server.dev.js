"use strict";

var express = require('express');

var app = express(); //body parser

var bodyParser = require('body-parser'); // parse application/json


app.use(bodyParser.json());
app.use(express["static"]('public')); // mongoose

var mongoose = require('mongoose');

var url = 'mongodb+srv://reem:sh9968096@cluster0.owuec.mongodb.net/test';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var Car = mongoose.model('Car', {
  //collection
  name: String,
  price: Number
});
var bmw = new Car({
  name: 'Hundai',
  price: 60000
}); // bmw.save().then(doc => console.log(doc)).catch(e=>{console.log(e)});

var Man = mongoose.model('Man', {
  address: String,
  price: Number
});
var house1 = new Man({
  address: 'tcharnichovski st 123/14',
  price: 7000000
});
house1.save().then(function (doc) {
  return console.log(doc);
})["catch"](function (e) {
  console.log(e);
}); // app.get('/api/geroup', async (req, res) => {
//     let docs = await Car.aggregate([
//         { $match: {  } },
//         {
//             $group: {
//                 _id: '$name',
//                 carTypes: { $push: "$$ROOT" },
//                 sum: { $sum: '$price' }
//             }
//         },
//         {$project:
//             {'sum':true,'carTypes':true}
//         }
//     ])
//     res.send(docs)
// })

var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log('server listen on port ', port);
});