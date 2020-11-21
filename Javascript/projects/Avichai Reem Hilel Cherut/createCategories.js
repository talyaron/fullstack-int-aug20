

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


let test = document.querySelector("#test")
let html1 = ""
let productName = ""

function handleClick(e) {
    productName = e.target.value

    test.innerHTML = ""
    for (i = 0; i < products.length; i++) {
        if (productName == products[i].category) {
            test.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}</p>`
            
        }
    }
}


function handlePrice(e) {
    products.sort((a, b) => a.price - b.price)
    test.innerHTML = ""
    for (i = 0; i < products.length; i++) {
        if (productName == products[i].category) {
            test.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}</p>`

        }
    }
}

function handleRecommend(e) {
    products.sort((a, b) => a.recommendations - b.recommendations)
    test.innerHTML = ""
    for (i = 0; i < products.length; i++) {
        if (productName == products[i].category) {
            test.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}</p>`
        }
    }
}

// filter.forEach(product => {
//     if (filter.indexOf(product.category) == -1) {
//         filter.push(product.category)
//     }
// })
// let filterModel = []
// products.forEach(product => {
//     if (filterModel.indexOf(product.model) == -1) {
//         filterModel.push(product.model)
//     }
// })
// console.log(filterModel)
