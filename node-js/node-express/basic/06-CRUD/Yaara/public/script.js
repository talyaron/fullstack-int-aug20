
function getProducts() {
    fetch('/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res =>
            res.json()
        )
        .then(data => {
            console.log(data)
            document.getElementById('rigth_pic').innerHTML =
                `<div class="rigth">
                ${data.map(product =>
                    `<h4>${product.name}<span onclick="deleteItem('${product.name}')"> <img src="data:image/png;base64,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" width=20px; heigth=20px;></span></h4>
                    <img src="${product.img}"/>
                    <h5>${product.price} ש"ח</h5>`
                ).join('')}
                </div>`;
        })
}

function deleteItem(name) {
    fetch('/products/' + name, {
      
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res =>
            res.json()
        )
        .then(data => {
            document.getElementById('rigth_pic').innerHTML =
                `<div class="rigth">
                ${data.map(product =>
                    `<h4>${product.name} <span onclick="deleteItem('${product.name}')"> <img src="data:image/png;base64,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" width=20px; heigth=20px;></span> </h4>
                    <img src="${product.img}"/>
                    <h5>${product.price} </h5>`
                ).join('')}
                </div>`;
        })
}


const handleAddItem = (e) => {
    e.preventDefault();

    let title = e.target.children.title.value;
    let img = e.target.children.image.value;
    let price = e.target.children.price.value;
    let item = {
        "title": title,
        "img": img,
        "price": price
    }
    let errorMessage = [];
    console.log(item)

    if (title == '' || title.length < 7) {
        errorMessage.push('Title must be more than 6 chars')
    }
    if (img == '') {
        errorMessage.push('Please provider working image')
    }
    if (price == '' ) {
        errorMessage.push('Please enter valid price')
    }
 

    if (errorMessage.length == 0) {
        fetch('http://localhost:9000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(res =>
            res.json()
        ).then(data => {
            if (data) {
                document.getElementById('message').innerHTML = 'Product saved!';
                setTimeout(() => {
                    window.location.href = 'index.html'
                }, 1500);
            }
        }).catch(e => {
            document.getElementById('message').innerHTML = 'Error: Product name already exists!';
        })
    } else {
        // there are errors with validation
        document.getElementById('message').innerHTML = `${errorMessage.map(error => `<p>${error}</p>`).join('')}`;

    }

}