const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const url = 'mongodb+srv://avichai:123@cluster0.7lig6.mongodb.net/test'
const Schema = mongoose.Schema

app.use(bodyParser.json());
app.use(express.static('public'))


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Car = mongoose.model('Car', {
    name: String,
    price: Number
});

const bmw = new Car({ name: 'Hundai', price: 60000 });
// bmw.save().then(doc => console.log(doc)).catch(e => { console.log(e) });

const Email = mongoose.model('User', {
    email: {
        type: String,
        unique: true, // if email exist in db section, will not be created!
        required: true // must be here or wont be added to db.
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    when: {
        type: Date, // date type
        default: Date.now // give default date if user does not enter date.
    }
})
const email = new Email({ email: 'avichai74@gmail.com', password: '123', username: '123' })
// email.save().then(data => console.log(data)).catch(e => { console.log(e) });

app.get('/users', (req, res) => {
    console.log('finding users.')
    Email.find({})
        .exec(function (err, info) {
            if (err) {
                res.send({ ok: false })
            } else {
                res.send({info})
            }
        })

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port));