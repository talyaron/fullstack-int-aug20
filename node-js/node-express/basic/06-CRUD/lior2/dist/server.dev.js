"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var cookieParser = require('cookie-parser');

app.use(cookieParser());
var prodacts = [];
app.use(express["static"]('public')); // app.get('/read', (req, res) => {
//     res.send({ ok: true, prodacts })
// })

app.post('/post', function (req, res) {
  console.log(); // res.send({ products })
  // let prodactExist = false ;
  // prodacts.forEach(prodact =>{
  //     if (product.name === req.body.name) {
  //         prodactExist = true
  //         console.log('alreay have')
  //     }
  // })
  // if (!prodactExist) {
  //     products.push(req.body)
  // }
  // console.log(products)
  // res.send({ ok: true, products })
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listen on port ".concat(port));
});