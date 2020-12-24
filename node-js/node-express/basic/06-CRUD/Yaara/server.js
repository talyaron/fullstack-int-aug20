const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const fs = require('fs');
const {
    get
} = require('http');


app.use(bodyParser.json())
app.use(express.static('public'))



app.post('/products', (req, res, next) => {
    let title = req.body.title;
    let img = req.body.img;
    let price = req.body.price;
    let newProduct = {
        name: title,
        img,
        price
    }

    let products = getProducts();
    let isItemExists = isProductExists(products, title);


    if (!isItemExists) {
        products.push(newProduct);
        saveProducts(products);
        res.status(201).send(newProduct);
    } else {
        res.status(500).send('Error: Product already exists')
    }
})

app.get('/products', (req, res, next) => {
    try {
        let products = getProducts();
        console.log(products);
        res.send(products)
    } catch (e) {
        console.log(e)
    }
})

app.delete('/products/:name', (req, res, next) => {

    let name = req.params.name;
    try {
        let products = getProducts();
        let isItemExists = isProductExists(products, name);

        if (!isItemExists) {
            res.status(500).send('Error: Product does not exists')
        } else {
            let filteredProducts = products.filter(product => product.name != name)
            saveProducts(filteredProducts);
            res.send(filteredProducts)
        }
    } catch (e) {
        console.log(e)
    }
})

app.patch('/products/:name', (req, res, next) => {
    let oldName = req.params.name;
    let newName = req.body.name;
    let img = req.body.img;
    let price = req.body.price;
    let newProduct = {
        name: newName,
        img,
        price
    }

    let products = getProducts();
    let isItemExists = isProductExists(products, oldName);

    if (!isItemExists) {
        res.status(500).send('Error: Product does not exists')
    } else {
        let filteredProducts = products.filter(product => product.name != oldName)
        filteredProducts.push(newProduct);
        saveProducts(filteredProducts);
        res.status(200).send(newProduct)
    }
})

const isProductExists = (products, productName) => {
    let isItemExists = false;
    products.forEach(product => {
        if (product.name == productName) {
            isItemExists = true;
        }
    });
    return isItemExists;
}

const getProducts = () => {
    const jsonData = fs.readFileSync('products.json');
    return JSON.parse(jsonData)
}

const saveProducts = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('products.json', stringifyData)
}





const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`listen on port ${port}`)
}) //listen to clients requests