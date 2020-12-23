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


function showProducts() {
    fetch('/get-products')
        .then(r => r.json())
        .then(data => {
            const { products } = data
            writeProductsToDom(products)
        })
}
function handleEditName(e, productName) {
    e.preventDefault();

    const newProductName = e.target.children.newProductName.value


    fetch('/update-name', {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName, newProductName })
    })
        .then(res => res.json())
        .then(data => {
            const { products } = data
            writeProductsToDom(products)
        })
}

function handleEditPrice(e, productName) {
    e.preventDefault();

    const newProductPrice = e.target.children.newProductPrice.value
    console.log(newProductPrice)
    fetch('/update-price', {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName, newProductPrice })
    })
        .then(res => res.json())
        .then(data => {
            const { products } = data
            writeProductsToDom(products)
        })
}
function handleEditImg(e, productName) {
    e.preventDefault();

    const newProductImg = e.target.children.newProductImg.value

    fetch('/update-img', {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName, newProductImg })
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
        html += `<div class="product"><p>
            Product Name:${product.productName} Proudct Price:${product.productPrice} Product IMG:${product.productIMG}
             <button onclick="handleDelete(event, '${product.productName}')">Delete Product</button>
             <form onsubmit="handleEditName(event, '${product.productName}')"><input type="text" name="newProductName" placeholder="Edit Name" required><input type="submit" value="Edit Name"></form>
             <form onsubmit="handleEditPrice(event, '${product.productName}')"><input type="number" name="newProductPrice" placeholder="Edit Price" required><input type="submit" value="Edit Price"></form>
             <form onsubmit="handleEditImg(event, '${product.productName}')"><input type="text" name="newProductImg" placeholder="Edit Img" required><input type="submit" value="Edit Img"></form>
             </p></div>`
    })
    document.getElementById("products").innerHTML = html
}