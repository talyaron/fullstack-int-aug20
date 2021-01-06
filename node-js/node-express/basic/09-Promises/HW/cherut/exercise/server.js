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
    let temp = await getWeather(city1, city2);
    console.log(temp);

    res.send({ok:true, temp});
  } catch (e) {
    console.log(e)
  }

});



function getWeather(city1, city2) {
  try {
      return new Promise((resolve, reject) => {
          Promise.all([getWeatherPromise(city1), getWeatherPromise(city2)]).then(data => {
              // console.log(data);
              resolve(data);
          })
      })
  } catch (e) {
      console.log(e);
  }
}


function getWeatherPromise(city) {
  return new Promise((resolve, reject) => {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ed5c42360ded19ae240c58a88183a6f`)
    .then(res => res.json())
    .then(data => {
        resolve(data);
    })
    .catch(e => {
        reject(e)
    })

  })

}


app.listen(3000, () => {
  console.log('listen 3000')
})