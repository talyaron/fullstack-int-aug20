function handleLoad() {
  fetch("/get-products-array")
    .then((r) => r.json())
    .then((data) => {
      data.productsArray.forEach((product) => {
        const root = document.getElementById("root");
        root.innerHTML += `<div><img class='productPic' src='${product.img}'/><h2 class='productTitle'>${product.title}</h2><p class='productPrice'>${product.price}$</p><form onsubmit="handleUpdatePrice(event)">
        <input type="text" placeholder="Enter A New Price" name="newPrice" />
        <div><button class="formBtn" type="submit">Update</button><div>
      </form></div>`;
      });
    });
}

function handleUpdatePrice(e) {
  e.preventDefault();
  const newPrice = e.target.children.newPrice.value;
  const productToUpdate = e.path[1].children[1].innerText;

  fetch("/send-new-price", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newPrice, productToUpdate }),
  })
    .then((res) => res.json())
    .then((data) => {
      location.reload();
    });
}
