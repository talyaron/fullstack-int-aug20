const express = require('express')
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.static('public'))
let products = []

app.post('/postProduct', (req, res) => {  
    
    console.log(req.body)
    products.push(req.body)
    console.log(products)
    
    
    res.send(products);
})
app.delete("/delete", (req, res) => {  

    const name = req.body.name;

    
    let nameIndex = products.findIndex(product => product.name === name);
    
    
    //remove the user from the array
    products.splice(nameIndex, 1); 

    console.log(products);

    //return the users
    res.send({ products })
})

const port = process.env.PORT || 3000;
app.listen(3000, () => { console.log('listen 3000') })