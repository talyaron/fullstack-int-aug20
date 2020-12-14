const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());


const users = [{
        name: 'yaara',
        password: '123'
    },
    {
        name: 'dan',
        password: '1234'
    }
];

app.use(bodyParser.json()) //return req.body = body (from client)


app.use(express.static('public')) //all static files, that client get , html, js , img , css

app.post('/send-details', (req, res) => {
    // ///on client post
    let userIndex = users.findIndex(user => user.name == req.body.name);
    if (userIndex > -1) {
        // if there is a user
        if (users[userIndex].password == req.body.password) {
            // if the entered password is correct
            res.send(true);
        } else {
            // the user found but the password is invalid
            res.send(false);
        }
    } else {
        // if there is no user with the given name
        res.send(false);
    }
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listen on port ${port}`)
}) //listen to clients requests