const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())

const users = [
    { username: 'tal', password: '123', role: 'admin' },
    { username: 'olga', password: '123', role: 'public' }
]

app.post('/login', (req, res) => {

    //create cookie that set the role of the user

    //check user
    const { username, password } = req.body;

    let isUserExist = false;
    let role = 'denied';

    const indexUser = users.findIndex(user => user.username === username && user.password === password);
    if (indexUser > -1) {
        isUserExist = true;
        role = users[indexUser].role;

    }

    res.cookie('role', role, { maxAge: 20000, httpOnly: true });
    res.send({ ok: isUserExist })


})

app.use((req, res, next) => {
    res.authorized = false;
    next();
})

app.get('/admin-panel', isAdmin, (req, res) => {

    if (res.authorized) {
        res.send({ data: 'all critical information', ok: true });
    } else {
        res.status(403);
        res.send({ ok: false });
    }

})

function isAdmin(req, res, next) {

    const { role } = req.cookies

    if (role === 'admin') {
        res.authorized = true;
    }
    next()
}


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listen on port ${port}`) });
