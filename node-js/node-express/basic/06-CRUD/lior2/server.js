const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cookieParser = require('cookie-parser');

app.use(cookieParser());

const prodacts = []
app.use(express.static('public'))

// app.get('/read', (req, res) => {
//     res.send({ ok: true, prodacts })
// })

app.post('/post', (req, res) => {  
   
    console.log()
    // res.send({ products })

    // let prodactExist = false ;

    // prodacts.forEach(prodact =>{
    //     if (product.name === req.body.name) {
    //         prodactExist = true
    //         console.log('alreay have')
    //     }
    // })
    // if (!prodactExist) {
    //     products.push(req.body)
    // }

    // console.log(products)
    // res.send({ ok: true, products })
})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })