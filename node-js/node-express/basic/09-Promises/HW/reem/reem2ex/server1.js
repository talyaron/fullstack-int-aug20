const express = require('express')
const app = express(); ///server
var cors = require('cors')

app.use(cors());

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static('public')) //all static files, that client get , html, js , img , css

//send random number to client

app.post('/sendMultiply', (req, res) => {   //req = request from client; res = response to client

    try {
        const { multiply } = req.body;

        if (typeof multiply !== 'number') throw new Error('multiply is not a number')

        res.send({ number: multiply * 10 })
    } catch (e) {
        console.log('at sendMultiply', e);
        res.send({ number: 0, ok: false, error:e })
    }
})

const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients requests