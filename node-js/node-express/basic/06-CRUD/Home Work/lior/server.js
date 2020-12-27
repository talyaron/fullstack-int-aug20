const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cookieParser = require('cookie-parser');

app.use(cookieParser());

const prodacts = []

app.use(express.static('public'))

app.get('/read', (req, res) => {   
    res.send({ ok: true, prodacts })
})

app.post("/post", (req, res) => {  

    console.log(req.body)

//     let isUserExists = false;
//     users.forEach(user => {
//         if (user.username === req.body.username) {
//             isUserExists = true
//             return;
//         };

//     });

//     if (!isUserExists) {
//         users.push(req.body);
//     };


//     console.log(users);

//     res.send({ ok: true, users })
})

app.put('/update-product', (req, res) => {
    const { newName } = req.body
    const { newPrice } = req.body
    const { newImg } = req.body
    const { Name } = req.body

    let productIndex = products.findIndex(product => product.Name === Name)

    products[productIndex].productName = newName
    products[productIndex].productPrice = newPrice
    products[productIndex].productIMG = newImg
    console.log(products)

    res.send({ ok: true, products })
})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })