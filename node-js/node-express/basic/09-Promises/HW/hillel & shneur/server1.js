const express = require('express')
const app = express(); ///server
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(bodyParser.json())
app.use(cors());

app.use(express.static('public')) //all static files, that client get , html, js , img , css

app.post('/color', (req, res) => {
    const { color } = req.body
    res.send({ color })
})



const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients requests