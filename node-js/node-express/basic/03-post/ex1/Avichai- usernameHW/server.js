const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let users = []

app.use(bodyParser.json())  // return req.body = body (from client)

app.use(express.static('public'))

app.post('/send-user-data', (req, res) => { //when client posts.

    if (users.includes(req.body.username)) {
        res.send({ success: false, username: req.body.username })
    } else {
        res.send({ username: req.body.username, password: req.body.password, success: true })
        users.push(req.body.username)
        console.log(users)
    }
})


const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`listen on port ${port}`)
})