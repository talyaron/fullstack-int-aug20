const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

const mongoose = require('mongoose');
const url = "mongodb+srv://hillel:Aa25802580@cluster0.z35go.mongodb.net/test";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const users = mongoose.model('user', {
    name: String,
    Family: String,
    tel: Number
})

app.get('/get', async (req, res) => {
    const tt = await getserverapi(users)
    res.send({ tt })
})


app.post('/getserver', async (req, res) => {
    const { name, Family, tel } = req.body


    if (name.length > 0 && Family.length > 0) {
        const userfini = new users({ name, Family, tel })
        userfini.save()
            .then(doc => {
                console.log(doc)
            })
            .catch(e => {
                console.log('ER:' + e)
            })

        const tt = await getserverapi(users)

        res.send({ tt })
    }

    else {

    }
})

async function getserverapi(users) {
    try {
        return await users.find({})
    }
    catch (e) {
        console.log('ER:' + e)
    }
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('server listen on port ', port))
