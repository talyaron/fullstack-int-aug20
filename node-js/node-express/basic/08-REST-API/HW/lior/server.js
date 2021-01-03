const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');
const fetch = require('node-fetch');
const request = require('request');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())



app.post('/sendTitle', (req, res) => {

    const { movie } = req.body;
    console.log(movie)
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${movie}&page=1&r=json`, {
	method: 'GET',
	headers: {
		"x-rapidapi-key": "d27ad88beamsh2505efd620ca6edp10ba77jsnf02f7cbe9f7a",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        
    }
    })
     .then(res => res.json())
     .then(data => {
        let movies = data.Search
        console.log(movies)
        res.send({ movies })
    })

});


app.listen(3000, () => { console.log('listen 3000') })