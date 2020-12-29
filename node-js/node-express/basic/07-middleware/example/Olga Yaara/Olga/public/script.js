
/*const getCookie = () => {
    var name = "role" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return JSON.parse(c.substring(name.length, c.length).replaceAll("'",""));
        }
    }
    return null;
}

chosenArr =  getCookie();
console.log(chosenArr)*/

console.log(document.cookie)

function getProducts(products) {

    fetch('/allproducts')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            data.forEach(product => {
                document.getElementById('allProducts').innerHTML +=
                    `<div id='wrap'><div>${product.name}</div> 
            <img src="${product.picture}">
            <div>${product.price}</div><button onclick = 'deleteProduct("${product.name}")'>delete</button></br>
            <button onclick = 'btnUpdate("${product.name}","${product.picture}", "${product.price}")'>update</button></div>`;
            });
        })
}

document.addEventListener('DOMContentLoaded', getProducts())




/* function handleAdmin(){
    
    fetch('/admin-panel')
    .then(r=>r.json())
    .then(data=>{
        console.log(data)
    })
} */


function deleteProduct(name) {
    console.log(name)

    fetch('/deleteproduct', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
    document.location.reload()
}

function addPopUp(e) {
    let popUpAdd = document.getElementById('popUpAdd')
    popUpAdd.style.display = "block"
}

let closePopUp = document.getElementById('close')
closePopUp.onclick = function () {
    popUpAdd.style.display = "none"
}

function addProduct(e) {
    e.preventDefault();

    let {
        name,
        picture,
        price
    } = e.target.children;
    name = name.value;
    picture = picture.value;
    price = price.value;

    console.log(name, picture, price)

    fetch('/addproduct', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                picture,
                price
            })
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)

        })
    document.location.reload()
}

function btnUpdate(name, picture, price) {
    console.log(name)
    document.getElementById('updatePopUp').innerHTML +=
        `<button type="submit" id="closeUpdatePopup">&times</button>
    <form onsubmit='updateProduct(event,"${name}")'>
    <input type='text' placeholder="update name" name='newName' value="${name}" required></br>
    <input type='text' placeholder="update picture" name='newPicture' value="${picture}" required></br>
    <input type='text' placeholder="update price" name='newPrice' value="${price}" required></br>
    <input type="submit" value="send">
</form>`
    let updatePopUp = document.getElementById('updatePopUp')

    updatePopUp.style.display = "block"
    let closeUpdatePopup = document.getElementById('closeUpdatePopup')
    closeUpdatePopup.addEventListener('click', function () {
        updatePopUp.style.display = "none"
    })
}

function updateProduct(e, name) {
    e.preventDefault();
    console.log(name)
    let {
        newName,
        newPicture,
        newPrice
    } = e.target.children;
    newName = newName.value;
    newPicture = newPicture.value;
    newPrice = newPrice.value;
    let newProduct = {
        name: newName,
        picture: newPicture,
        price: newPrice
    }
    console.log(newName, newPicture, newPrice)

    fetch('/updateproduct', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                newProduct
            })
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)

        })
    document.location.reload()
}


