const express = require('express')
const app = express(); ///server;
const  bodyParser = require('body-parser');


app.use(bodyParser.json()) //return req.body = body (from client)


app.use(express.static('public')) //all static files, that client get , html, js , img , css

app.post('/send-text',(req, res)=>{  ///on client post
    
    console.log(req.body);
    
    res.send({
        k:true, 
        body: req.body.value
    });
}) 



const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests
