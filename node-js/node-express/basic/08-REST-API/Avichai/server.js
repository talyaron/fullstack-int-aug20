const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const fetch = require('node-fetch');

app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static('public'))


app.post('/getMovieList', (req, res) => {
    const { movie } = req.body



    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${movie}&page=1&r=json`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data.Search)
            let x = data.Search
            res.send({ x })
        })
})
app.post('/getMovieInfo', (req, res) => {
    const { movieName } = req.body

    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${movieName}&page=1&r=json`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
    })
        .then(res => res.json())
        .then(data => {
            let x = data.Search
            res.send({ x })
        })
})



app.listen(3000, () => { console.log('listen 3000') })
