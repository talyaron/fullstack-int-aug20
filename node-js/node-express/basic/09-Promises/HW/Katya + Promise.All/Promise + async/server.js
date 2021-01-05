const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))


app.post('/get-euro', (req, res) => {
    const { coin } = req.body
    res.send({ number: Math.round(coin / 3.90) })

    // try {
    //     const { coin } = req.body

    //     if (typeof coin !== 'number') throw new Error('coin is not a number')

    //     res.send({ euro: Math.round(coin / 3.90) })
    // } catch (e) {
    //     console.log('at get-euro', e)

    // }
})

const port = process.env.port || 4040;
app.listen(port, () => {
    console.log(`listening for ${port}`)
})