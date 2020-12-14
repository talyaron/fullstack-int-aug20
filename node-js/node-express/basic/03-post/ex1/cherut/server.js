const express = require('express')
const app = express(); ///server;
const  bodyParser = require('body-parser');


app.use(bodyParser.json()) //return req.body = body (from client)
app.use(express.static('public'))

const users = [
  {userName : 'cherut', password : 'ch'},
  {userName : 'lior', password : 'li'},
  {userName : 'adam', password : 'ad'},
  {userName : 'roni', password : 'ro'},
  {userName : 'tomer', password : 'to'},
  {userName : 'shir', password : 'sh'},
  {userName : 'חרות', password : 'ות'}
];

app.post('/check-user',(req, res)=>{  ///on client post
    
  let nameFromCliant = req.body.nameToCheck
  let passFromCliant = req.body.passwordToCheck

  console.log(nameFromCliant,passFromCliant)

  let found = false;

  users.forEach(user =>{
    if(user.userName == nameFromCliant && user.password == passFromCliant){
       found = true;
    }
  })

  if(found== true){
    res.send({
      ok:true, 
      body: nameFromCliant
    });
  }else{
    res.send({
      ok:false, 
      body: nameFromCliant
    });
  }
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests