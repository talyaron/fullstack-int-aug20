const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const url = 'mongodb+srv://avichai:123@cluster0.7lig6.mongodb.net/test'
const Schema = mongoose.Schema
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('returnOriginal', false); // will show updated info when updating a user.

const User = mongoose.model('User', { // scheme for adding user
    email: {
        type: String,
        unique: true, // if email exist in db section, will not be created!
        required: true // must have email
    },
    username: {
        type: String,
        unique: true,
        required: true // must have username
    },
    password: {
        type: String,
        required: true  // must have password
    },
    whenUserCreated: {
        type: Date, // date type
        default: Date.now // give default date if user does not enter date.
    },
    role: {
        type: String,
        default: 'public'
    }
})


app.get('/users', (req, res) => { //GET-  show all users
    console.log('finding users.')
    User.find({}, (err, users) => {
        if (err) {
            res.send({ ok: false })
        } else {
            res.send({ users })
        }
    })
})

app.get('/users/:id', (req, res) => { //GET-  find user by id localhost:3000/users/USER-ID-HERE
    console.log('finding user by id.')
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.send({ ok: false })
        } else {
            console.log(`deleteing user ${user}`)
            res.send({ ok: true, user })
        }
    })
})
app.post('/users', (req, res) => { //POST- add new user Method 1 - FORM: EMAIL,USERNAME,PASSWORD
    const newUser = new User();
    newUser.email = req.body.email
    newUser.username = req.body.username
    newUser.password = req.body.password


    newUser.save((err, newUser) => {
        if (err) {
            console.log('User with this email already exist')
            res.send({ ok: false })
        } else {
            User.find({}, (err, users) => {
                if (err) {
                    res.send({ ok: false })
                } else {
                    console.log(newUser)
                    res.send({ newUser, users })
                }
            })
        }
    })
})
app.post('/login', (req, res) => { // valid logn
    const { username, password } = req.body


    User.find({}, async (err, users) => {
        let userValid = false
        let role = 'denied'

        if (err) {
            res.send({ ok: false })
        } else {
            users.forEach(user => {
                if (user.username === username || user.email === username && user.password === password) {
                    console.log('USERNAME OR EMAIL FOUND')
                    if (user.password === password) {
                        userValid = true
                    }
                } else {
                    console.log('not found')
                }
            })
            if (userValid === true) {
                role = await giveRole(username)
                console.log('user role: ' + role)
            }

            res.cookie('userPower', role, { maxAge: 5000000, httpOnly: true })
            res.send({ userValid })
        }
    })
})
async function giveRole(username) {
    let role = 'denied'
    await User.findOne({ $or: [{ username: username }, { email: username }] }, (err, user) => {
        if (err) {
            console.log(err)
        } else {
            role = user.role
        }
    })
    return role;
}
app.get('/checkCookie', (req, res) => {
    const cookie = req.cookies
    res.send({ cookie })
})
app.post('/users2', (req, res) => { //POST-  add new user Method 2 POST - FORM: EMAIL,USERNAME,PASSWORD
    User.create(req.body).then(user => console.log(user), res.send(user)).catch(e => console.log(e))
})

app.put('/users/:id', (req, res) => { //PUT- find user by id and update info. 
    const { email, username } = req.body

    User.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set:
            { email, username }
    },
        function (err, newUser) {
            if (err) {
                console.log('error')
                res.send({ ok: false });
            } else {
                User.find({}, (err, users) => {
                    if (err) {
                        res.send({ ok: false })
                    } else {
                        console.log(newUser)
                        res.send({ newUser, users })
                    }
                })
            }
        }
    )
})

app.delete('/users/:id', (req, res) => { //DELETE-  find user and delete 
    User.findOneAndRemove({
        _id: req.params.id
    }, function (err, user) {
        if (err) {
            res.send({ ok: false })
        } else {
            User.find({}, (err, users) => {
                if (err) {
                    res.send({ ok: false })
                } else {
                    console.log(`deleteing user ${user}`)
                    res.send({ ok: true, users })
                }
            })
        }
    })
})
app.delete('/deleteAll', (req, res) => { //DELETE-  find user and delete localhost:3000/users/USER-ID-HERE
    User.deleteMany({}, function (err, user) {
        if (err) {
            console.log('err')
            res.send({ ok: false })
        } else {
            res.send({ ok: true })
        }
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port));