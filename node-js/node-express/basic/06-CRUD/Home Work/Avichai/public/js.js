function handleAddProduct(e) {
    e.preventDefault()
    let { productName, productPrice, productIMG } = e.target.children;
    productName = productName.value
    productPrice = productPrice.value
    productIMG = productIMG.value

    console.log(productName, productPrice, productIMG)
    fetch('/post-product', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName, productPrice, productIMG })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const { products } = data
            writeProductsToDom(products)
        })
}
function showProducts() {
    fetch('/get-products')
        .then(r => r.json())
        .then(data => {
            const { products } = data
            writeProductsToDom(products)
        })
}
function handleDelete(e, productName) {
    console.log(productName)

    fetch('/delete', {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName })
    })
        .then(res => res.json())
        .then(data => {
            const { products } = data
            writeProductsToDom(products)
        })
}
function handleUpdate(e, productName, productPrice, productIMG) {
    e.preventDefault();

    let newProductName = e.target.children.newProductName.value
    let newProductPrice = e.target.children.newProductPrice.value
    let newProductImg = e.target.children.newProductImg.value

    if (newProductName == '') {
        newProductName = productName
    }
    if (newProductPrice == '') {
        newProductPrice = productPrice
    }
    if (newProductImg == '') {
        newProductImg = productIMG
    }

    fetch('/update-product', {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName, newProductName, newProductPrice, newProductImg })
    })
        .then(res => res.json())
        .then(data => {
            const { products } = data
            writeProductsToDom(products)
        })
}


function writeProductsToDom(products) {
    let html = ''
    products.forEach(product => {
        html +=
            `<div class="product">

            <div class="product__info">
            Product Name:${product.productName} Proudct Price:${product.productPrice} <img src="${product.productIMG}">
            </div>


             <form id="editForm" onsubmit="handleUpdate(event, '${product.productName}','${product.productPrice}','${product.productIMG}')">
             <input type="text" name="newProductName" placeholder="Edit Name">
             <input type="number" name="newProductPrice" placeholder="Edit Price">
             <input type="text" name="newProductImg" placeholder="Edit Img(URL)">
             <input type="submit" value="Update Product"></form>

             <button class="product__delete" onclick="handleDelete(event, '${product.productName}')">Delete Product</button>
             </div>`
    })
    document.getElementById("products").innerHTML = html
}