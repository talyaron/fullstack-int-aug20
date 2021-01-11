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
app.post('/users/find', function (req, res) {
  //GET-  find user by id localhost:3000/users/USER-ID-HERE
  console.log('finding users by email/username.');
  var userID = req.body.userID;
  User.find({
    $or: [{
      email: {
        $regex: userID
      }
    }, {
      username: {
        $regex: userID
      }
    }]
  }, function (err, users) {
    if (err) {
      res.send({
        ok: false
      });
    } else {
      console.log("user found: ".concat(users));
      res.send({
        ok: true,
        users: users
      });
    }
  });
});
app.post('/users/create', function (req, res) {
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
}); // app.post('/users2', (req, res) => { //POST-  add new user Method 2 POST - FORM: EMAIL,USERNAME,PASSWORD
//     User.create(req.body).then(user => console.log(user), res.send(user)).catch(e => console.log(e))
// })

function findUserForEdit(userID) {
  var findUserInfo = User.findOne({
    $or: [{
      email: userID
    }, {
      username: userID
    }]
  }).exec();
  return findUserInfo;
}

;
app.put('/users/edit', function _callee(req, res) {
  var _req$body, userID, email, username, findUserInfo;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //PUT- find user by id and update info. 
          _req$body = req.body, userID = _req$body.userID, email = _req$body.email, username = _req$body.username;
          _context.next = 3;
          return regeneratorRuntime.awrap(findUserForEdit(userID));

        case 3:
          findUserInfo = _context.sent;

          if (findUserInfo.length === 1) {
            if (email === '') {
              email = findUserInfo[0].email;
            }

            if (username === '') {
              username = findUserInfo[0].username;
            }
          }

          User.findOneAndUpdate({
            $or: [{
              email: userID
            }, {
              username: userID
            }]
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
                } else if (newUser === null) {
                  res.send({
                    ok: false
                  });
                } else {
                  res.send({
                    newUser: newUser,
                    users: users
                  });
                }
              });
            }
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
app["delete"]('/users/delete', function (req, res) {
  //DELETE-  find user and delete 
  var user = req.body.user;
  User.findOneAndRemove({
    $or: [{
      email: user
    }, {
      username: user
    }]
  }, function _callee2(err, user) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
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
                } else if (user === null) {
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

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});

function findUsers(infoObj) {
  var email, username, users;
  return regeneratorRuntime.async(function findUsers$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          email = false;
          username = false;
          users = [];

          if (typeof infoObj.user != "undefined") {
            username = true;
          }

          if (typeof infoObj.email != "undefined") {
            email = true;
          }

          if (!(infoObj.user === '' && infoObj.email === '')) {
            _context3.next = 10;
            break;
          }

          _context3.next = 8;
          return regeneratorRuntime.awrap(User.find({}, function (err, user) {
            if (err) {
              console.log('err');
            } else {
              users = user;
            }
          }));

        case 8:
          _context3.next = 28;
          break;

        case 10:
          if (!(email && username)) {
            _context3.next = 15;
            break;
          }

          _context3.next = 13;
          return regeneratorRuntime.awrap(User.find({
            $or: [{
              username: infoObj.user
            }, {
              email: infoObj.email
            }]
          }, function (err, user) {
            if (err) {
              console.log('err');
            } else {
              users = user;
            }
          }));

        case 13:
          _context3.next = 28;
          break;

        case 15:
          if (!(email === false && username === false)) {
            _context3.next = 19;
            break;
          }

          console.log('nothing entered');
          _context3.next = 28;
          break;

        case 19:
          if (!(email === true && username === false)) {
            _context3.next = 25;
            break;
          }

          console.log('only email found');
          _context3.next = 23;
          return regeneratorRuntime.awrap(User.find({
            email: infoObj.email
          }, function (err, user) {
            if (err) {
              console.log('err');
            } else {
              users = user;
            }
          }));

        case 23:
          _context3.next = 28;
          break;

        case 25:
          if (!(email === false && username === true)) {
            _context3.next = 28;
            break;
          }

          _context3.next = 28;
          return regeneratorRuntime.awrap(User.find({
            username: infoObj.user
          }, function (err, user) {
            if (err) {
              console.log('err');
            } else {
              users = user;
            }
          }));

        case 28:
          if (!(users.length === 0)) {
            _context3.next = 30;
            break;
          }

          return _context3.abrupt("return", null);

        case 30:
          return _context3.abrupt("return", users);

        case 31:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function random() {
  var sendUser;
  return regeneratorRuntime.async(function random$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(findUsers({
            user: '1',
            email: '123'
          }));

        case 2:
          sendUser = _context4.sent;

          if (sendUser === null) {
            console.log('no user found');
          } else {
            console.log(sendUser);
          }

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}

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
app.post('/login', function (req, res) {
  // valid logn
  var _req$body2 = req.body,
      username = _req$body2.username,
      password = _req$body2.password;
  User.find({}, function _callee3(err, users) {
    var userValid, role;
    return regeneratorRuntime.async(function _callee3$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            userValid = false;
            role = 'denied';

            if (!err) {
              _context5.next = 6;
              break;
            }

            res.send({
              ok: false
            });
            _context5.next = 14;
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
              _context5.next = 12;
              break;
            }

            _context5.next = 10;
            return regeneratorRuntime.awrap(giveRole(username));

          case 10:
            role = _context5.sent;
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
            return _context5.stop();
        }
      }
    });
  });
});

function giveRole(username) {
  var role;
  return regeneratorRuntime.async(function giveRole$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          role = 'denied';
          _context6.next = 3;
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
          return _context6.abrupt("return", role);

        case 4:
        case "end":
          return _context6.stop();
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
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log('server listen on port ', port);
});