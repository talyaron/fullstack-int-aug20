const express = require('express')
const app = express()

app.use(express.static('public')) // all static files, that client get.

//send random number from SERVER to CLIENT
app.get('/get-random-number', (req, res) => { // when CLIENT asks for get-random-number SERVER sends this block code.
    const randomNum = Math.floor(Math.random() * 10);
    // console.log(randomNum)
    res.send({ randomNum })
})

const port = process.env.port || 3000;
app.listen(port, () => { console.log(`Listen on port ${port}`) }) // listen to cliuents requests