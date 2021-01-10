const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const url = 'mongodb+srv://avichai:123@cluster0.7lig6.mongodb.net/test'
const Schema = mongoose.Schema

app.use(bodyParser.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

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

const User = mongoose.model('User', { // scheme for adding user/email
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
const user = new User({ email: 'aftat@gmail.com', password: '123', username: '123' })
// user.save().then(data => console.log(data)).catch(e => { console.log(e) });

app.get('/users', (req, res) => {
    console.log('finding users.')
    User.find({})
        .exec(function (err, info) {
            if (err) {
                res.send({ ok: false })
            } else {
                res.json(info)
            }
        })
})
app.get('/users/:id', (req, res) => {
    console.log('finding user.')
    User.findOne({
        _id: req.params.id
    }).exec(function (err, user) {
        if (err) {
            res.send({ ok: false })
        } else {
            console.log(user)
            res.send(user)
        }
    })
})
app.post('/users', (req, res) => {
    const newUser = new User();
    newUser.email = req.body.email
    newUser.username = req.body.username
    newUser.password = req.body.password

    newUser.save().then(user => console.log(user), res.send(user)).catch(e => console.log(e))
})
app.post('/users2', (req, res) => {
    User.create(req.body).then(user => console.log(user), res.send(user)).catch(e => console.log(e))
})

app.put('/user/:id', (req, res) => {
    User.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set:
            { email: req.body.email }
    },
        function (err, newUser) {
            if (err) {
                console.log('error')
            } else {
                console.log(newUser)
                res.send(newUser);
            }
        }
    )
})
app.delete('/user/:id', (req, res) => {
    User.findOneAndRemove({
        _id: req.params.id
    }, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            console.log(`deleteing user ${user}`)
            res.sendStatus(204)
        }
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port));