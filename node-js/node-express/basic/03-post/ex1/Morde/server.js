const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));

const usersArray = ["morde","tal","eyal","guy"];

app.post("/login",(req,res)=>{
    const username = req.body.username;
    const regExp = new RegExp(username,"g");
    if(regExp.test(usersArray)){
        res.redirect("/success.html")
    }else{
        res.redirect("/failure.html")
    }
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log('server listen on port', port)})