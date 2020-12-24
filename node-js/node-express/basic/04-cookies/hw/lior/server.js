const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/push', (req, res) => {
    let { pushed } = req.body;
    console.log(pushed);


    let { count } = req.cookies
    let pushButton = '';
    console.log(count)

    if (count !== undefined) {
        pushButton = `${count} -- ${pushed}`;
    } else {
        pushButton = `${pushed}`;
    }
    res.cookie('count',pushButton, { maxAge: 5000000, httpOnly: false });
    res.send({
        pushButton
    });

})

app.use(express.static('public'))

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })