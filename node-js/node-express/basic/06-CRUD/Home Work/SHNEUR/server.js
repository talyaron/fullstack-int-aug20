const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');

//CRUD

app.use(bodyParser.json())

const products = []; //mock data - database simulator

app.use(express.static('public'))

app.get('/read', (req, res) => { //the client get something from the server (also called READ)
    res.send({
        ok: true,
        products
    })
})

app.post("/post", (req, res) => { //the client send somthing to the server (also called CREATE)

    console.log(req.body)

    let isProductExists = false;
    products.forEach(elm => {
        if (elm.proName === req.body.proName) {
            isProductExists = true
            return;
        };

    });

    if (!isProductExists) {
        products.push(req.body);
    };

    console.log(products);
    res.send({
        ok: true,
        products
    })
})

app.put("/update", (req, res) => { //the client update somthing to the server (also called UPDATE)

    //find index of product in products
    let {
        newPrice,
        proName
    } = req.body

    let productIndex = products.findIndex(product => product.proName === proName);

    // update the arry in this index, and change password
    products[productIndex].proPrice = newPrice
    console.log(products)

    //return products

    res.send({
        ok: true,
        products

    })
})


app.delete("/delete", (req, res) => { //the client ask the server to delete somthing on the server (also called DELETE)

    const {
        proName
    } = req.body;

    //find the index of the product in the array
    let productIndex = products.findIndex(elm => {
        elm.proName === proName
    });


    //remove the product from the array
    products.splice(productIndex, 1);

    console.log(products);

    //return the products
    res.send({
        ok: true,
        products
    })
})

let port = 4000
app.listen(port, () => {
    console.log(`listen ${port}`)
})