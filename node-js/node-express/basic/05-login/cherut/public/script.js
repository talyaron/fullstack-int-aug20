function handleSubmit(e){
  try {
    e.preventDefault();
    let name = e.target.children.name.value;
    let pass = e.target.children.pass.value;
    let user = {name, pass};
    console.log(user);
  
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    })
        .then(res => res.json())
        .then(data => {
          if(data.ok){
            location.replace("/home.html");
          } else {
            let root = document.querySelector('.root');
            root.innerHTML = 'login failed';
          }
        })
  } catch (e) {
      console.error(e)
  }
}