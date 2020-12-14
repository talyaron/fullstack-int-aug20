const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
const username = ['lior','moran']

app.use(bodyParser.json());

app.use(express.static('public'))

app.post('/send_login_information', (req, res) => {
    console.log(req.body)
    let ok = true
    res.send({ok,user})
})





const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) 