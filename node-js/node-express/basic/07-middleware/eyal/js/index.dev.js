"use strict";

function handlesubmit(e) {
  // console.log('handlesubmit activated')
  e.preventDefault();
  console.log('submit');
  var UserID = e.target.UserID.value;
  var pass = e.target.Password.value;
  var UserDetlis = {
    UserID: UserID,
    pass: pass
  };
  fetch('/U_info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UserDetlis)
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.ok) {
      // document.getElementById('main').innerHTML = '<h1>ok</h1>';
      window.location.replace('/admin.html');
    } else {
      document.getElementById('main').innerHTML = '<h1>bad user name or password</h1>'; //  window.location.replace('Rejected.html');
    }

    console.log(data);
    document.getElementById('root').innerText = data.body;
  });
  console.log(UserDetlis);
}

function handleAddUser() {
  console.log('handleAddUser activated');
  var UserID = document.getElementById('UserID').value;
  var pass = document.getElementById('Password').value;
  var role = document.getElementById('role').value;
  console.log(UserID);
  var UserDetlis = {
    UserID: UserID,
    role: role,
    pass: pass
  };
  console.log(UserDetlis);
  fetch('/add_user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UserDetlis)
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    document.getElementById('main').innerHTML = "<h1>".concat(data.massege, "</h1>");
  });
}

function handleAddProduct(e) {
  e.preventDefault();
  var ProductName = e.target.ProductName.value;
  console.log(ProductName);

  try {
    var image = "./image/".concat(document.getElementById('Image').files.item(0).name);
  } catch (err) {// console.log(err);
  } finally {
    var image = "./image/none.jpg";
  }

  var price = e.target.children.Price.value;

  if (ProductName != '') {
    fetch('/post', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ProductName: ProductName,
        image: image,
        price: price
      })
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      console.log(data);
      var products = data.products;
      console.log(products);
      writeProductsToDOM(products);
    });
  } else {
    console.log('product name cant be empty');
  }
}

function writeProductsToDOM(products, role) {
  //write users to DOM
  var html = '';
  products.forEach(function (product) {
    html += "<div class=\"card\" >\n      <img  style=\"margin:0 auto 0\" src=\"".concat(product.image, "\" alt=\"\" >\n      <input id=\"Image\" type=\"file\" name=\"Image\" >\n      <input type=\"text\" name=\"name\" value=\"").concat(product.ProductName, "\" style=\"margin:1%;width: 90%;\">\n      <span>\n          <input type=\"text\" name=\"price\"  value=\"").concat(product.price, "\" style=\"margin:1%; width: 45%;\">\n          <input type=\"button\" value=\"Delete\" style=\"margin:1%\" onclick='deleteProduct(\"").concat(product.ProductName, "\")' >\n          <input type=\"button\" value=\"Update\" style=\"margin:1%\">\n      </span>\n  </div>");
  });
  document.getElementById('cardContainer').innerHTML = html;
}

function handleGetProducts() {
  fetch('/read').then(function (r) {
    return r.json();
  }).then(function (data) {
    var products = data.products;
    writeProductsToDOM(products);
  });
}

function deleteProduct(ProductName) {
  console.log(ProductName);
  fetch('/delete', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ProductName: ProductName
    })
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    console.log(data);
    var Products = data.Products; //   writeProductsToDOM(Products);

    handleGetProducts();
  });
}
/* 
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

} */