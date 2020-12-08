const express = require('express')
const app = express(); ///server;
const  bodyParser = require('body-parser');
app.use(bodyParser.json()) //return req.body = body (from client)
app.use(express.static('public')) //all static files, that client get , html, js , img , css

app.post('/log-in',(req, res)=>{  ///on client post
    
    console.log(req.body);
    let user = req.body.username
    let pass = req.body.password
    let ok = false;
    if (user == 'gilad' && pass=='456') {
        ok = true
    }

    res.send({
        k: ok,
        
        user: req.body.username,
        pass: req.body.password,
       
    
    });
}) 


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests
