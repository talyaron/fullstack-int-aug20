const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //return req.body = body (from client)
app.use(express.static('public')) //all static files, that client get , html, js , img , css

app.post('/log-in', (req, res) => {  ///on client post

    console.log(req.body);
    const { user, password } = req.body //deconstractor
   

    let ok = false;
    if (user == 'gilad' && password == '456') {
        ok = true
    }

    res.send({ ok,user, password});
})


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients requests
