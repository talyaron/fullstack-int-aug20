const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'))

const mongoose = require('mongoose');
const url = "mongodb+srv://hillel:Aa25802580@cluster0.z35go.mongodb.net/test";
var list
let mongooseOK = false;
try {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
        if (err==null) {
            list = mongoose.model('item', {
                name: String,
                catgory: String,
                status: String,
                number: Number
            })
            mongooseOK = true
        }
    });
} catch (error) {
    console.log("mongoose connect error: " + error.message)
}





app.post('/checkIf', async (req, res) => {
    const { dataid } = req.body

    if (req.body.checkBox == true) {
        checkIf = true
    } else {
        checkIf = false
    }

    await list.findByIdAndUpdate(dataid, { status: checkIf })

    const data = await list.find({})
    res.send({ data })
})


app.get('/onPageLoad', async (req, res) => {
    const data = await list.find({})
    res.send({ data })
})

app.post('/deleteItem', async (req, res) => {
    const { dataid } = req.body
    await list.findByIdAndDelete(dataid)
    const data = await list.find({})
    res.send({ data })
})

app.post('/sendItem', async (req, res) => {
    // await new Promise(r => setTimeout(r, 2000));
    
    if (mongooseOK == false) {
        res.send({ Result: 'Error', Message: 'Mongoose not connected' })
        return false;
    }
    const { name, catgory, number } = req.body


    if (name.length > 0) {
        const newItem = new list({ name, catgory, number, status: 'false' })
        await newItem.save()
            .then(doc => {
            })
            .catch(e => {
                console.log('ER:' + e)
            })
        const data = await list.find({})
        res.send({ data })
    }
    else {
    }
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('server listen on port ', port))
