const express = require('express')
const app = express()

let time = new Date().getTime();

app.use((req, res, next) => {
    next()
})

app.use(express.static('public'))


app.get('/get-live-time', (req, res) => {
    time = new Date().getTime();
    res.send({ time })
})

const port = 3000
app.listen(port, () => { console.log(`open on ${port}`) })