"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express["static"]('public'));
var products = [{
  name: "cake1",
  price: "5$",
  picture: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-e1897d5.jpg?quality=90&webp=true&resize=375,341‬"
}, {
  name: "cake2",
  price: "6$",
  picture: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-e1897d5.jpg?quality=90&webp=true&resize=375,341"
}, {
  name: "cake3",
  price: "5$",
  picture: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-e1897d5.jpg?quality=90&webp=true&resize=375,341"
}, {
  name: "cupcake1",
  price: "5$",
  picture: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes-600x900.jpg"
}, {
  name: "cupcake2",
  price: "5$",
  picture: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes-600x900.jpg"
}, {
  name: "cupcake3",
  price: "7$",
  picture: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes-600x900.jpg"
}, {
  name: "sweet1",
  price: "6$",
  picture: "https://www.pinkcitypost.com/wp-content/uploads/2018/11/pheeni-jaipur6545.jpg"
}, {
  name: "sweet2",
  price: "5$",
  picture: "https://www.pinkcitypost.com/wp-content/uploads/2018/11/pheeni-jaipur6545.jpg"
}, {
  name: "sweet3",
  price: "5$",
  picture: "https://www.pinkcitypost.com/wp-content/uploads/2018/11/pheeni-jaipur6545.jpg"
}];
app.get('/allproducts', function (req, res) {
  //the client get something from the server (also called READ)
  res.send(products);
});
app["delete"]("/deleteproduct", function (req, res) {
  //the client ask the server to delete somthing on the server (also called DELETE)
  var product = req.body;
  console.log(product); //find the index of the user in the array

  var productIndex = products.findIndex(function (prod) {
    return prod.name === product.name;
  });
  console.log(product.name);
  console.log(productIndex); //remove the user from the array

  products.splice(productIndex, 1); //return the users

  res.send({
    ok: true,
    products: products
  });
});
app.post("/addproduct", function (req, res) {
  //the client send somthing to the server (also called CREATE)
  console.log(req.body);
  var isProductExists = false;
  products.forEach(function (product) {
    if (product.name === req.body.name) {
      isProductExists = true;
      return;
    }

    ;
  });

  if (!isProductExists) {
    products.push(req.body);
  }

  ;
  console.log(products);
  res.send({
    ok: true,
    products: products
  });
});
app.put("/updateproduct", function (req, res) {
  //the client update somthing to the server (also called UPDATE)
  var updateProduct = req.body;
  console.log(updateProduct.newProduct.name);
  var productIndex = products.findIndex(function (prod) {
    return prod.name === updateProduct.name;
  });
  console.log(productIndex);
  products.splice(productIndex, 1, updateProduct.newProduct);
  res.send({
    products: products
  });
});
app.listen(3000, function () {
  console.log('listen 3000');
});