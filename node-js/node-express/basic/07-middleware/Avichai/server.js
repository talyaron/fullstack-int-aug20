const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static('public'))

const users = [
    { username: 'avichai', password: '123', role: 'admin' },
    { username: 'oz', password: '123', role: 'public' }
]

app.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log(username, password)

    isUserExist = false
    let role = 'denied'
    const indexUser = users.findIndex(user => user.username === username && user.password === password)
    if (indexUser > -1) {
        isUserExist = true
        role = users[indexUser].role
    }

    res.cookie('role', role, { maxAge: 20000, httpOnly: true })

    res.send({ ok: true })
})

app.get('/admin-panel', isAdmin, (req, res) => {

    if (res.authorized) {
        res.send({ data: 'secret area' })
    } else {
        res.status(403)
        res.send({ ok:false })
    }
})
function isAdmin(req, res, next) {

    const { role } = req.cookies
    if (role === 'admin') {
        res.authorized = true
    }
    next()

}


app.listen(3000, () => { console.log('listen 3000') })

