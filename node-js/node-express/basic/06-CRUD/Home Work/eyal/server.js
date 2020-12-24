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

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'))

const users = [];
const products = [];

app.post('/U_info', (req, res) => {
    const { myUserIDs } = req.cookies; //get all cookies
    const userIdArry = JSON.parse(`[${myUserIDs}]`); // set the cookie as object
    const NewUditails = { id: req.body.UserID, pass: req.body.mypass }; //the userID that the user typed - 
    const filteredArray = userIdArry.filter((user) => user.id === NewUditails.id);
    let resultarry = filteredArray[0]; //in case we will find more the one take the first
     
    if (
      req.body.UserID == resultarry.id &&
      req.body.mypass == resultarry.pass
    ) {
      console.log('passed');
      res.cookie('userAuthorized', 'OK', { maxAge: 300 });
      // res.redirect(307,'/ok.html');
      res.send({
      ok: true,
      });
    } else {
      console.log('rejected');
      res.send({
      ok: false,
      });
    }
   
  });
  
  // add user to cookie
  app.post('/Change_user', (req, res) => {
    let { myUserIDs } = req.cookies; //get all cookies
  
  
    const NewUditails = { id: req.body.UserID, pass: req.body.mypass }; //the userID that the user typed - 
    let ud = JSON.stringify(NewUditails);
  
    if (myUserIDs) {// if cookie is present
      const userIdArry = JSON.parse(`[${myUserIDs}]`); // set the cookie as object
      // try to filter the object and find if the user is exist
      const filteredArray = userIdArry.filter(
        (user) => user.id === NewUditails.id
      );
      let resultarry = filteredArray[0]; //in case we will find more the one take the first
  
      if (resultarry == undefined) {
        myUserIDs = `${myUserIDs},${ud}`;
        console.log(`add: ${ud}`);
      } else {
        myUserIDs = `${ud}`;
        console.log(`user: ${myUserIDs} is axisit`);
      }
      res.cookie('myUserIDs', myUserIDs, { maxAge: 3000000 });
    }else{
      myUserIDs = `${ud}`; 
      res.cookie('myUserIDs', myUserIDs, { maxAge: 3000000 });
    }
  
    
  
    res.send();
  });

  app.get('/read', (req, res) => {   //the client get something from the server (also called READ)
    res.send({ ok: true, products })
})

app.post("/post", (req, res) => {  //the client send somthing to the server (also called CREATE)

    console.log(req.body)   
    products.push(req.body);
    console.log(products);
    res.send({ ok: true, products })
})


app.listen(port, () => { console.log(`Listen on port ${port}`) });
