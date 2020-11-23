
products.sort((a, b) => a.price - b.price)

function handleSearch(e) {
    e.preventDefault();

    const searchTerm = e.target.children.search.value;

    if (searchTerm.length > 0) {
        const results = searchProducts(searchTerm);
        renderSearchResults(results);
    }
}

function searchProducts(searchTerm) {
    const results = []
    const regSearch = new RegExp(searchTerm, 'g')
    products.forEach(product => {
        if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
            results.push(product);
        }
    })


    return results;
}

function renderSearchResults(results) {
    const root = document.getElementById('root');

    let html = '';
    results.forEach(product => {
        html += `<div class="productList"><img src=${product.image}><p class="productList__p">Product name: <b>${product.name}</b><br> Product Model: <b>${product.model}</b><br> Price: <b>${product.price} </b><br> Since: <b>${product.inStoreSince}</b> </p></div>`
    })

    root.innerHTML = html;
}

// function seeAll(results) {
//     results.forEach(product => {
//         document.getElementById('allProducts').innerHTML = results
//     })
// };

    // document.getElementById('allProducts').innerHTML = products
// console.log(products)}


    // const allProducts = document.getElementById('allProducts');

//     let html = "";
// html += products

// allProducts.innerHTML =  products;

// }

// function sortByPrice(results){
//     const root=document.getElementById('root');

//     let html = '';
//     results.sort((a,b) => a.price-b.price)
//     console.log(results)
// } 
// function sortByPrice() {
//     products.sort((a, b) => a.price - b.price)
//     console.log(products)
// }