const express = require('express')
const app = express(); ///server
var cors = require('cors')
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static('public')) //all static files, that client get , html, js , img , css

//send random number to client
let  sity1  = ""
let  sity2  = ""

app.post('/getSity', (req, res) => {
    let { sity1 } = req.body
    let { sity2 } = req.body
    // res.send({ sity1 })
})



const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`listen on port ${port}`) }) //listen to clients requests