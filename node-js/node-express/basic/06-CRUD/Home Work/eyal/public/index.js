
function handlesubmit(e) {
  console.log('handlesubmit activated')
  e.preventDefault();
  console.log('submit');
  const UserID = e.target.UserID.value;
  const pass = e.target.Password.value;
  const UserDetlis = { UserID, pass };

  fetch('/U_info', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(UserDetlis),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        // document.getElementById('main').innerHTML = '<h1>ok</h1>';
        window.location.replace('/admin.html');
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
  const pass = document.getElementById('Password').value;
  console.log(UserID);
  const UserDetlis = { UserID, pass };

  console.log(UserDetlis);

  fetch('/add_user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(UserDetlis),
  })
    .then((res) => res.json())
    .then((data) => {

      
      
        document.getElementById('main').innerHTML =
        `<h1>${data.massege}</h1>`;
     
     
    });
}

function handleAddProduct(e) {
  e.preventDefault();
 
  const ProductName = e.target.ProductName.value;
  console.log(ProductName)
  try{
     var image = `./image/${document.getElementById('Image').files.item(0).name}`;
  }
  catch(err){
   // console.log(err);
  }finally {
    var image = `./image/none.jpg`;
  }

 
  const price = e.target.children.Price.value;
 
if (ProductName!=''){
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
      
      console.log(products)
      writeProductsToDOM(products);
    })}else{
      console.log('product name cant be empty')
    }
}


function writeProductsToDOM(products) { //write users to DOM
  let html = '';
  products.forEach(product => {
    html += `<div class="card" >
      <img  style="margin:0 auto 0" src="${product.image}" alt="" >
      <input id="Image" type="file" name="Image" >
      <input type="text" name="name" value="${product.ProductName}" style="margin:1%;width: 90%;">
      <span>
          <input type="text" name="price"  value="${product.price}" style="margin:1%; width: 45%;">
          <input type="button" value="Delete" style="margin:1%" onclick='deleteProduct("${product.ProductName}")' >
          <input type="button" value="Update" style="margin:1%">
      </span>
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

function deleteProduct(ProductName) {
  console.log(ProductName)

  fetch('/delete', {
      method: 'delete',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ProductName })
  })
      .then(r => r.json())
      .then(data => {
          console.log(data)
          const { Products } = data;
       //   writeProductsToDOM(Products);
       handleGetProducts();
      })
}


function handleUpdateProduct(e, ProductName,image, price){
  e.preventDefault();
 
  let ProductName = (e.target.children.ProductName.value)
  let image = (e.target.children.image.value)
  let price = (e.target.children.price.value)

  const details = {"name": username , "password": password}

  fetch('/update', {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({details})
  })
      .then(r => r.json())
      .then(data => {
          console.log(data)
          
      })

}