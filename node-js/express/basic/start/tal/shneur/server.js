const express = require('express')
const app = express()
app.use(express.static('public'))



let timeSinceRefresh = 1

app.use((req, res, next) => {
    next()
})
const jokes = [
    "we are going to win this game",
    "this game is easy pisy",
    "we are grate programars",
    "you neale this one",
    "congrates to you you own",
    "we are the best group evevr"
]


app.get('/jokesa', (req, res) => {
    i = Math.floor(Math.random() * 6);
    Choosenjoke = jokes[i]
    console.log(Choosenjoke)
    document.getElementById('box').innerHTML = `<h1>you have loged to this website ${Choosenjoke} seconds ago</h1>`

    res.send({
        jokes
    })

})


app.listen(3000)