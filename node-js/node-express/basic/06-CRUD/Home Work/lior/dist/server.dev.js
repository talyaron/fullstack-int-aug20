"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var cookieParser = require('cookie-parser');

app.use(cookieParser());
var prodacts = [{
  img: 'https://www.hobby-3.co.il/media/main/IMG_1088.jpg',
  name: 'Wooden sewing box',
  price: '25'
}, {
  img: 'https://www.ambat4u.co.il/images/Products/big/0_1549796075.JPG',
  name: 'Luxurious wooden bench for the bathroom',
  price: '250'
}, {
  img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/1995674/large/32b65db720face9fdb729bd04cb6b817.jpg',
  name: 'Solid wood baby playpen',
  price: '500'
}];
app.use(express["static"]('public'));
app.get('/read', function (req, res) {
  res.send({
    ok: true,
    prodacts: prodacts
  });
});
app.post("/post", function (req, res) {
  console.log(req.body); //     let isUserExists = false;
  //     users.forEach(user => {
  //         if (user.username === req.body.username) {
  //             isUserExists = true
  //             return;
  //         };
  //     });
  //     if (!isUserExists) {
  //         users.push(req.body);
  //     };
  //     console.log(users);
  //     res.send({ ok: true, users })
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});