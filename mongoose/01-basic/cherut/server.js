const express = require('express');
const app = express();


//body parser
var bodyParser = require('body-parser');
// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'))

const mongoose = require('mongoose');

const url = "mongodb+srv://cherut:7o8hgvnQ0RGslJuN@cluster0.2kopr.mongodb.net/test";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Car = mongoose.model('Car', {
    name: String,
    price: Number
});

const bmw = new Car({ name: 'renult', price: 1230 });
bmw.save().then((doc) => console.log(doc));

// app.get('/api/geroup', async (req, res) => {
//     let docs = await Car.aggregate([
//         { $match: {  } },
//         {
//             $group: {
//                 _id: '$name',
//                 carTypes: { $push: "$$ROOT" },
//                 sum: { $sum: '$price' }
//             }
//         },
//         {$project:
//             {'sum':true,'carTypes':true}
//         }
//     ])

//     res.send(docs)
// })


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port))
