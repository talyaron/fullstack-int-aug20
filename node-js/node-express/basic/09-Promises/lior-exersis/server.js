const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
//var cors = require('cors')

app.use(express.static('public'));
app.use(bodyParser.json())

app.get('/sendCityWeather/:city', (req, res) => {
    if(req.params.city.trim() == '') {
        res.status(404).send({Error:'No City provided'})
    }
    
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${req.params.city}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d27ad88beamsh2505efd620ca6edp10ba77jsnf02f7cbe9f7a",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }   
    })
    .then(response => response.json())
    .then(json => res.status(200).send(json))
    .catch(err => {
        console.error(err);
        res.status(404).send({Error:err})
    });


});



app.listen(3000, () => { console.log('listen 3000') })
