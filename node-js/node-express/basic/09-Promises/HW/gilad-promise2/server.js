const express = require('express')
const app = express(); ///server
const bodyParser = require('body-parser');
const { response } = require('express');
const fetch = require('node-fetch');

app.use(bodyParser.json())
app.use(express.static('public'))


app.post('/click', (req, res) => {
    const city1 = req.body.cities.city1
    const city2 = req.body.cities.city2

    async function getWeather() {

        let weather1 = await getWeather1Proise(city1);
        let weather2 = await getWeather2Proise(city2);
        console.log(weather1)
        console.log(weather2)

    }
    

console.log(req.body)

    res.send({ok:true})

});


function getWeather1Proise(city1){
    return new Promise((resolve, reject) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=cc298c7bc3fd0a6a0af96261903cb0d2`) 
        .then(res => res.json())
        .then(data => {
            resolve(data)
        })
        .catch(e => {
            reject(e)
        })
        
    })
    
}
function getWeather2Proise(city2){
    return new Promise((resolve, reject) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=cc298c7bc3fd0a6a0af96261903cb0d2`) 
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