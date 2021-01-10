"use strict";

// npm i express mongoose body-parser cookie-parser
// npm i express mongoose body-parser cookie-parser
// npm i express mongoose body-parser cookie-parser
// npm i express mongoose body-parser cookie-parser
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var url = 'mongodb+srv://avichai:123@cluster0.7lig6.mongodb.net/test';

var cookieParser = require('cookie-parser');

app.use(cookieParser());
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
    unique: true,
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

  },
  role: {
    type: String,
    "default": 'public'
  }
});
app.get('/users', function (req, res) {
  //GET-  show all users
  console.log('finding users.');
  User.find({}, function (err, users) {
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
  console.log('finding user by id.');
  User.findOne({
    _id: req.params.id
  }, function (err, user) {
    if (err) {
      res.send({
        ok: false
      });
    } else {
      console.log("deleteing user ".concat(user));
      res.send({
        ok: true,
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
      User.find({}, function (err, users) {
        if (err) {
          res.send({
            ok: false
          });
        } else {
          console.log(newUser);
          res.send({
            newUser: newUser,
            users: users
          });
        }
      });
    }
  });
});
app.post('/login', function (req, res) {
  // valid logn
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;
  User.find({}, function _callee(err, users) {
    var userValid, role;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userValid = false;
            role = 'denied';

            if (!err) {
              _context.next = 6;
              break;
            }

            res.send({
              ok: false
            });
            _context.next = 14;
            break;

          case 6:
            users.forEach(function (user) {
              if (user.username === username || user.email === username && user.password === password) {
                console.log('USERNAME OR EMAIL FOUND');

                if (user.password === password) {
                  userValid = true;
                }
              } else {
                console.log('not found');
              }
            });

            if (!(userValid === true)) {
              _context.next = 12;
              break;
            }

            _context.next = 10;
            return regeneratorRuntime.awrap(giveRole(username));

          case 10:
            role = _context.sent;
            console.log('user role: ' + role);

          case 12:
            res.cookie('userPower', role, {
              maxAge: 5000000,
              httpOnly: true
            });
            res.send({
              userValid: userValid
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});

function giveRole(username) {
  var role;
  return regeneratorRuntime.async(function giveRole$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          role = 'denied';
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            $or: [{
              username: username
            }, {
              email: username
            }]
          }, function (err, user) {
            if (err) {
              console.log(err);
            } else {
              role = user.role;
            }
          }));

        case 3:
          return _context2.abrupt("return", role);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

app.get('/checkCookie', function (req, res) {
  var cookie = req.cookies;
  res.send({
    cookie: cookie
  });
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
  //PUT- find user by id and update info. 
  var _req$body2 = req.body,
      email = _req$body2.email,
      username = _req$body2.username;
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
      User.find({}, function (err, users) {
        if (err) {
          res.send({
            ok: false
          });
        } else {
          console.log(newUser);
          res.send({
            newUser: newUser,
            users: users
          });
        }
      });
    }
  });
});
app["delete"]('/users/:id', function (req, res) {
  //DELETE-  find user and delete 
  User.findOneAndRemove({
    _id: req.params.id
  }, function (err, user) {
    if (err) {
      res.send({
        ok: false
      });
    } else {
      User.find({}, function (err, users) {
        if (err) {
          res.send({
            ok: false
          });
        } else {
          console.log("deleteing user ".concat(user));
          res.send({
            ok: true,
            users: users
          });
        }
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