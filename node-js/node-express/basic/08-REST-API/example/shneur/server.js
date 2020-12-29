const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');
const fetch = require('node-fetch');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())


app.post('/sendStock', (req, res) => {


   
    const { myStock } = req.body;
    console.log(myStock)

    fetch(`https://zirra.p.rapidapi.com/v1/companies?ticker=${myStock}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e846b0c7f4msha2c3878c64cee80p17095djsn12b3512845a6",
            "x-rapidapi-host": "zirra.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });

})



app.listen(3000, () => { console.log('listen 3000') })