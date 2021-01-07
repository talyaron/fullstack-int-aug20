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

const bmw = new Car({ name: 'Hundai', price: 60000 });
// bmw.save().then(doc => console.log(doc)).catch(e=>{console.log(e)});

const Man = mongoose.model('Man',{
    address:String,
    price:Number
})
const house1 = new Man({address:'tcharnichovski st 123/14', price:7000000})
house1.save().then(doc => console.log(doc)).catch(e=>{console.log(e)});

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