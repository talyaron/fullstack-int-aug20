const express = require('express')
const app = express();
const fetch = require('node-fetch');
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))



app.post('/sendMultiply', (req, res) => {

    try {
        const { multiply } = req.body

        if (typeof multiply !== 'number') throw new Error('multiply not a number')

        res.send({ number: multiply * 10 })
    } catch (e) {
        console.log('at sendMultiply', e)
        res.send({ number: 0, ok: false })
    }
})


const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`listen on port ${port}`) })

