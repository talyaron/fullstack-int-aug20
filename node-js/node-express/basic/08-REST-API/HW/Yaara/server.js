const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');
const fetch = require('node-fetch');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())
/* https://api.currencylayer.com/convert?from=EUR&to=GBP&amount=100 
fetch('http://api.currencylayer.com/live?access_key=b7b51b7896c95d2d1180c1be76c0f60f') */

app.post('/Currency', (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const amount = req.body.amount;
    
    let Currency = {};

    fetch(` http://api.currencylayer.com/convert?access_key=b7b51b7896c95d2d1180c1be76c0f60f&from=${from}&to=${to}&amount=${amount}`)

        .then(res => res.json())
        .then(json => {
            Currency = json
            res.send({ Currency })
        });
})





        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`listen on port ${port}`)
        }) 