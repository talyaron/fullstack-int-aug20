const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static('public'))

let users = [{ username: 'avi', password: '123' }, { username: 'aviz', password: '1234' }, { username: 'avis', password: '12345' }]
let saveUsername

app.post('/send-user-data', (req, res) => { //when client posts.
    let { username } = req.body
    let { password } = req.body
    let validate = false
    // console.log(username, password)

    users.forEach(e => {
        if (username == e.username && password == e.password) {
            console.log('match username')
            console.log('match password')
            validate = true
            saveUsername = username

        } else {
            console.log('no match')
        }
    })
    if (validate) {
        res.cookie('validated', 'this user is validated for next 30 seconds', { maxAge: 30000, httpOnly: true })
    } else {
        console.log('something missing')
    }
    res.send({ validate })
})
app.get('/get-username', (req, res) => {

    res.send({ saveUsername })

})
app.get('/check-valid', (req, res) => {
    let validate = true
    const checkCookie = req.cookies.validated
    if (checkCookie) {
        console.log('HAS COOKIE')
    } else {
        validate = false
        console.log('GET OUT OF MY SITE')
    }
    res.send({ validate })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listen on port ${port}`)
})