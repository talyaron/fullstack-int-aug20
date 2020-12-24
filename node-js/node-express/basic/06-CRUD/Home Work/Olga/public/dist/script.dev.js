"use strict";

function getProducts(products) {
  fetch('/allproducts').then(function (r) {
    return r.json();
  }).then(function (data) {
    console.log(data);
    data.forEach(function (product) {
      document.getElementById('allProducts').innerHTML += "<div id='wrap'><div>".concat(product.name, "</div> \n            <img src=\"").concat(product.picture, "\">\n            <div>").concat(product.price, "</div><button onclick = 'deleteProduct(\"").concat(product.name, "\")'>delete</button></br>\n            <button onclick = 'btnUpdate(\"").concat(product.name, "\",\"").concat(product.picture, "\", \"").concat(product.price, "\")'>update</button></div>");
    });
  });
}

function deleteProduct(name) {
  console.log(name);
  fetch('/deleteproduct', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name
    })
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    console.log(data);
  });
  document.location.reload();
}

function addPopUp(e) {
  var popUpAdd = document.getElementById('popUpAdd');
  popUpAdd.style.display = "block";
}

var closePopUp = document.getElementById('close');

closePopUp.onclick = function () {
  popUpAdd.style.display = "none";
};

function addProduct(e) {
  e.preventDefault();
  var _e$target$children = e.target.children,
      name = _e$target$children.name,
      picture = _e$target$children.picture,
      price = _e$target$children.price;
  name = name.value;
  picture = picture.value;
  price = price.value;
  console.log(name, picture, price);
  fetch('/addproduct', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      picture: picture,
      price: price
    })
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    console.log(data);
  });
  document.location.reload();
}

function btnUpdate(name, picture, price) {
  console.log(name);
  document.getElementById('updatePopUp').innerHTML += "<button type=\"submit\" id=\"closeUpdatePopup\">&times</button>\n    <form onsubmit='updateProduct(event,\"".concat(name, "\")'>\n    <input type='text' placeholder=\"update name\" name='newName' value=\"").concat(name, "\" required></br>\n    <input type='text' placeholder=\"update picture\" name='newPicture' value=\"").concat(picture, "\" required></br>\n    <input type='text' placeholder=\"update price\" name='newPrice' value=\"").concat(price, "\" required></br>\n    <input type=\"submit\" value=\"send\">\n</form>");
  var updatePopUp = document.getElementById('updatePopUp');
  updatePopUp.style.display = "block";
  var closeUpdatePopup = document.getElementById('closeUpdatePopup');
  closeUpdatePopup.addEventListener('click', function () {
    updatePopUp.style.display = "none";
  });
}

function updateProduct(e, name) {
  e.preventDefault();
  console.log(name);
  var _e$target$children2 = e.target.children,
      newName = _e$target$children2.newName,
      newPicture = _e$target$children2.newPicture,
      newPrice = _e$target$children2.newPrice;
  newName = newName.value;
  newPicture = newPicture.value;
  newPrice = newPrice.value;
  var newProduct = {
    name: newName,
    picture: newPicture,
    price: newPrice
  };
  console.log(newName, newPicture, newPrice);
  fetch('/updateproduct', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      newProduct: newProduct
    })
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    console.log(data);
  });
  document.location.reload();
}

document.addEventListener('DOMContentLoaded', getProducts());