const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //return req.body = body (from client)
app.use(express.static('public')) //all static files, that client get , html, js , img , css
const cookieParser = require('cookie-parser');

app.use(cookieParser());


    let clickMe = 0
    let redButton = 0
    let nothing = 0
    let worldDestroyer = 0

app.post('/button', (req, res) => {
    console.log(req.body);
    let ok = true
    
    console.log(req.cookies);
    console.log(req.headers.cookie)


    if (req.body.buttonPressed == 'clickMe') clickMe++
    else if (req.body.buttonPressed == 'redButton') redButton++
    else if (req.body.buttonPressed == 'nothing') nothing++
    else worldDestroyer++
    

    res.cookie(`IFollowYou`, `clickMe${clickMe}-redButton${redButton}-nothing${nothing}-worldDestroyer${worldDestroyer} `, { maxAge: 500000, httpOnly: false });

  
     
    res.send({ ok,clickMe,redButton,nothing,worldDestroyer })

})



const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients requests
