const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/getCities', async (req, res) => {
    try {

        const { city1, city2 } = req.body
        const citiesWeather = await getWeatherPromiseAll(city1, city2);
        res.send({ citiesWeather })

    } catch (e) {
        res.send({ ok: false })
        console.log(e)
    }

})
function getWeatherPromiseAll(city1, city2) {
    try {

        return new Promise((resolve, reject) => {
            Promise.all([getCityWeatherPromise(city1), getCityWeatherPromise(city2)]).then(res => {
                resolve(res)
            })
        })
        
    } catch (e) {
        console.log(e)
    }
}
function getCityWeatherPromise(city) {
    try {

        return new Promise((resolve, reject) => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c87741dd5f7b5255c31850edd25a2db9&units=metric`, {
            })
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
                .catch(e => {
                    reject(e)
                })
        })
        
    } catch (error) {
        console.error(error)
    }
}

app.listen(3000, () => { console.log('listen 3000') })
