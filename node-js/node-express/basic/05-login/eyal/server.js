const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-Parser');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));




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

/*  not working ---------------------------------------------------
app.post("/U_info", (req, res) => {

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
      res.redirect("/ok.html");
    } else {
      console.log('rejected');
      res.redirect("/Rejected.html");
    }
  
  });
  -------------------------------------------------------------------- */



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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
