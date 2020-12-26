/******************************************
 *  Author : eyal shemuel
 *  Created On : Tue Dec 22 2020
 *  File : server.js.js
 *******************************************/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
// let TheUserDataBase = [{ id:"eyal", pass: "123" }];
let TheUserDataBase = [
  { UserID: 'eyal', pass: '123' },
  { UserID: 'eyal2', pass: '1233' },
];
let products = [
  {
    ProductName: 'bar',
    image:
      'data:image/jpeg;base64,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',
    price: '4$',
  },
];

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/U_info', (req, res) => {
  // const NewUditails = { id: req.body.UserID, pass: req.body.pass }; //the userID that the user typed -
  /*  const filteredArray = TheUserDataBase.filter((user) => user.id === NewUditails.id);
  let resultarry = filteredArray[0]; //in case we will find more the one take the first */
  const resultarry = TheUserDataBase.find(
    ({ UserID }) => UserID === req.body.UserID
  );
  if (resultarry != undefined) {
    if (
      req.body.UserID == resultarry.UserID &&
      req.body.pass == resultarry.pass
    ) {
      console.log('passed');
      res.cookie('userAuthorized', 'OK', { maxAge: 300 });
      res.send({
        ok: true,
      });
    } else {
      console.log('rejected');
      res.send({
        ok: false,
      });
    }
  } else {
    res.send({
      ok: false,
    });
    console.log('rong user name or password');
  }
});

// add user
app.post('/add_user', IsUserAllredyExist, (req, res, next) => {
  theUserEntersIsEmpty = true;
  IsUserAllredyExist = true;
  const pulledUserFromClaient = {
    UserID: req.body.UserID,
    pass: req.body.pass,
  }; //the userID that the user typed -
  console.log(pulledUserFromClaient);
  if (pulledUserFromClaient.UserID.length > 0) {
    theUserEntersIsEmpty = false;
    if (res.userExist) {
      res.send({
        OK: false,
        massege: `user named ${pulledUserFromClaient.UserID} is exist`,
      });
    } else {
      TheUserDataBase.push(req.body);
      res.send({
        OK: true,
        massege: `user named ${pulledUserFromClaient.UserID} is added`,
      });
    }
  } else {
    res.send({ OK: false, massege: 'you can not enter empty user' });
  }

  next();
});

function IsUserAllredyExist(req, res, next) {  // mideleWare that check if user exist in the dataBase
  const result = TheUserDataBase.find(
    ({ UserID }) => UserID === req.body.UserID
  );
  // console.log(result)
  if (result != undefined) {
    console.log('user exist', result);
    res.userExist = true;
  } else {
    console.log('New user', result);
    res.userExist = false;
  }
  next();
}

//the client get (ask/read) from server thr products
app.get('/read', (req, res) => {
  res.send({ ok: true, products });
});

app.post('/post', (req, res) => {
  //the client send/CREATE Product to the server 

  //console.log(req.body);
  products.push(req.body);
  //console.log(products);
  res.send({ ok: true, products });
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
