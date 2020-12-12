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
    
  let passFromCliant = req.body.passwordToCheck

  let found = false;
    res.send({
      ok:true, 
    });
  }else{
    res.send({
      ok:false, 
    });
  }
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests