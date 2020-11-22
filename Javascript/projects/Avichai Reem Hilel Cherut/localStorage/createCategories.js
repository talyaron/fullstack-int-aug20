const categoryBox = document.querySelector("#categoryBox")
let filter = []

products.forEach(product => {
    if (filter.indexOf(product.category) == -1) {
        filter.push(product.category)
    }
})
let html = ""
filter.sort()
for (i = 0; i < filter.length; i++) {
    html += `<option class="category" data-id="${filter[i]}">${filter[i]}</option>`
}
console.log(html)
categoryBox.innerHTML += html

// localStorage.setItem("filter", JSON.stringify(filter));
// console.log(localStorage)


let category = document.querySelectorAll('.category')

const root = document.getElementById('root');
let html1 = ""
let productName = ""
let filterButtons = document.querySelector("#filterButtons")

let currentCategory = [];
function handleClickCategories(e) {
    e.preventDefault();
    window.open("categories.html")
}
function handleClick(e) {


    productName = e.target.value

    localStorage.setItem("chosenCategory", productName);
    console.log(localStorage)
    console.log(productName)
    // location.replace("categories.html")


    // filterButtons.innerHTML = '';
    root.innerHTML = ""
    let stam = []
    products.forEach(product => {
        if (productName == product.category) {
            console.log(product.category)
            currentCategory.push(product);


            // root.innerHTML += `<a href="https://www.noknok.co.il/items/3046324"><p>Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}<img src="${product.image}"></p><a>`

            if (stam.indexOf(product.brand) == -1) {
                stam.push(product.brand)
                console.log(stam)
                // filterButtons.innerHTML += `<button id='${product.brand}'>${product.brand}</button>`;
            }
        }

    })

    let afterFilter = []

    // filterButtons.addEventListener('click', e => {
    //     let chosenFilter = (e.composedPath()[0].id)
    //     console.log(e.composedPath()[0].id)
    //     root.innerHTML =''
    //     currentCategory.forEach(product =>{

    //         if(chosenFilter == product.brand){ 
    //             root.innerHTML += `<p class="product">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}<img src="${product.image}"></p>`

    //         }
    //     })

    //   });

}

