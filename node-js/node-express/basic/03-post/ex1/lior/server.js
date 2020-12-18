const express = require('express');
const app = express();
const bodyParser = require('body-Parser');

app.use(bodyParser.json());

app.use(express.static('public'));

const login = { username: 'lior', password: '1111' }
// {username:'moran',password:'2222'},
// {username:'cherut',password:'3333'},
// {username:'tal',password:'4444'}]

// const user = login.map(a => a.username);
// const pass = login.map(a => a.password);


app.post('/send_login_information', (req, res) => {

    const { UserID, pass } = req.body
    let ok = false;

    console.log(req.body);

    if ((UserID == login.username) && (pass == login.password)) {
        ok = true;

    }
    res.send({ ok, UserID, pass });

})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) }) 