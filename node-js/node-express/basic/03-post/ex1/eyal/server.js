const express = require('express');
const app = express();
const UserDitles = {UserID:"eyal",Pass:"123"}

const bodyParser = require('body-Parser');

app.use(bodyParser.json());

app.use(express.static('public'))

app.post('/send_user_information', (req, res) => {
    console.log(req.body);
    res.send({
       /*  ok:true,  */
        body: req.body.value
    });
})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) 
