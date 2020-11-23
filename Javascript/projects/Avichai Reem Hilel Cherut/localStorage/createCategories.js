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

let category = document.querySelectorAll('.category')
const root = document.getElementById('root');
let html1 = ""
let productName = ""
let filterButtons = document.querySelector("#filterButtons")

let currentCategory = [];

function handleClickCategories(e) {

    e.preventDefault();
    if (chosenCategory != "default") {
        window.location.href = "categories.html";
    }
}

function handleClick(e) {


    chosenCategory = e.target.value

    localStorage.setItem("chosenCategory", chosenCategory);
    console.log(localStorage)
    console.log(chosenCategory)

    root.innerHTML = ""
    let stam = []
    products.forEach(product => {
        if (chosenCategory == product.category) {
            console.log(product.category)
            currentCategory.push(product);

            if (stam.indexOf(product.brand) == -1) {
                stam.push(product.brand)
                console.log(stam)
            
            }
        }

    })

    let afterFilter = []
}

