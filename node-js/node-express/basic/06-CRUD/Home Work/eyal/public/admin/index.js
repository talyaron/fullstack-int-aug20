
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
        // document.getElementById('main').innerHTML = '<h1>ok</h1>';
        window.location.replace('/admin/admin.html');
      } else {
        document.getElementById('main').innerHTML =
          '<h1>bad user name or password</h1>';
        //  window.location.replace('Rejected.html');
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
    .then((data) => {
      document.getElementById('main').innerHTML =
        '<h1>user have been add</h1>';
    });
}

function handleAddProduct(e) {
  e.preventDefault();
  console.log('submit');
  const ProductName = e.target.ProductName.value;
  const image = e.target.Image.value;
  const price = e.target.Price.value;
  /* let { ProductName, image, price } = e.target.children;
  ProductName = ProductName.value;
  image = image.value;
  price = price.value; */ 
  console.log(`submit:${ProductName} ; ${image}; ${price}`);

  fetch('/post', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ProductName, image, price })
  })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      const { products } = data;
      writeProductsToDOM(products);
    })
}

function writeProductsToDOM(products) { //write users to DOM
  let html = '';
  products.forEach(product => {
    html += `<div class="card" >
      <img  style="margin:0 auto 0" src="data:image/jpeg;base64,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" alt="" >
      <input id="Image" type="file" name="Image">
      <input type="text" name="name" placeholder="Name" style="margin:1%">
      <span><input type="text" name="price"  placeholder="Price" style="margin:1%; width: 75%;">
          <input type="button" value="Delete" style="margin:1%"></span>
  </div>`
  })

  document.getElementById('cardContainer').innerHTML = html;
}

function handleGetProducts() {
  fetch('/read')
      .then(r => r.json())
      .then(data => {

          const { products } = data;
          writeProductsToDOM(products);

      })
}