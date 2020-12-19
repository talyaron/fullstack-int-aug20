function handleSubmit(e) {
    e.preventDefault();


    let username = e.target.children.username.value;
    let password = e.target.children.password.value;
    let user = {username, password}

    console.log(username, password)
    

    fetch('/check-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.check == true){
            location.replace("/homepage.html");
} else{
    let errorText = document.querySelector('.errorText');
    errorText.innerHTML = 'login failed'; 
}
             
        

    })
}