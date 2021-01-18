const express = require('express');
const app = express();

//body parser
var bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'))


// mongoose
const mongoose = require('mongoose');
const url = 'mongodb+srv://tal1:7BCWK39lvemVRQNH@tal-test1.m39if.mongodb.net/test';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Car = mongoose.model('Car', { //collection
    name: String,
    price: Number
});

const cars = [
    { name: 'Hundai', price: 60000 },
    { name: 'Hundai2', price: 60000 },
    { name: 'Hundai3', price: 60000 },
    { name: 'Hundai4', price: 60000 },
    { name: 'Hundai5', price: 60000 },
]

const bmw = new Car({ name: 'Hundai', price: 60000 });
// bmw.save().then(doc => console.log(doc)).catch(e=>{console.log(e)});
// Car.insertMany(cars).then(() => { console.log('cars saved correctly') }).catch(e => { console.error(e.message) })

// Car.findOneAndUpdate({ name: 'Hundai' },{price:17},{returnOriginal:false, useFindAndModify:false}).then(doc => {
//     if (doc === null) bmw.save().then(doc => console.log(doc)).catch(e => { console.log(e) });
//     console.log(doc)
// })

Car.updateMany({ name: /Hundai/i },{price:23}).then(docs => {
    
    console.log(docs)
})

const Man = mongoose.model('Man', {
    address: String,
    price: Number
})
const house1 = new Man({ address: 'tcharnichovski st 123/14', price: 7000000 })
// house1.save().then(doc => console.log(doc)).catch(e=>{console.log(e)});

app.get('/api/group', async (req, res) => {
    try {
        let docs = await Car.find({ name: 'Hundai' })

        res.send(docs)
    } catch (e) {
        console.log(e)
    }
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port))
