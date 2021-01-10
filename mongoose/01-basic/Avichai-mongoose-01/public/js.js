function handleFindAllUsers(e) {

    fetch('/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            writeUsersToDom(data.users)
        })
}

function handleFindUser(e) {
    e.preventDefault()
    const userID = e.target.children.userID.value

    fetch(`/users/${userID}`)
        .then(res => res.json())
        .then(data => {
            if (data.ok === false) {
                console.log(`user with ID: ${userID} not found`)
            } else if (data.user === null) {
                console.log(`user with ID: ${userID} not found`)
            }
            else {
                console.log(data.user)
            }
        })
}

function handleNewUser(e) {
    e.preventDefault()
    const email = e.target.children.email.value
    const username = e.target.children.username.value
    const password = e.target.children.password.value

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
    })
        .then(res => res.json())
        .then(data => {
            if (data.ok === false) {
                console.log('User with this email or username already exist')
            } else {
                console.log(`New User created--
            email: ${data.newUser.email}
            Username: ${data.newUser.username}
            Password: ${data.newUser.password}
            User ID: ${data.newUser._id} `)
                // writeUsersToDom(data.users)
            }
        })
}
function handleEditUser(e) {
    e.preventDefault();
    const userID = e.target.children.userID.value
    const email = e.target.children.email.value
    const username = e.target.children.username.value

    fetch(`/users/${userID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username })
    })
        .then(res => res.json())
        .then(data => {
            if (data.ok === false) {
                console.log(`User with ID: ${userID} not found`)
            } else {
                console.log(`User id: ${userID}, Info has been updated.`)
                console.log(`New email: ${data.newUser.email} `)
                console.log(`New Username: ${data.newUser.username} `)
                console.log(data.users)
                writeUsersToDom(data.users)
            }
        })
}
function handleDeleteUser(e) {
    e.preventDefault();
    const userID = e.target.children.userID.value

    fetch(`/users/${userID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
        .then(res => res.json())
        .then(data => {
            if (data.ok === false) {
                console.log(`User with ID: ${userID} not found`)
            } else {
                console.log(`user with id ${userID} is deleted.`)
                console.log(data.users)
                writeUsersToDom(data.users)
            }
        })
}
function handleDeleteAllUser(e) {
    e.preventDefault()
    fetch(`/deleteAll`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
        .then(res => res.json())
        .then(data => {
            if (data.ok === false) {
                console.log(`Error no users deleted`)
            } else {
                console.log(`all users deleted.`)
                let root = document.getElementById('root')
                root.innerHTML = ''
            }
        })
}
function handleLogin(e) {
    e.preventDefault()
    const username = e.target.children.username.value
    const password = e.target.children.password.value
    console.log(username, password)

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json())
        .then(data => {
            if (data.userValid) {
                window.location.replace("/welcome.html");
            } else {
                console.log('not found')
            }
        })
}
function handleAdminRedirect(e) {
    fetch('/checkCookie')
        .then(r => r.json())
        .then(data => {
            let cookie = data.cookie.userPower
            if (cookie === 'admin') {
                window.location.replace("/adminPage.html");
            } else {
                let root = document.getElementById('root')
                root.innerHTML = 'Sorry you have no accses to this area!'
                console.log('Sorry you cannot enter this area!')
            }
        })
}
function checkRole() {
    fetch('/checkCookie')
        .then(r => r.json())
        .then(data => {
            let cookie = data.cookie.userPower
            if (cookie === 'admin') {
                console.log('CookieCheck -- valid -- admin')
            } else {
                window.location.replace("/index.html");
            }
        })

    setInterval(function () {
        fetch('/checkCookie')
            .then(r => r.json())
            .then(data => {
                let cookie = data.cookie.userPower
                if (cookie === 'admin') {
                    console.log('CookieCheck -- valid -- admin')
                } else {
                    window.location.replace("/index.html");
                }
            })
    }, 5000);
}
function writeUsersToDom(data) {
    let html = ''
    let root = document.getElementById('root')
    data.forEach(user => {
        html += `<p class='userDisplay'>         
                email: ${user.email}
                Username: ${user.username}
                Password: ${user.password}
                User ID: ${user._id}
                 </p>`
    })
    root.innerHTML = html
}