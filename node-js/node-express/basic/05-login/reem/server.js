const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


const users =['reem','morit','rivka','nehonya'];
const password =[9968096]
app.post("/login", (req, res) => {
  const username = req.body.username;
  const regExp = new RegExp(username, "g");
  if (regExp.test(users)) {
    res.redirect("/success.html");
  } else {
    res.redirect("/fail.html");
  }
});
app.use(express.static('public'))
  const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)})