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
mongoose.set('returnOriginal', false); // will show updated info when updating a user.

var User = mongoose.model('User', {
  // scheme for adding user
  email: {
    type: String,
    unique: true,
    // if email exist in db section, will not be created!
    required: true // must have email

  },
  username: {
    type: String,
    required: true // must have username

  },
  password: {
    type: String,
    required: true // must have password

  },
  whenUserCreated: {
    type: Date,
    // date type
    "default": Date.now // give default date if user does not enter date.

  }
});
app.get('/users', function (req, res) {
  //GET-  show all users
  console.log('finding users.');
  User.find({}).exec(function (err, users) {
    if (err) {
      res.send({
        ok: false
      });
    } else {
      res.send({
        users: users
      });
    }
  });
});
app.get('/users/:id', function (req, res) {
  //GET-  find user by id localhost:3000/users/USER-ID-HERE
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
      res.send({
        user: user
      });
    }
  });
});
app.post('/users', function (req, res) {
  //POST- add new user Method 1 - FORM: EMAIL,USERNAME,PASSWORD
  var newUser = new User();
  newUser.email = req.body.email;
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.save(function (err, newUser) {
    if (err) {
      console.log('User with this email already exist');
      res.send({
        ok: false
      });
    } else {
      console.log(newUser);
      res.send({
        newUser: newUser
      });
    }
  }); // .then(newUser => {
  //     // console.log(newUser) 
  //     console.log(keyPattern)
  //     res.send({ newUser })
  // })
  // .catch(e => console.log('err'))
});
app.post('/users2', function (req, res) {
  //POST-  add new user Method 2 POST - FORM: EMAIL,USERNAME,PASSWORD
  User.create(req.body).then(function (user) {
    return console.log(user);
  }, res.send(user))["catch"](function (e) {
    return console.log(e);
  });
});
app.put('/users/:id', function (req, res) {
  //PUT- find user by id and update info. localhost:3000/users/USER-ID-HERE
  var _req$body = req.body,
      email = _req$body.email,
      username = _req$body.username;
  User.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: {
      email: email,
      username: username
    }
  }, function (err, newUser) {
    if (err) {
      console.log('error');
      res.send({
        ok: false
      });
    } else {
      console.log(newUser);
      res.send({
        newUser: newUser
      });
    }
  });
});
app["delete"]('/users/:id', function (req, res) {
  //DELETE-  find user and delete localhost:3000/users/USER-ID-HERE
  User.findOneAndRemove({
    _id: req.params.id
  }, function (err, user) {
    if (err) {
      res.send({
        ok: false
      });
    } else {
      console.log("deleteing user ".concat(user));
      res.send({
        ok: true
      });
    }
  });
});
app["delete"]('/deleteAll', function (req, res) {
  //DELETE-  find user and delete localhost:3000/users/USER-ID-HERE
  User.deleteMany({}, function (err, user) {
    if (err) {
      console.log('err');
      res.send({
        ok: false
      });
    } else {
      res.send({
        ok: true
      });
    }
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log('server listen on port ', port);
});