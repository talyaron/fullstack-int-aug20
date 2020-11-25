const categoryBox = document.querySelector("#categoryBox")
let categorys = []

products.forEach(product => {
    if (categorys.indexOf(product.category) == -1) {
        categorys.push(product.category)
    }
})
let category = document.querySelector("#categorys")
let html = ""
categorys.forEach(category =>{
    html += `<button onclick="handleClick(event)">${category}</button>`
})
category.innerHTML = html
let chosenCategory = ""
function handleClick(e){
    chosenCategory = e.target.innerHTML
    let productsbyCategory = document.querySelector("#productsbyCategory")
    let html2 = ""
    products.forEach(product=>{
        if(chosenCategory == product.category){
            html2 += `<p>Product name: ${product.name}, 
            Product Model: ${product.model}, Product Price: ${product.price}`
        }
    })
    productsbyCategory.innerHTML = html2
}