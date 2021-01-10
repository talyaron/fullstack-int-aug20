"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var url = 'mongodb+srv://avichai:123@cluster0.7lig6.mongodb.net/test';
var Schema = mongoose.Schema;
app.use(bodyParser.json());
app.use(express["static"]('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
var Car = mongoose.model('Car', {
  name: String,
  price: Number
});
var bmw = new Car({
  name: 'Hundai',
  price: 60000
}); // bmw.save().then(doc => console.log(doc)).catch(e => { console.log(e) });

var User = mongoose.model('User', {
  // scheme for adding user/email
  email: {
    type: String,
    unique: true,
    // if email exist in db section, will not be created!
    required: true // must be here or wont be added to db.

  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  when: {
    type: Date,
    // date type
    "default": Date.now // give default date if user does not enter date.

  }
});
var user = new User({
  email: 'aftat@gmail.com',
  password: '123',
  username: '123'
}); // user.save().then(data => console.log(data)).catch(e => { console.log(e) });

app.get('/users', function (req, res) {
  console.log('finding users.');
  User.find({}).exec(function (err, info) {
    if (err) {
      res.send({
        ok: false
      });
    } else {
      res.json(info);
    }
  });
});
app.get('/users/:id', function (req, res) {
  console.log('finding user.');
  User.findOne({
    _id: req.params.id
  }).exec(function (err, user) {
    if (err) {
      res.send({
        ok: false
      });
    } else {
      console.log(user);
      res.send(user);
    }
  });
});
app.post('/users', function (req, res) {
  var newUser = new User();
  newUser.email = req.body.email;
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.save().then(function (user) {
    return console.log(user);
  }, res.send(user))["catch"](function (e) {
    return console.log(e);
  });
});
app.post('/users2', function (req, res) {
  User.create(req.body).then(function (user) {
    return console.log(user);
  }, res.send(user))["catch"](function (e) {
    return console.log(e);
  });
});
app.put('/user/:id', function (req, res) {
  User.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: {
      email: req.body.email
    }
  }, function (err, newUser) {
    if (err) {
      console.log('error');
    } else {
      console.log(newUser);
      res.send(newUser);
    }
  });
});
app["delete"]('/user/:id', function (req, res) {
  User.findOneAndRemove({
    _id: req.params.id
  }, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log("deleteing user ".concat(user));
      res.sendStatus(204);
    }
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log('server listen on port ', port);
});