const express = require('express');
const app = express();
const url = "mongodb+srv://OlgaPan:lHwvtf8aIZl9BWpZ@cluster0.sxv7i.mongodb.net/test";

//body parser
var bodyParser = require('body-parser');
// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'))

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });



const Car = mongoose.model('Car', {
    name: String,
    price: Number
});

const cars = [
    {name: 'Hundai', price: 600000},
    {name: 'Hundai2', price: 600000},
    {name: 'Hundai3', price: 600000},
    {name: 'Hundai4', price: 600000},
    {name: 'Hundai5', price: 600000},
]

const bmw = new Car({ name: 'renult', price: 1230 });
//bmw.save().then(() => console.log('meow3'));
//car.insertMany(cars).then(()=>)

Car.findOneAndUpdate({name: 'Hundai'},{price: 10}, {useFindAndModify:false}.then(doc=>{
    if(doc === null) bmw.save().then(doc => console.log(e))
}))
const House = mongoose.model('house', {
    address: String,
    price:Number
})
const house1 = new House ({address: 'Meir Grossman st 123/14', price: 7000000})
house1.save().then(doc => console.log(doc))

/* app.get('/api/geroup', async (req, res) => {
    let docs = await Car.aggregate([
        { $match: {  } },
        {
            $group: {
                _id: '$name',
                carTypes: { $push: "$$ROOT" },
                sum: { $sum: '$price' }
            }
        },
        {$project:
            {'sum':true,'carTypes':true}
        }
    ])

    res.send(docs)
})
 */

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port))
