/******************************************
 *  Author : eyal shemuel   
 *  Created On : Tue Dec 22 2020
 *  File : server.js.js
 *******************************************/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'))


/* app.post('/buttonsClicked', (req, res) => {
    let { IFollowYou } = req.cookies;
    console.log(IFollowYou);
    const test = `${IFollowYou} =>  ${req.body.buttonInnertext}`;
    res.cookie('IFollowYou', test, { maxAge: 5000000, httpOnly: true });
    res.send({
        test
    });
   
}); */


app.listen(port, () => { console.log(`Listen on port ${port}`) });
