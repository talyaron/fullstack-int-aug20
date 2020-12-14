function handleCheckUser(e){

    e.preventDefault();

    const nameToCheck = e.target.children.userName.value
    const passwordToCheck = e.target.children.password.value
    const root = document.querySelector('#root')
    
    fetch('/check-user', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({nameToCheck, passwordToCheck})
      }).then(res=>res.json())
      .then(data=>{
        if(data.ok == true){
          document.body.style.backgroundColor = ' rgba(102, 255, 102, 0.705)';
          root.innerHTML = `<h1>The user "${nameToCheck}" exists on the server</h1>`;
          // let inputs = document.getElementsByTagName('input');
          // console.log(inputs)
          // console.log(e.target)
          // e.target.value = '';
        }else {
          document.body.style.backgroundColor = ' rgba(255, 121, 121, 0.644)';
          root.innerHTML = `<h1>The user "${nameToCheck}" is not exists on the server</h1>`;
          // e.target.value = '';
        }
    })
  
}