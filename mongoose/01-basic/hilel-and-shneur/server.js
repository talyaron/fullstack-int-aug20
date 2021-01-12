const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'))

const mongoose = require('mongoose');
const url = "mongodb+srv://hillel:Aa25802580@cluster0.z35go.mongodb.net/test";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const list = mongoose.model('item', {
    name: String,
    catgory: String,
    status: String,
    number: Number
})


app.post('/checkIf', async (req, res) => {
    const { dataid } = req.body

    if (req.body.checkBox == true) {
        checkIf = true
    } else {
        checkIf = false
    }
    
    await list.findByIdAndUpdate( dataid , {status:checkIf})

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
    const { name, catgory, number } = req.body


    if (name.length > 0) {
        const newItem = new list({ name, catgory, number, status: 'false' })
        newItem.save()
            .then(doc => {
                console.log(doc)
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

// app.post('/delete', async (req, res) => {
//     const dele = req.body.dataid
//     await users.deleteOne({ _id: dele });
//     res.send({ ok:'ok' })
// })

// async function getserverapi(users) {
//     try {
//         return await users.find({})
//     }
//     catch (e) {
//         console.log('ER:' + e)
//     }
// }

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('server listen on port ', port))
