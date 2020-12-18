const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cookieParser());





const array = [{
        username: "John",
        password: "Black",
    },
    {
        username: "Olga",
        password: "Blue",
    },
    {
        username: "Michael",
        password: "Red",
    },
    {
        username: "Leonid",
        password: "Green",
    },

];


app.post('/check-user', (req, res) => {

    console.log(req.body);

    let user = req.body.user

    console.log(user.username)
   
   

   const check = array.some(o => 
            o.username === user.username && o.password === user.password
       )
console.log(check)
if(check){
    res.cookie("userAuthorized",user,{ maxAge: 30000, httpOnly:false});
}
res.send({check})
})

app.use(express.static('public'))





const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})