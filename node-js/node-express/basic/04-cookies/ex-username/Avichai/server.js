const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.static('public'))

app.post('/get-data', (req, res) => {

    let { userCookie } = req.cookies
    const clientUsername = req.body.username
    let cookie = false

    res.cookie('userCookie', clientUsername, { maxAge: 5000000, httpOnly: true });
    res.send({ username: clientUsername, cookie: false })

})


const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`listen on port ${port}`)
})