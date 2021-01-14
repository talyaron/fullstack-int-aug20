const express = require('express');
const app = express();

//body parser
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'))

// mongoose
const mongoose = require('mongoose'); //npm i mongoose
const url = 'mongodb+srv://KatyaRu:qHO9SxoCGZc6lv7C@cluster0.mfqlq.mongodb.net/test'; // the /test creat folder names test

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); //connectin to the db


//----------------------------CARS--------------------//
const Car = mongoose.model('Car', { //collection
    name: String, //with big letter !!!
    price: Number
});

const bmw = new Car({ name: 'Hundai', price: 60000 });
// bmw.save().then(doc => console.log(doc)) //return the doc that we create
//     .catch(e => {
//         console.log(e)
//     }); //if we have the same car, it will save with diffrent _id


//-------------------------------HOUSE--------------------------//
const House = mongoose.model('House', {
    adress: String,
    price: Number
})

const house1 = new House({ adress: 'Jabutinsky st 96/2', price: 123123 })
    // house1.save().then(doc => console.log(doc)) //return the doc that we create
    //     .catch(e => {
    //         console.log(e)
    //     });


//---------------Search and send to client-------------------//

app.get('/api/group', async(req, res) => {
    ///if we dont have the doc, save new one
    Car.findOne({ name: 'Hundai', price: 60000 }).then(doc => {
        if (doc === null) bmw.save().then(doc => console.log(doc)).catch(e => { console.log(e) });
    })

    // Search and send to client
    try {
        let docs = await Car.find({ name: 'Hundai' }) //if we want all data that we have in Car we write => Car.find({}) without anything in find

        res.send(docs)
    } catch (e) {
        console.log(e)
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port))