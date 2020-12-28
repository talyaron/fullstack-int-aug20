const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');
const fetch = require('node-fetch');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())


app.postNODE('/sendCity', (req, res) => {


    // fetch('api.openweathermap.org/data/2.5/weather?q=jerusalem&appid=9c72c68beca5025e3cc723b7e0045386')
    const { city } = req.body;
    console.log(city)

    fetch("https://api-nba-v1.p.rapidapi.com/leagues/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ef43e6d47amsh4cf6fbca708489fp108d1djsn0c4fa57ab462",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


    console.log('cont')

})



app.listen(3000, () => { console.log('listen 3000') })