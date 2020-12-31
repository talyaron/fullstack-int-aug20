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

    fetch("https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e846b0c7f4msha2c3878c64cee80p17095djsn12b3512845a6",
            "x-rapidapi-host": "finage-currency-data-feed.p.rapidapi.com"
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