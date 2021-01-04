const express = require('express')
const app = express(); ///server
var cors = require('cors')
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static('public')) //all static files, that client get , html, js , img , css

//send random number to client

app.post('/shape', (req, res) => {
    const { shape } = req.body
    res.send({ shape })
})


const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients requests