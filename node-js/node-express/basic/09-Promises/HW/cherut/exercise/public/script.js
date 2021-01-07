function getWeather(e) {

  e.preventDefault();

  const city1 = e.target.children.city1.value;
  const city2 = e.target.children.city2.value;

  fetch('/getWeather', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city1,city2
      })
    })
    .then(r => r.json())
    .then(data => {
      console.log(data.temp)
    })
    .catch(e => {
      console.log(e)
    })
}