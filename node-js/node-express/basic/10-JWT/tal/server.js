const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var jwt = require('jwt-simple');
// var payload = { foo: 'bar' };
const secret = 'gsggsfdfge3645678236%$56767788*^^%%$4872634';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'))

let users = [{ username: 'avi', password: '123', role: 'admin' }, { username: 'aviz', password: '1234', role: 'public' }, { username: 'avis', password: '12345', role: 'public' }]
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
    let role = 'public'

    //check if user exists and password match
    users.forEach(e => {
        if (username == e.username && password == e.password) {
            console.log('match username and password')
            validate = true;
            role = e.role
            savedUsername = username

        } else {
            console.log(`no match ${e.username}`)
        }
    })

    var token = jwt.encode({ role, date: new Date() }, secret);

    if (validate) {
        res.cookie('validated', token, { maxAge: 60000, httpOnly: true })
        // res.redirect('/homepage.html');  WHY DOES THIS WORK TAL? WHY DOES THIS WORK TAL? WHY DOES THIS WORK TAL?
    }

    res.send({ validate })
})
app.get('/get-username', (req, res) => {

    res.send({ savedUsername })

})

app.get('/check-valid', (req, res) => {
    let validated = true
    const checkCookie = req.cookies.validated
    if (checkCookie) {
        console.log('HAS COOKIE')
    } else {
        validated = false
        console.log('GET OUT OF MY SITE')
    }
    res.send({ validated })

})

function admin(req, res, next) {
    try {
        const validated = req.cookies.validated;

        var decoded = jwt.decode(validated, secret);
        console.log(decoded);



        if (decoded.role !== 'admin') {
            res.send({ validated: false })
        } else {
            next()
        }
    } catch (e) {
        console.log(e.message)
    }

}


app.get('/get-all-users', admin, (req, res) => {
    res.send({ validated: true, users })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listen on port ${port}`)
})