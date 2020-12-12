const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let users = []

app.use(bodyParser.json())  // return req.body = body (from client)

app.use(express.static('public'))

app.post('/send-user-data', (req, res) => { //when client posts.

    const clientUsername = req.body.username
    const clientPassword = req.body.password
    if (users.includes(clientUsername)) {
        res.send({ success: false, username: clientUsername })
    } else {
        res.send({ username: clientUsername, password: clientPassword, success: true })
        users.push(clientUsername)
        console.log(users)
    }
})


const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`listen on port ${port}`)
})