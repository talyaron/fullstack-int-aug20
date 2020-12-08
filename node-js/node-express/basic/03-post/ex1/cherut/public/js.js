function handleCheckUser(e){
  if (e.keyCode === 13) {
    e.preventDefault();
    let nameToCheck = e.target.value
    
    fetch('/check-user', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({nameToCheck})
      }).then(res=>res.json())
      .then(data=>{
        if(data.k == true){
          document.body.style.backgroundColor = 'green';
        }else {
          document.body.style.backgroundColor = 'red';
        }
    })
  }
}