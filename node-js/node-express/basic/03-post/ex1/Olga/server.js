const express = require('express')
const app = express(); 
const  bodyParser = require('body-parser');
app.use(bodyParser.json()) 
app.use(express.static('public')) 


const array = [
  {
   username: "John",
   password: "Black",
  },
  {
   username: "Olga",
   password: "Blue",
   },
 {
   username: "Michael",
   password: "Red",
  },
  {
   username: "Leonid",
   password: "Green",
   },
 
 ];

   
app.post('/check-user',(req, res)=>{  
    
    console.log(req.body);
    
    let user = req.body.username
    let pass = req.body.password
    
   
    let ok 
    array.forEach(elm => {
        if ( elm.username == user && elm.password == pass) {
        ok = true
    }else ok = false
    })
    

    res.send({
        k: ok,
        
        user: req.body.username,
        pass: req.body.password,

       
    
    });
}) 
    



const port = process.env.PORT || 8000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests
