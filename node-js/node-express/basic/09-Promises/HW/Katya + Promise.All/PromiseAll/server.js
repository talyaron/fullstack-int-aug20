const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

app.post('/sendCity', async(req, res) => {
    try {
        console.log(req.body)

        const { firstCity, secondCity } = req.body;

        const weather = await getWeather(firstCity, secondCity)
        console.log(weather)

        res.send({ ok: true, weather });
    } catch (e) {
        console.log(e);
    }
});

function getWeather(firstCity, secondCity) {
    try {
        return new Promise((resolve, reject) => {
            Promise.all([getWeatherPromise(firstCity), getWeatherPromise(secondCity)]).then(results => {
                console.log(results)
                resolve(results)
            })
        })
    } catch (e) {
        console.log(e);
    }
}

function getWeatherPromise(city) {
    return new Promise((resolve, reject) => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84dda819f36a2f81e3babdb748579c85`)
            .then(r => r.json())
            .then(data => {
                resolve(data);
            })
            .catch(e => {
                reject(e)
            })
    })
}

const port = process.env.port || 5151;

app.listen(port, () => {
    console.log(`listening for ${port}`)
})