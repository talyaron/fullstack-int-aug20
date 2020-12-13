const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //return req.body = body (from client)
app.use(express.static('public')) //all static files, that client get , html, js , img , css
const cookieParser = require('cookie-parser');

app.use(cookieParser());



app.post('/username' , (req,res)=>{
    console.log(req.body);
    let ok = true
     let user =req.body.user
     res.cookie(`user`,user, { maxAge: 5000000, httpOnly: true });
    res.send({ok,user})
} )



const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients requests
