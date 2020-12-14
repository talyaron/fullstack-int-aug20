const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //return req.body = body (from client)
app.use(express.static('public')) //all static files, that client get , html, js , img , css
const cookieParser = require('cookie-parser');

app.use(cookieParser());

let buttonMemory = []

app.post('/username' , (req,res)=>{
    console.log(req.body);
    let ok = true
     buttonMemory.push(req.body.buttonPressed) 

    res.cookie(`buttonPressed`,buttonMemory, { maxAge: 500000, httpOnly: true });
    res.send({ok,buttonMemory})
} )



const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients requests
