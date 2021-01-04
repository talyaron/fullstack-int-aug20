const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
var cors = require('cors')

app.use(express.static('public'));
app.use(bodyParser.json())


app.post('/sendTitle', (req, res) => {

    const { music } = req.body;
    console.log(music)
    fetch(`https://shazam.p.rapidapi.com/auto-complete?term=${music}&locale=en-US`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d27ad88beamsh2505efd620ca6edp10ba77jsnf02f7cbe9f7a",
		"x-rapidapi-host": "shazam.p.rapidapi.com"
	}
})
     .then(res => res.json())
     .then(data => {
        let songs = data.Search
        console.log(songs)
        res.send({ songs })
    })

});


app.listen(3000, () => { console.log('listen 3000') })