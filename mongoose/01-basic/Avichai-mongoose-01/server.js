// npm i express mongoose body-parser cookie-parser
// npm i express mongoose body-parser cookie-parser
// npm i express mongoose body-parser cookie-parser
// npm i express mongoose body-parser cookie-parser

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const url = 'mongodb+srv://avichai:123@cluster0.7lig6.mongodb.net/test'
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

app.post('/users/find', (req, res) => { //GET-  find user by id localhost:3000/users/USER-ID-HERE
    console.log('finding users by email/username.')
    const { userID } = req.body
    User.find({ $or: [{ email: { $regex: userID } }, { username: { $regex: userID } }] }, (err, users) => {
        if (err) {
            res.send({ ok: false })
        } else {
            console.log(`user found: ${users}`)
            res.send({ ok: true, users })
        }
    })
})
app.post('/users/create', (req, res) => { //POST- add new user Method 1 - FORM: EMAIL,USERNAME,PASSWORD
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
// app.post('/users2', (req, res) => { //POST-  add new user Method 2 POST - FORM: EMAIL,USERNAME,PASSWORD
//     User.create(req.body).then(user => console.log(user), res.send(user)).catch(e => console.log(e))
// })
function findUserForEdit(userID) {
    let findUserInfo = User.findOne({ $or: [{ email: userID }, { username: userID }] }).exec()
    return findUserInfo
};

app.put('/users/edit', async (req, res) => { //PUT- find user by id and update info. 
    let { userID, email, username } = req.body

    let findUserInfo = await findUserForEdit(userID);

    if (findUserInfo.length === 1) {
        if (email === '') { email = findUserInfo[0].email }
        if (username === '') { username = findUserInfo[0].username }
    }

    User.findOneAndUpdate({ $or: [{ email: userID }, { username: userID }] }, {
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
                    } else if (newUser === null) {
                        res.send({ ok: false })
                    }
                    else {
                        res.send({ newUser, users })
                    }
                })
            }
        }
    )
})

app.delete('/users/delete', (req, res) => { //DELETE-  find user and delete 
    const { user } = req.body
    User.findOneAndRemove({
        $or: [{ email: user }, { username: user }]
    }, async function (err, user) {
        if (err) {
            res.send({ ok: false })
        } else {
            User.find({}, (err, users) => {
                if (err) {
                    res.send({ ok: false })
                } else if (user === null) {
                    res.send({ ok: false })
                }
                else {
                    console.log(`deleteing user ${user}`)
                    res.send({ ok: true, users })
                }
            })
        }
    })
})
async function findUsers(infoObj) {
    let email = false
    let username = false
    let users = []
    if (typeof (infoObj.user) != "undefined") {
        username = true
    }
    if (typeof (infoObj.email) != "undefined") {
        email = true
    }
    if (infoObj.user === '' && infoObj.email === '') {
        await User.find({}, (err, user) => {
            if (err) {
                console.log('err')
            } else {
                users = user
            }
        })
    }
    else if (email && username) {
        await User.find({ $or: [{ username: infoObj.user }, { email: infoObj.email }] }, (err, user) => {
            if (err) {
                console.log('err')
            } else {
                users = user
            }
        })
    } else if (email === false && username === false) {
        console.log('nothing entered')
    }
    else if (email === true && username === false) {
        console.log('only email found')
        await User.find({ email: infoObj.email }, (err, user) => {
            if (err) {
                console.log('err')
            } else {
                users = user
            }
        })
    }
    else if (email === false && username === true) {
        await User.find({ username: infoObj.user }, (err, user) => {
            if (err) {
                console.log('err')
            } else {
                users = user
            }
        })
    }
    if (users.length === 0) {
        return null;
    }
    return users;
}
async function random() {
    let sendUser = await findUsers({
        user: '1',
        email: '123'
    });
    if (sendUser === null) {
        console.log('no user found')
    } else {
        console.log(sendUser)
    }
}

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port));