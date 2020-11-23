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

const root=document.getElementById('root');
let html1 = ""
let productName = ""
let filterButtons = document.querySelector("#filterButtons")

let currentCategory = [];

function handleClick(e) {
    productName = e.target.value
    filterButtons.innerHTML = '';
    root.innerHTML = ""
    let stam = []
    products.forEach(product =>{
        if(productName == product.category){
            console.log (product.category)
            currentCategory.push(product);
            root.innerHTML += `<a href="https://www.noknok.co.il/items/3046324"><p>Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}<img src="${product.image}"></p><a>`
            // root.innerHTML += `<p>Product Category: ${product.category}, Product Model: ${product.model}, Price: ${product.price}, Recommendations: ${product.recommendations}</p>`
            // filterButtons.innerHTML = '';
            
 
         

            if (stam.indexOf(product.brand) == -1) {
                stam.push(product.brand)
                console.log(stam)
                filterButtons.innerHTML += `<button id='${product.brand}'>${product.brand}</button>`;
            }
            
            
        }  
    })

    let afterFilter =[]

    filterButtons.addEventListener('click', e => {
        let chosenFilter = (e.composedPath()[0].id)
        console.log(e.composedPath()[0].id)
        root.innerHTML =''
        currentCategory.forEach(product =>{
            
            if(chosenFilter == product.brand){ 
                root.innerHTML += `<p class="product">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}<img src="${product.image}"></p>`
             
                // filterButtons.innerHTML += `<button >${product.brand}</button>`;
            }
        })
      
      });
    //   let product = document.querySelectorAll(".product")
    //   product.addEventListener('click', e=> {
    //       console.log(e)
    //   })


    // for (i = 0; i < products.length; i++) {
    //     if (productName == products[i].category) {
    //         root.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`
            
    //     }
    // }
}


// function handlePrice(e) {
//     products.sort((a, b) => a.price - b.price)
//     root.innerHTML = ""
//     for (i = 0; i < products.length; i++) {
//         if (productName == products[i].category) {
//             root.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`

//         }
//     }
// }

// function handleRecommend(e) {
//     products.sort((a, b) => a.recommendations - b.recommendations)
//     root.innerHTML = ""
//     for (i = 0; i < products.length; i++) {
//         if (productName == products[i].category) {
//             root.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`
//         }
//     }
// }

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
