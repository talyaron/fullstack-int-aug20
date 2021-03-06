const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');

//CRUD

app.use(bodyParser.json())


const users = []; //mock data - database simulator

app.use(express.static('public'))

app.get('/read', (req, res) => {   //the client get something from the server (also called READ)
    res.send({ ok: true, users })
})

app.post("/post", (req, res) => {  //the client send somthing to the server (also called CREATE)

    console.log(req.body)

    let isUserExists = false;
    users.forEach(user => {
        if (user.username === req.body.username) {
            isUserExists = true
            return;
        };

    });

    if (!isUserExists) {
        users.push(req.body);
    };


    console.log(users);

    res.send({ ok: true, users })
})




app.delete("/delete", (req, res) => {  //the client ask the server to delete somthing on the server (also called DELETE)


    const { username } = req.body;

    //find the index of the user in the array
    let userIndex = users.findIndex(user => user.username === username);
    
    
    //remove the user from the array
    users.splice(userIndex, 1); 

    console.log(users);

    //return the users
    res.send({ ok: true, users })
})



app.listen(8000, () => { console.log('listen 8000') })