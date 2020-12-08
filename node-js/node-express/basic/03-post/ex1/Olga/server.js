const express = require('express')
const app = express(); 
const  bodyParser = require('body-parser');


app.use(bodyParser.json()) 

app.use(express.static('public')) 
app.post('/send-user',(req, res)=>{  
    
    console.log(req.body);
    
    
    console.log(username, password);
    res.send({
        ok:true, 
        body: req.body.username
        
        
    });
}) 

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
   

const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests
