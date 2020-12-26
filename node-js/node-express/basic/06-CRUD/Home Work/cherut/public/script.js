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
  let { name, imgUrl, price } = e.target.children;
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
      console.log(Products);
      writeProductsToDOM(Products);
      e.target.children.name.value = '';
      e.target.children.imgUrl.value = '';
      e.target.children.price.value = '';
    })
}



function handleDeleteProduct(name) {

  console.log(name)
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

function handleUpdateProduct(e, nameToUpdate) {
  //   alert('update');

  e.preventDefault();
  // console.log(username)

  //   const newProductDetails = e.target.children[0].value;
  let { name, imgUrl, price } = e.target.children;
  newName = name.value;
  newImgUrl = imgUrl.value;
  newPrice = price.value;

  console.log(newImgUrl)
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

function send() {
  console.log('send')
  document.getElementById('submit').click();
}

function writeProductsToDOM(Products) {
  let html = '';
  Products.forEach(product => {
    html +=
      //  `<p>name:${product.name},  price:${product.price} <button onclick='handleDeleteProduct("${product.name}")'>Delete product</button></p><img src="${product.imgUrl}">
      // <form onsubmit='handleUpdateProduct(event, "${product.name}")'><input type="text" name="name" placeholder="name">
      // <input type="text" name="imgUrl" placeholder="img-url">
      // <input type="number" name="price" placeholder="price">
      // <input type="submit" value="update product"></form>`

      `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${product.imgUrl}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text"> price: ${product.price}$</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-name=${product.name}>
        update
        </button>
        <button type="button" class="btn btn-secondary" onclick="handleDeleteProduct('${product.name}')">delete</button>
     </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update product details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <form onsubmit='handleUpdateProduct(event, "${product.name}")'>
            
            <label >name</label>
            <input type="text" class="form-control"  name="name"  placeholder="${product.name}">
            <label >img Url</label>
            <input type="text" class="form-control"  name="imgUrl" placeholder="${product.imgUrl}">
            <label >price</label>
            <input type="number" class="form-control" name="price" placeholder="${product.price}">

                <div class="modal-footer">
                <button type="submit" class="btn btn-primary" onclick="send()" data-dismiss="modal">update product</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <input id="submit" type="submit" class="btn btn-secondary" value="update product">
                </div>
        
            </form>
        </div>
     
       
      </div>
    </div>
  </div>
    `

  })


  document.querySelector('.product').innerHTML = html;
}