const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static('public'))

let clickedButton = []

app.get('/get-cookie', (req, res) => {
    let { cookieEpta } = req.cookies
        // let cookie;

    if (!cookieEpta) {
        clickedButton = []
        res.send({ cookie: false })
    } else {
        res.send({ cookieEpta, cookie: true })
    }
})

app.post('/send-cookie', (req, res) => {
    let { cookieEpta } = req.cookies
    let { clicked } = req.body

    if (!cookieEpta) {
        clickedButton = []
        cookie = false
    } else {
        cookie = true
    }

    clickedButton.push(clicked)

    console.log('array: ' + clickedButton)

    res.cookie('cookieEpta', clickedButton, { maxAge: 5000000, httpOnly: true })

    console.log('Epta: ' + cookieEpta)

    res.send({ cookieEpta, cookie })
})

const port = process.env.PORT || 1515
app.listen(port, () => {
    console.log(`server work ${port} !`)
})