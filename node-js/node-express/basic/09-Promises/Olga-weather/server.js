const express = require('express')
const app = express(); ///server
const bodyParser = require('body-parser');
const { response } = require('express');
const fetch = require('node-fetch');

app.use(bodyParser.json())
app.use(express.static('public'))


function getWeather(city1, city2){
    try{
        return new Promise((resolve, reject) =>{
            Promise.all([getWeather1(city1), getWeather2(city2)]).then(results=>{
                console.log(results)
                resolve(results)
            })
        })
    }catch(e){
        console.log(e)
    }
    
}

app.post('/getWeather', async (req, res) => {
    
    const city1 = req.body.city1
    const city2 = req.body.city2
    console.log(city1,city2)

    const weathers = await getWeather(city1,city2)
    res.send({weathers})

});

function getWeather1(city1) {
    return new Promise((resolve, reject) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=cc298c7bc3fd0a6a0af96261903cb0d2`)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
            .catch(e => {
                reject(e)
            })

    })

}
function getWeather2(city2) {
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