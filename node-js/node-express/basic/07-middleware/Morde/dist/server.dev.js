"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express["static"]("public"));
var users = [{
  username: "morde",
  password: "123",
  role: "admin"
}, {
  username: "olga",
  password: "123",
  role: "public"
}];
var productsArray = [{
  title: "Porcshe Carrera",
  price: 130000,
  img: "https://cnet3.cbsistatic.com/img/jDrQMFPP_zbP_ucNrU4PblatNHo=/1200x675/2020/07/01/f9fd026c-cf70-4170-a1c6-53521c35a21a/2020-porsche-911-carrera-s-manual-001.jpg"
}, {
  title: "LG Fridge",
  price: 1200,
  img: "https://www.sbitanyhome.com/content/images/thumbs/0018804_lg-refrigerator-gr-m777ls-silver_550.jpeg"
}, {
  title: "Air-Jordan's",
  price: 850,
  img: "https://stockx.imgix.net/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607043976"
}];

function authUser(req, res, next) {
  var role = req.cookies.role;
  next();
}

app.post("/auth-user", function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password; // let isUserExist = false;

  var role = "denied";
  var indexUser = users.findIndex(function (user) {
    return user.username === username && user.password === password;
  });

  if (users[indexUser].role === "admin") {
    res.authorized = true;
  }

  if (indexUser > -1 && res.authorized == true) {
    // isUserExist = true;
    var _role = users[indexUser].role;
    res.cookie("role", _role, {
      maxAge: 20000,
      httpOnly: true
    });
    res.send({
      ok: true
    });
  } else {
    res.cookie("role", role, {
      maxAge: 20000,
      httpOnly: true
    });
    res.send({
      ok: false
    });
  }
});
app.get("/get-products-array", function (req, res) {
  res.send({
    productsArray: productsArray
  });
});
app.post("/send-new-price", function (req, res) {
  var _req$body2 = req.body,
      newPrice = _req$body2.newPrice,
      productToUpdate = _req$body2.productToUpdate;
  var productIndex = productsArray.findIndex(function (product) {
    return product.title === productToUpdate;
  });

  if (newPrice == "") {
    console.log("Sorry, You didn't enter a valid number");
  } else {
    productsArray[productIndex].price = newPrice;
  }

  res.send({
    status: 200
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});