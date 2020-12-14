

function handleSubmit(e) {
    e.preventDefault();


    let username = e.target.children.username.value;
    let password = e.target.children.password.value;
    let value = {password, username}

    console.log(password, username)
    

    fetch('/check-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({value})
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.k == true){
         console.log(data.k)
         document.body.style.backgroundColor = 'green'
         document.getElementById('root').innerHTML =  `Welcome  ${data.user} `
        }
        else{
            console.log(data.k)
            document.body.style.backgroundColor = 'red'
            document.getElementById('root').innerHTML =  ` The username or password are inncorrect. please enter try agian `
        }

       
        

    })
}