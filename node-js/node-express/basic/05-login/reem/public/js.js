function handleSubmit(e){
    try {
      e.preventDefault();
      let name = e.target.children.name.value;
      let pwd = e.target.children.pwd.value;
      let user = {name, pwd};
      console.log(user);

fetch('/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
})
    .then( r => r.json())
    .then(data =>{
        if(data.ok){
            location.replace("/success.html");
} else{
    let root = document.querySelector('.root');
    root.innerHTML = 'login failed'; 
}
    })
} catch (e) { 
    console.error(e)
}
}