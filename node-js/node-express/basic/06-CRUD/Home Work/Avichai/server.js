const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static('public'))

const products = []
const users = [
    { username: 'avichai', password: '123', role: 'admin' },
    { username: 'lior', password: '123', role: 'admin' },
    { username: 'reem', password: '123', role: 'user' }
]
app.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log(username, password)

    isUserExist = false
    let role = 'denied'
    let userLoggedIn = false

    const indexUser = users.findIndex(user => user.username === username && user.password === password)
    if (indexUser > -1) {
        isUserExist = true
        role = users[indexUser].role
        userLoggedIn = true
    } else {
        userLoggedIn = false
    }

    res.cookie('role', role, { maxAge: 2000000, httpOnly: true })

    res.send({ userLoggedIn })
})
app.get('/check-valid', (req, res) => {
    const { role } = req.cookies
    isAdmin = false

    if (role === 'admin') {
        isAdmin = true
        console.log('is admin')
    }
    res.send({ isAdmin })
})

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
app.put('/update-product', (req, res) => { // the client UPDATES something to the server. (also called UPDATE)
    const { newProductName } = req.body
    const { newProductPrice } = req.body
    const { newProductImg } = req.body
    const { productName } = req.body

    let productIndex = products.findIndex(product => product.productName === productName)

    products[productIndex].productName = newProductName
    products[productIndex].productPrice = newProductPrice
    products[productIndex].productIMG = newProductImg
    console.log(products)

    res.send({ ok: true, products })
})



app.listen(3000, () => { console.log('listen 3000') })
