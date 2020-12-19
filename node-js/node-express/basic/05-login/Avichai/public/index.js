function handleNewUser(e) {

    const username = e.target.parentElement.children.username.value
    const password = e.target.parentElement.children.password.value
    console.log(`username: ${username}, password: ${password}`)

    fetch('/new-user', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                document.getElementById('root').innerHTML =
                    `You have created a new account 
                <br>Username: ${username} 
                <br>Password: ${password}
                <br>You can now login.`
            }
        })
}
function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.children.username.value
    const password = e.target.children.password.value
    console.log(`username: ${username}, password: ${password}`)

    fetch('/send-user-data', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json())
        .then(data => {
            if (data.validate) {
                window.location.replace("homepage.html");
            } else {
                document.getElementById('root').innerHTML = `Bad username or password! Try again!`
                console.log('sorry bad credentials')
            }
            console.log(data.validate)
        })
}
