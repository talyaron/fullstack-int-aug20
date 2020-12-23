function handleGetProduct() {

  fetch('/read')
      .then(r => r.json())
      .then(data => {
          const { Products } = data;
          console.log(Products)
          writeProductsToDOM(Products);
          // writeUsersToDOM(products);
      })
}


function handleAddProduct(e) {

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
 
      })
}



function handleDeleteProduct(name) {

  fetch('/delete', {
      method: 'delete',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
  })
      .then(r => r.json())
      .then(data => {
        const { Products } = data;
        console.log(Products)
        writeProductsToDOM(Products);
      })
}

function handleUpdateProduct(e, nameToUpdate){
//   alert('update');

  e.preventDefault();
  // console.log(username)

//   const newProductDetails = e.target.children[0].value;
  let { name, imgUrl, price } = e.target.children;
  newName = name.value;
  newImgUrl = imgUrl.value;
  newPrice = price.value;

  fetch('/update', {
      method: 'put',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newName, newImgUrl, newPrice, nameToUpdate })
  })
      .then(r => r.json())
      .then(data => {
          console.log(data)
          const { Products } = data;
          // writeUsersToDOM(users);
          console.log(Products)
          writeProductsToDOM(Products);
      })

}

function writeProductsToDOM(Products) {
    let html = '';
    Products.forEach(product => {
        html += `<p>name:${product.name},  price:${product.price} <button onclick='handleDeleteProduct("${product.name}")'>Delete product</button></p><img src="${product.imgUrl}">
        <form onsubmit='handleUpdateProduct(event, "${product.name}")'><input type="text" name="name" placeholder="name">
        <input type="text" name="imgUrl" placeholder="img-url">
        <input type="number" name="price" placeholder="price">
        <input type="submit" value="update product"></form>`
    })
  
    document.querySelector('.product').innerHTML = html;
  }