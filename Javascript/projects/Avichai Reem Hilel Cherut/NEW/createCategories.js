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
categoryBox.innerHTML = html
let category = document.querySelectorAll('.category')

const root = document.getElementById('root');
let html1 = ""
let productName = ""
let filterButtons = document.querySelector("#filterButtons")

let currentCategory = [];

function handleClick(e) {
    productName = e.target.value
    filterButtons.innerHTML = '';
    root.innerHTML = ""
    let stam = []
    products.forEach(product => {
        if (productName == product.category) {
            console.log(product.category)
            currentCategory.push(product);
            root.innerHTML += `<p>Product Category: ${product.category}, Product Model: ${product.model}, Price: ${product.price}, Recommendations: ${product.recommendations}</p>`
            // filterButtons.innerHTML = '';




            if (stam.indexOf(product.brand) == -1) {
                stam.push(product.brand)
                console.log(stam)
                filterButtons.innerHTML += `<button id='${product.brand}'>${product.brand}</button>`;
            }


        }
    })

}
