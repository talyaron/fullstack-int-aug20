const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {
    response
} = require('express');
const fetch = require('node-fetch');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())


app.post('/sendStock', (req, res) => {
    try {
        const {
            myStock
        } = req.body;
        console.log(myStock)


        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "e846b0c7f4msha2c3878c64cee80p17095djsn12b3512845a6",
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
                }
            })
            .then(response => {
                console.log(response);
                res.send(response)
            })
            .catch(err => {
                console.error(err);
            });

    } catch (e) {
        console.log(` erorr ${e}`)
    }



})



app.listen(3000, () => {
    console.log('listen 3000')
})