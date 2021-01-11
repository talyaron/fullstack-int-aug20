const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

const mongoose = require('mongoose');
const url = "mongodb+srv://hillel:Aa25802580@cluster0.z35go.mongodb.net/test";


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Users = mongoose.model('Car', {
    name: String,
    price: Number
});

const bmw = new Users({ name: 'hillel', price: 12345 });
bmw.save().then(doc => console.log(doc)).catch(e => { console.log(e) });


// const House = mongoose.model('House', {
//     address: String,
//     price: Number
// });

// const House1 = new House({address:'blabla', price:70000})
// House1.save().then(doc=> console.log(doc))

app.get('/api/geroup', async (req, res) => {
    let docs = await Car.find({})

    res.send(docs)
}) 


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port))
