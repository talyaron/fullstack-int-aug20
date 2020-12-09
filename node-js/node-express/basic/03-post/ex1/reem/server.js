const express = require('express')
const app = express(); ///server;
const  bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

const users =['reem','morit','rivka','nehonya'];

app.post('/userName',(req, res)=>{ 
    const username = req.body.username;
  const regExp = new RegExp(username, "g");
  
  
  if (regExp.test(users)) {
    res.redirect("/success.html");
  } else {
    res.redirect("/fail.html");
  }
});
  
  const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)})