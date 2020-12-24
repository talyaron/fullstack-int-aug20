"use strict";

var express = require('express');

var app = express(); ///server;

var bodyParser = require('body-parser'); //CRUD


app.use(bodyParser.json());
var users = []; //mock data - database simulator

app.use(express["static"]('public'));
app.get('/read', function (req, res) {
  //the client get something from the server (also called READ)
  res.send({
    ok: true,
    users: users
  });
});
app.post("/post", function (req, res) {
  //the client send somthing to the server (also called CREATE)
  console.log(req.body);
  var isUserExists = false;
  users.forEach(function (user) {
    if (user.username === req.body.username) {
      isUserExists = true;
      return;
    }

    ;
  });

  if (!isUserExists) {
    users.push(req.body);
  }

  ;
  console.log(users);
  res.send({
    ok: true,
    users: users
  });
});
app.put("/update", function (req, res) {
  //the client update somthing to the server (also called UPDATE)
  //find index of user in users
  // update the arry in this index, and change password
  //return users
  res.send({
    ok: true
  });
});
app["delete"]("/delete", function (req, res) {
  //the client ask the server to delete somthing on the server (also called DELETE)
  var username = req.body.username; //find the index of the user in the array

  var userIndex = users.findIndex(function (user) {
    return user.username === username;
  }); //remove the user from the array

  users.splice(userIndex, 1);
  console.log(users); //return the users

  res.send({
    ok: true,
    users: users
  });
});
app.listen(3000, function () {
  console.log('listen 3000');
});