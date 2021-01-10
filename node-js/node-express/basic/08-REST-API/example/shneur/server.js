const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const fetch = require('node-fetch');
app.use(express.static('public'))



app.post('/sendStock', (req, res) => {
    try {
        const { city } = req.body
    
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2696b0332c54013f464ebede33ee772b&units=metric`)
            .then(res => res.json())
            .then(weather => {
                res.send({ weather })
            })
        .catch(err => {
            console.error(err);
        });

    } catch (e) {
        console.log(` erorr ${e}`)
    }



})



app.listen(3000, () => {
    console.log('listen 3000')
})