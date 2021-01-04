const express = require('express')
const app = express(); ///server
const bodyParser = require('body-parser');
var cors = require('cors')


app.use(bodyParser.json())
app.use(cors());

app.use(express.static('public')) //all static files, that client get , html, js , img , css

//send random number to client

app.post('/sendRandomNumber',(req, res)=>{   //req = request from client; res = response to client

    try {
        const { randomNumber } = req.body;
        console.log(randomNumber)

        if (typeof randomNumber !== 'number') throw new Error('randomNumber is not a number')
   
    res.send({number:Math.ceil(Math.random()*randomNumber)})
    } catch(e){
        console.log('at sendRandomNumber', e)
    }
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests