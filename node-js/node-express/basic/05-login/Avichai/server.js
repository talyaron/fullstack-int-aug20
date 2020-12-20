const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'))

let users = [{ username: 'avi', password: '123' }, { username: 'aviz', password: '1234' }, { username: 'avis', password: '12345' }]
let savedUsername

// new-user - create a new object of user + password in users array
// send-user-data - gets login info from user and sends to new page if correct info.
// get-username - sends new page the username that has logged in.
// check-valid - checks every 30 second if user has cookie, if he has good, if not back to index.
app.post('/new-user', (req, res) => {
    let { username } = req.body
    let { password } = req.body
    users.push({ username, password })
    console.log(users)
    let ok = true
    res.send({ ok })
})


app.post('/send-user-data', (req, res) => { //when client posts.
    let { username } = req.body
    let { password } = req.body
    let validate = false
    // console.log(username, password)

    users.forEach(e => {
        if (username == e.username && password == e.password) {
            console.log('match username and password')
            validate = true
            savedUsername = username

        } else {
            console.log(`no match ${e.username}`)
        }
    })


    if (validate) {
        res.cookie('validated', username, { maxAge: 30000, httpOnly: true })
        // res.redirect('/homepage.html');  WHY DOES THIS WORK TAL? WHY DOES THIS WORK TAL? WHY DOES THIS WORK TAL?
    }

    res.send({ validate })
})
app.get('/get-username', (req, res) => {

    res.send({ savedUsername })

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