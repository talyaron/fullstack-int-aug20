 function loginGetData(e) {

  e.preventDefault();

  const password = e.target.children.password.value;

   fetch('/checkAuthorization', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password
      })
    })
    .then(r => r.json())
    .then(data => {
      console.log(data.result.Authorized)
    })
    .catch(e => {
      console.log(e)
    })
}