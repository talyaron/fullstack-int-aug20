const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(password, username)

function handleSubmit(e) {
    

    fetch('/send-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username},{password})
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
      

    })
}