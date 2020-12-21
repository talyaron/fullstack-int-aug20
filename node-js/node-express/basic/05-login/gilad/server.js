const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //return req.body = body (from client)
app.use(express.static('public')) //all static files, that client get , html, js , img , css
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.post('/log-in', (req, res) => {
    let ok = false
console.log(req.body)
 let userName = req.body.auth.userName
 let passWord = req.body.auth.passWord
 console.log(userName)

if(userName ==`1` && passWord == `456`){
    ok = true;
}

res.cookie(`ok`,ok)


    res.send({ok})
})


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients 
