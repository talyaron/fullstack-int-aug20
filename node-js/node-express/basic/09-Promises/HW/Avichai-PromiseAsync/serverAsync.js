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
async function getWeatherPromiseAll(city1, city2) {
    try {

        let weather1 = await getCityWeatherPromise(city1)
        console.log(weather1)
        let weather2 = await getCityWeatherPromise(city2)
        console.log(weather2)

        return [weather1, weather2]

    } catch (e) {
        console.log(e)
    }
}
async function getCityWeatherPromise(city) {
    try {

        
        let weather
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c87741dd5f7b5255c31850edd25a2db9`, {
        })
            .then(res => res.json())
            .then(data => {
                console.log('one one')
                weather = data
            })
        return weather;


    } catch (error) {
        console.error(error)
    }
}

app.listen(3000, () => { console.log('listen 3000') })
