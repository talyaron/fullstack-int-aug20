const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


const correctUser ={name:'reem',psw:9968096};

app.post("/login", (req, res) => {
  const user = req.body.user;
 
  if (user.name == correctUser.name && user.psw == correctUser.psw) {
    res.cookie("i-follow-you",user,{ maxAge: 10000, httpOnly:false});
  } else {
    res.redirect("/fail.html");
  }
});
app.use(express.static('public'))
  const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)})