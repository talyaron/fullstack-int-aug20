const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())

app.post('/send-dollar', (req, res) => {
    try {
        const { dollar } = req.body;

        if (typeof dollar !== 'number') throw new Error('dollar is not a number') //if error write "not number" //ERROR HENDLING

        res.send({ number: Math.round(dollar * 3.20) })
    } catch (e) {
        console.log('at get-dollar', e); //if catch error return 0 and false
        res.send({ number: 0, ok: false, error: e })
    }
})

const port = process.env.port || 4141;
app.listen(port, () => {
    console.log(`listening for ${port}`)
})