const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');

app.use(bodyParser.json())
const users = []
app.use(express.static('public'))

const products = []
app.post('/post-product', (req, res) => {
    let doesProductExist = false

    products.forEach(product => {
        if (product.productName === req.body.productName) {
            doesProductExist = true
            console.log('alreay has this product')
        }
    })
    if (!doesProductExist) {
        products.push(req.body)
    }

    console.log(products)
    res.send({ ok: true, products })
})
app.delete('/delete', (req, res) => {
    const { productName } = req.body
    let productIndex = products.findIndex(product => product.productName === productName)
    products.splice(productIndex, 1)
    res.send({ products })
})

app.get('/get-products', (req, res) => {
    res.send({ ok: true, products })
})
app.put('/update-name', (req, res) => { // the client UPDATES something to the server. (also called UPDATE)
    const { newProductName } = req.body
    const { productName } = req.body

    let productIndex = products.findIndex(product => product.productName === productName)
    products[productIndex].productName = newProductName
    console.log(products)

    res.send({ ok: true, products })
})
app.put('/update-price', (req, res) => { // the client UPDATES something to the server. (also called UPDATE)
    const { newProductPrice } = req.body
    const { productName } = req.body

    let productIndex = products.findIndex(product => product.productName === productName)
    products[productIndex].productPrice = newProductPrice
    console.log(products)

    res.send({ ok: true, products })
})
app.put('/update-img', (req, res) => { // the client UPDATES something to the server. (also called UPDATE)
    const { newProductImg } = req.body
    const { productName } = req.body

    let productIndex = products.findIndex(product => product.productName === productName)
    products[productIndex].productIMG = newProductImg
    console.log(products)

    res.send({ ok: true, products })
})


app.listen(3000, () => { console.log('listen 3000') })
