function handleSubmit(e) {
  e.preventDefault();
  const user = e.target.value;

  let root = document.querySelector('.root');
  root.innerText += `${user}`;

  fetch('/send-user', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
  })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          
          
      })

}

