const express = require('express')
const app = express(); ///server
var cors = require('cors')
const fetch = require('node-fetch');
app.use(cors());

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static('public')) //all static files, that client get , html, js , img , css

//send random number to client

app.post('/sendAboutYear', (req, res) => {   //req = request from client; res = response to client
    const { randomNumber } = req.body;
    console.log(randomNumber)
   try {
        

        if (typeof randomNumber !== 'number') {
            throw new Error('multiply is not a number')
        }else{
            fetch(`http://numbersapi.com/${randomNumber}/year?json`) 
            .then(res => res.json())
            .then(data => {
                console.log(data.text)
                res.send(data) //asynchornic programing
            })
     }

        
   } catch (e) {
        console.log('at sendAboutNumber', e);
        res.send({ number: 0, ok: false, error:e })
    }
})

const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients requests