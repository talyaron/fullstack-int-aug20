/* const express = require('express');
const bodyParser = require('body-Parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser()); */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'))


app.post('/buttonsClicked', (req, res) => {
    let { IFollowYou } = req.cookies;
    console.log(IFollowYou);
    const test = `${IFollowYou} =>  ${req.body.buttonInnertext}`;
    res.cookie('IFollowYou', test, { maxAge: 5000000, httpOnly: true });
    res.send({
        test
    });
    // console.log(req.body)
});

const port = process.env.PORT || 3000;
<<<<<<< Updated upstream:node-js/node-express/basic/04-cookies/hw/eyal/server.js
app.listen(port, () => { console.log(`Listen on port ${port}`) });
=======
app.listen(port,()=>{console.log(`Listen on port ${port}`)});


>>>>>>> Stashed changes:node-js/node-express/basic/04-cookies/hw-track-user/eyal/server.js
