function handleSearch(e) {
    e.preventDefault();

    const searchTerm = e.target.children.search.value;
    console.log(searchTerm);
    if (searchTerm.length > 2) {
        const results = searchProducts(searchTerm)
        renderSearchResults(results);
    }
}
let results = []
function searchProducts(searchTerm){
    results = []
    const regSearch = new RegExp(searchTerm, 'gi')
    products.forEach(product =>{
        if(regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)){
            results.push(product);
        }
    })

    return results;
}
function renderSearchResults(results){
    const products = document.querySelector("#products")
    let html = ''
    var index = -1
    results.forEach(product=>{
        html += `<p data-td="${index+=1}" onclick="handleShowProduct(event)">Product name: ${product.name}, 
        Product Model: ${product.model}, Product Price: ${product.price}<img src="${product.image}">`
    })

    products.innerHTML = html
}
