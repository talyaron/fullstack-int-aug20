const express = require('express')
const app = express(); ///server
const bodyParser = require('body-parser');

const fetch = require('node-fetch');

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/click', async (req, res) => {
    try{    
        console.log(req.body)
        const { city1, city2 } = req.body;
        
        const weathers = await getWeather(city1,city2);

        res.send({ok:true,weathers})


    }catch (e){
        console.log(e)
    }
    
    
    
})


async function getWeather(city1,city2){
    let weather1 = await getWeather1Promise(city1);
    console.log(weather1)
    let weather2 = await getWeather2Promise(city2);
    console.log(weather2)
    return {weather1,weather2}
}
function getWeather1Promise(city1){
    return new Promise((resolve,reject)=>{
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
function getWeather2Promise(city2){
    return new Promise((resolve,reject)=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=cc298c7bc3fd0a6a0af96261903cb0d2`)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
            .catch(e => {
                reject(e)
            })

    })
}


app.listen(3000, () => { console.log('listen 3000') })