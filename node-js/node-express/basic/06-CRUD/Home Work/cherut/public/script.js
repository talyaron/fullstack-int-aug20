function handleGetProduct() {
  alert('get');
  fetch('/read')
      .then(r => r.json())
      .then(data => {
          const { Products } = data;
          console.log(Products)
          // writeUsersToDOM(products);
      })
}


function handleAddProduct(e) {

  alert('add');
  e.preventDefault();
  let { name, imgUrl ,price} = e.target.children;
  name = name.value;
  imgUrl = imgUrl.value;
  price = price.value;

  console.log(name, imgUrl, price)

  fetch('/add', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, imgUrl, price })
  })
      .then(r => r.json())
      .then(data => {

        const { Products } = data;
        console.log(Products)
          // writeUsersToDOM(users);
      })
}



function handleDeleteProduct(username) {

  alert('del');
  console.log(username)

  fetch('/delete', {
      method: 'delete',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
  })
      .then(r => r.json())
      .then(data => {
          console.log(data)
          const { users } = data;
          writeUsersToDOM(users);
      })
}

function writeUsersToDOM(users) { //write users to DOM
  let html = '';
  users.forEach(user => {
      html += `<p>username:${user.username}, password:${user.password} <button onclick='deleteUser("${user.username}")'>Delete User</button><form onsubmit='handleUpdatePassword(event, "${user.username}")'><input type='text' name='newPassword' placeholder='new password' ><button type='submit'>UpdatePassword</button></form></p>`
  })

  document.getElementById('users').innerHTML = html;
}

function handleUpdateProduct(e, username){
  alert('update');

  e.preventDefault();
  // console.log(username)

  const newPass = e.target.children[0].value;
  fetch('/update', {
      method: 'put',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newPass, username})
  })
      .then(r => r.json())
      .then(data => {
          console.log(data)
          const { users } = data;
          // writeUsersToDOM(users);
          // console.log(data.users)
          writeUsersToDOM(users);
      })

}