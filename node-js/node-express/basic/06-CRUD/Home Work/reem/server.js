const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');

//CRUD

app.use(bodyParser.json())


const Products= [
   
]; //mock data - database simulator

app.use(express.static('public'))

app.get('/read', (req, res) => {
  
    res.send({ ok: true, Products})
})

app.post("/add", (req, res) => {  //the client send somthing to the server (also called CREATE)

    

    let isProductExists = false;
    Products.forEach(product => {
        if (product.name === req.body.name) {
            isProductExists = true
            return;
        };

    });

    if (!isProductExists) {
        Products.push(req.body);
    };


   

    res.send({ ok: true, Products })
})

app.put("/update", (req, res) => {  //the client update somthing to the server (also called UPDATE)
  
    const { newName, newImgUrl, newPrice, nameToUpdate } = req.body;
    let productToUpdate = nameToUpdate;
   
    let productIndex = Products.findIndex(product => product.name === productToUpdate);
    Products[productIndex].name = newName;
    Products[productIndex].imgUrl = newImgUrl;
    Products[productIndex].price = newPrice;
   
    res.send({ ok: true, Products })
})

app.delete("/delete", (req, res) => {

    const { name } = req.body;

    let productIndex = Products.findIndex(product => product.name === name);

    Products.splice(productIndex, 1); 

  

    res.send({ ok: true, Products })
})



app.listen(3000, () => { console.log('listen 3000') })