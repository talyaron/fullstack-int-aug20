function handleLogin(e){
    e.preventDefault();

    const password = e.target.children.password.value;
    const username = e.target.children.username.value;

    console.log(password, username)

    fetch('/login',{
        method:'post',
        headers:{
            'Content-Type':'application/json'

        },
        body:JSON.stringify({username, password})
    })
    .then(r=>r.json())
    .then(data=>{
        console.log(data.role)
        
            window.location.href = './index2.html'
        
    })
}


