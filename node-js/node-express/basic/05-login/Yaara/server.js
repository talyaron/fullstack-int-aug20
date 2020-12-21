const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');



const users = [{
    name: 'yaara',
    password: '123'
},
{
    name: 'dan',
    password: '1234'
}
];

app.use(bodyParser.json()) 


app.use(express.static('public')) 

app.post('/send-details', (req, res, next) => {
let userIndex = users.findIndex(user => user.name == req.body.name);
    if (userIndex > -1) {
        // if there is a user
        if (users[userIndex].password == req.body.password) {
            // if the entered password is correct

            createCookie(res, req.body.name);   
            res.send(true);
            // console.log(req.body.name, req.body.password);
    } else {
        // the user found but the password is invalid
        res.send(false);
    }
} else {
    // if there is no user with the given name
    res.send(false);
    }
    next();
})

const createCookie = (response, userName) => {
    let secondsToCookie = 60000;
    response.cookie('details', userName, { maxAge: secondsToCookie, httpOnly: false });  
}





const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`listen on port ${port}`)
}) //listen to clients requests