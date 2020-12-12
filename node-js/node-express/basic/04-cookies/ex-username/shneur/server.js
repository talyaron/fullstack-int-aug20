const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.post('/user_information', (req, res) => {
    const {mycookie} = req.cookies;

    res.cookie("yourName", req.body.userName, {maxAge: 5000000} )
    res.send({
        ok: true
        

    });
    console.log(req.body.userName)

})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listen on port ${port}`)
})
