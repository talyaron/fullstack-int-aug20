const express = require('express')
const app = express(); ///server;
const  bodyParser = require('body-parser');


app.use(bodyParser.json()) //return req.body = body (from client)

app.use(express.static('public'))

// const users = [
//   'cherut',
//    'lior'
// ];

const users = [
  {userName : 'cherut'},
  {userName : 'lior'},
  {userName : 'adam'},
  {userName : 'roni'},
  {userName : 'tomer'},
  {userName : 'shir'},
  {userName : 'חרות'}
];



app.post('/check-user',(req, res)=>{  ///on client post
    
  let nameFromCliant = req.body.nameToCheck
  console.log(nameFromCliant);

  if(users.includes(nameFromCliant)){
    res.send({
      k:true, 
      body: nameFromCliant
    });
  }else{
    res.send({
      k:false, 
      body: nameFromCliant
    });
  }
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests