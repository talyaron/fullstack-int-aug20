const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
var cors = require('cors')

app.use(cors());

app.use(express.static('public'));
app.use(bodyParser.json())

app.post('/try', (req, res) => {

    let {ingredientToSearch} = req.body;
    console.log(ingredientToSearch);

    

    fetch(`https://recipe-puppy.p.rapidapi.com/?p=2&q=${ingredientToSearch}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "3141833d07msh1c4d90f6d62efb2p1b4fccjsn887bca0704a2",
                "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
            }
        })
        .then(r => r.json())
        .then(response => {
   
            res.send(response);
        })
        .catch(err => {
            console.error(err);
        });

})


app.listen(3000, () => {
    console.log('listen 3000')
})