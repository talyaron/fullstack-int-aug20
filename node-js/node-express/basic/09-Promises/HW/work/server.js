const express = require('express')
const app = express(); ///server
var cors = require('cors')
app.use(cors());
const fetch = require('node-fetch');

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static('public')) //all static files, that client get , html, js , img , css



app.post('/getSity', async (req, res) => {
    try {
         
            sity1 = req.body.sity1
            sity2 = req.body.sity2
        

        let city1Weather = await getWeatherFromApi(sity1)
        console.log(city1Weather)
        let city2Weather = await getWeatherFromApi(sity2)
        let waether = {
            city1Weather,
            city2Weather
        }

        res.send({
            waether
        })
    } catch (e) {
        console.log(e)
    }
})

getWeatherFromApi = (city) => {
    return new Promise((resolve, reject) => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=bbfbacd538a1b8ce98c0584960be576a`)
            .then(res => res.json())
            .then(data => {
                console.log({
                    data
                });
                resolve(data)
            });
    })
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listen on port ${port}`)
}) //listen to clients requests