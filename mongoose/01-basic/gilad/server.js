const express = require('express');
const app = express();
const url = "mongodb+srv://gilad:sdNpgKycrW11VeOS@cluster0.4scbv.mongodb.net/test";

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


const bmw = new Car({ name: 'renult', price: 1230 });
// bmw.save().then(() => console.log('meow3'));

const Chair = mongoose.model('Chair', {
    name: String,
    price: Number
});
const chair1 = new Chair({ name: 'Iron Throne', price: 999999999 });
//  chair1.save().then(() => console.log('meow3'));

app.get('/api/geroup', async (req, res) => {
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


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port))
