const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');

app.use(bodyParser.json())
const users = []
app.use(express.static('public'))

app.get('/read', (req, res) => { // the client GETS something from the server. (also called READ)
    res.send({ ok: true, users })
})

app.post('/post', (req, res) => { // the client sends something to the server. (also called create)
    let doesUserExist = false

    users.forEach(user => {
        if (user.username === req.body.username) {
            doesUserExist = true
            console.log('alreay has this username')
        }
    })
    if (!doesUserExist) {
        users.push(req.body)
    }
    console.log(users)

    res.send({ ok: true, users })
})

app.put('/update', (req, res) => { // the client UPDATES something to the server. (also called UPDATE)


    const { username } = req.body.username
    const { newPassword } = req.body
    let userIndex = users.findIndex(user => user.username === username)

    users[userIndex].password = newPassword
    
    // users.splice(userIndex, 1)
    // users.push(req.body)

    console.log(users)
    res.send({ ok: true })
})


app.delete('/delete', (req, res) => { // the client DELETES something from the server. (also called DELETE)
    const { username } = req.body
    let userIndex = users.findIndex(user => user.username === username)


    users.splice(userIndex, 1)


    res.send({ ok: true, users })
})


app.listen(3000, () => { console.log('listen 3000') })