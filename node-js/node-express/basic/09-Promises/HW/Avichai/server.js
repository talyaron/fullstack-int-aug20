const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/getCities',async (req, res) => {

    const { city1, city2 } = req.body
    await getWeather(city2)
    

    res.send({})

})
function getWeather(city1, city2) {
    return new Promise((resolve, reject) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=c87741dd5f7b5255c31850edd25a2db9`, {
        })
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(e => {
                reject(e)
            })
    })
}

app.listen(3000, () => { console.log('listen 3000') })
