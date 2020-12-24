"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var cookieParser = require('cookie-parser');

app.use(cookieParser());
var prodacts = [];
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
app.put('/update-product', function (req, res) {
  var newName = req.body.newName;
  var newPrice = req.body.newPrice;
  var newImg = req.body.newImg;
  var Name = req.body.Name;
  var productIndex = products.findIndex(function (product) {
    return product.Name === Name;
  });
  products[productIndex].productName = newName;
  products[productIndex].productPrice = newPrice;
  products[productIndex].productIMG = newImg;
  console.log(products);
  res.send({
    ok: true,
    products: products
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});