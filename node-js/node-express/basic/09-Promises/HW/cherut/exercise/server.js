const express = require('express')
const app = express(); ///server
const bodyParser = require('body-parser');
const {
  response
} = require('express');
const fetch = require('node-fetch');

app.use(bodyParser.json())
app.use(express.static('public'))


app.post('/getWeather', async (req, res) => {
  try {

    const {
      city1,
      city2
    } = req.body;
    const temp = await getWeather(city1, city2);

    res.send(temp)
  } catch (e) {
    console.log(e)
  }

});

app.listen(3000, () => {
  console.log('listen 3000')
})


function getWeather(city1, city2) {
  try {
      return new Promise((resolve, reject) => {
          Promise.all([getWeatherPromise(city1), getWeatherPromise(city2)]).then(results => {
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

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "3141833d07msh1c4d90f6d62efb2p1b4fccjsn887bca0704a2",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
      })
      // .then(r => r.json())
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        console.error(err);
      });

  })

}