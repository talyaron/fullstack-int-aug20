"use strict";

function handleLoad() {
  fetch("/get-products-array").then(function (r) {
    return r.json();
  }).then(function (data) {
    data.productsArray.forEach(function (product) {
      var root = document.getElementById("root");
      root.innerHTML += "<div><img class='productPic' src='".concat(product.img, "'/><h2 class='productTitle'>").concat(product.title, "</h2><p class='productPrice'>").concat(product.price, "$</p><form onsubmit=\"handleUpdatePrice(event)\">\n        <input type=\"number\" placeholder=\"Enter A New Price\" name=\"newPrice\" />\n        <div><button class=\"formBtn\" type=\"submit\">Update</button><div>\n      </form></div>");
    });
  });
}

function handleUpdatePrice(e) {
  e.preventDefault();
  var newPrice = e.target.children.newPrice.value;
  var productToUpdate = e.path[1].children[1].innerText;
  fetch("/send-new-price", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      newPrice: newPrice,
      productToUpdate: productToUpdate
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    location.reload();
  });
}