const express = require('express')
const app = express(); ///server
const bodyParser = require('body-parser');
var cors = require('cors')


app.use(bodyParser.json())
app.use(cors());

app.use(express.static('public')) //all static files, that client get , html, js , img , css

//send random number to client

app.post('/sendUpperNumber',(req, res)=>{   //req = request from client; res = response to client

    try {
        const { upperNumber } = req.body;

        if (typeof upperNumber !== 'number') throw new Error('upperNumber is not a number')
   
    res.send({number:Math.ceil(Math.random()*upperNumber)})
    } catch(e){
        console.log('at sendUpperNumber', e)
    }
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listen on port ${port}`)}) //listen to clients requests