function getWeather(e){
            
    e.preventDefault()
    const city1 = e.target.city1.value
    const city2 = e.target.city2.value
    const cities = {city1,city2}

    console.log(city1,city2)

    fetch('/getWeather', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cities)
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            
        })
}
    