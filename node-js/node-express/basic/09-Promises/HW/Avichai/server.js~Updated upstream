const express = require('express')
const app = express();
const fetch = require('node-fetch');
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))



app.post('/sendUpperNumber', (req, res) => {
    try {
        const { upperNumber } = req.body
        
        if (typeof upperNumber !== 'number') throw new Error('upperNumber not a number')

        res.send({ number: Math.ceil(Math.random() * upperNumber) })
    } catch (e) {
        console.log('at sendUpperNumber', e)
    }
})


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })

