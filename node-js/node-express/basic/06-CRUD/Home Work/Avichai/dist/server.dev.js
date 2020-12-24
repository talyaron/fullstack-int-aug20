"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
var users = [];
app.use(express["static"]('public'));
var products = [];
app.post('/post-product', function (req, res) {
  var doesProductExist = false;
  products.forEach(function (product) {
    if (product.productName === req.body.productName) {
      doesProductExist = true;
      console.log('alreay has this product');
    }
  });

  if (!doesProductExist) {
    products.push(req.body);
  }

  console.log(products);
  res.send({
    ok: true,
    products: products
  });
});
app["delete"]('/delete', function (req, res) {
  var productName = req.body.productName;
  var productIndex = products.findIndex(function (product) {
    return product.productName === productName;
  });
  products.splice(productIndex, 1);
  res.send({
    products: products
  });
});
app.get('/get-products', function (req, res) {
  res.send({
    ok: true,
    products: products
  });
});
app.put('/update-product', function (req, res) {
  // the client UPDATES something to the server. (also called UPDATE)
  var newProductName = req.body.newProductName;
  var newProductPrice = req.body.newProductPrice;
  var newProductImg = req.body.newProductImg;
  var productName = req.body.productName;
  var productIndex = products.findIndex(function (product) {
    return product.productName === productName;
  });
  products[productIndex].productName = newProductName;
  products[productIndex].productPrice = newProductPrice;
  products[productIndex].productIMG = newProductImg;
  console.log(products);
  res.send({
    ok: true,
    products: products
  });
});
app.listen(3000, function () {
  console.log('listen 3000');
});