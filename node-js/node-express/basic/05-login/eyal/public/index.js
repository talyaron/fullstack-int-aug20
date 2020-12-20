function handlesubmit(e) {
    console.log('handlesubmit activated')
    e.preventDefault();
    console.log('submit');
    const UserID = e.target.UserID.value;
    const mypass = e.target.Password.value;
    const UserDetlis = { UserID, mypass };

    fetch('/U_info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(UserDetlis),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          document.getElementById('main').innerHTML = '<h1>ok</h1>';
          window.location.replace('ok.html');
        } else {
          document.getElementById('main').innerHTML =
            '<h1>bad user name or password</h1>';
           window.location.replace('Rejected.html');
        }

        console.log(data);
        document.getElementById('root').innerText = data.body;
      });
    console.log(UserDetlis);
  }


  
  function handleAddUser(e) {
    console.log('handleAddUser activated')
    const UserID = document.getElementById('UserID').value;
    const mypass = document.getElementById('Password').value;
    console.log(UserID);
    const UserDetlis = { UserID, mypass };

    console.log(UserDetlis);

    fetch('/Change_user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(UserDetlis),
    })
      .then((res) => res.json())
      .then((data) => {});
  }

 