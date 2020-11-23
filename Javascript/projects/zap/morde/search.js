function handleSearch(e) {
    e.preventDefault();

    if(e.isTrusted == true){
        const searchResults = document.getElementById("searchResults");
        searchResults.setAttribute("style","display:inherit")
    }
    
    const searchTerm = e.target.children.search.value;

    if(searchTerm !== Number){
        const results = searchProducts(searchTerm);
        renderSearchResults(results);
    }
}

function searchProducts(searchTerm) {
    const results = []
    const regSearch = new RegExp(searchTerm, 'g')
    products.forEach(product => {
      if( regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model) ){
        results.push(product)
      }
    })
    return results;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function renderSearchResults(results){
    const searchResults = document.getElementById('searchResults');
    let html = '';
    results.forEach(product=>{
        html += `<p class="productFound" onclick=handleClickedProduct(event)>${product.name} , ${product.category.capitalize()} , Price: ${product.price}</p>
        `
    })

    searchResults.innerHTML = html;
}

function handleClickedProduct(e){
    const productName = e.target.innerHTML.split(" ,")[0];
    const searchResults = document.getElementById('searchResults');
    const productInfo = document.getElementById('createdCategories');
    const createdCategoryPage = document.getElementById("createdCategoryPage")
    const createdProductPage = document.getElementById("createdProductPage")
    const sortedProducts = document.getElementById("sortedProducts");
    const filteredProducts = document.getElementById("filteredProducts");
    filteredProducts.setAttribute("style", "display:none")
    sortedProducts.setAttribute("style","display:none")
    createdProductPage.setAttribute("style","display:none");
    createdCategoryPage.setAttribute("style","display:none");
    searchResults.setAttribute("style","display:none");
    productInfo.setAttribute("style","display:inherit");
    createProductInfo(productName);
}

function createProductInfo(productName){
    const regSearch = new RegExp(productName, 'g')
    products.forEach(product=>{
        if(regSearch.test(product.name)){
        renderProductInfo(product);
    }
})
}

function renderProductInfo(product){
    const productInfo = document.getElementById('createdCategories');
    productInfo.innerHTML = "";
    productInfo.innerHTML += `
    <img class="productPic" src="${product.image}" alt="">
    <div><h1>${product.name}</h1></div>
    <div>${product.brand}</div>
    <div>${product.category}</div>
    <div><p>Description:</p>${product.description}</div>
    <div><p>In Store Since:</p></h2>${product.inStoreSince}</div>
    <div><p>Model:</p>${product.model}</div>
    <div><p>Price:</p>${product.price}</div>
    <div><p>Recommendations:</p>${product.recommendations}/100</div>
    `
}

