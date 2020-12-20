const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'))


app.post('/buttonsClicked', (req, res) => {
    let { IFollowYou } = req.cookies;
    console.log(IFollowYou);

    let test = '';
    
    if (IFollowYou !== undefined) {
         test = `${IFollowYou} =>  ${req.body.buttonInnertext}`;
    } else {
        test = `>> ${req.body.buttonInnertext}`;
    }
    res.cookie('IFollowYou', test, { maxAge: 5000000, httpOnly: true });
    res.send({
        test
    });
   
});

<<<<<<< HEAD
const port = process.env.PORT || 3000;
<<<<<<< Updated upstream:node-js/node-express/basic/04-cookies/hw/eyal/server.js
=======

>>>>>>> eyal
app.listen(port, () => { console.log(`Listen on port ${port}`) });
=======
app.listen(port,()=>{console.log(`Listen on port ${port}`)});


>>>>>>> Stashed changes:node-js/node-express/basic/04-cookies/hw-track-user/eyal/server.js
