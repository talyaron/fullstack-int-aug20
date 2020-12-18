const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static('public'))

let clickedButtonsArray = []

app.get('/read-cookie', (req, res) => {   /// check if user has cookie
    let { IFollowYou } = req.cookies
    let cookie
    if (!IFollowYou) {
        clickedButtonsArray = []
        res.send({ cookie: false })
    } else {
        res.send({ IFollowYou, cookie: true })
    }
})

app.post('/send-button', (req, res) => {

    let { IFollowYou } = req.cookies
    const { clickedButton } = req.body

    if (!IFollowYou) {
        clickedButtonsArray = []
        cookie = false
    } else {
        cookie = true
    }
    clickedButtonsArray.push(clickedButton)
    console.log('array: ' + clickedButtonsArray)

    res.cookie('IFollowYou', clickedButtonsArray, { maxAge: 5000000, httpOnly: true })

    console.log('IFOLLOW: ' + IFollowYou)

    res.send({ IFollowYou, cookie })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listen on port ${port}`)
})