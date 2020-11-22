function handleSearch(e) {
    e.preventDefault();

    const searchTerm = e.target.children.search.value;
    if (searchTerm.length > 2) {
        const results = searchProducts(searchTerm);
        renderSearchResults(results);
    }
    if(searchTerm.length<1){
        root.innerHTML = ""
        filterButtons.innerHTML = ""
    }
}

let results = []
function searchProducts(searchTerm) {
    results = []
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
    filterButtons.innerHTML = '';
    let html = '';
    results.forEach(product => {
        html += `<a href="https://www.noknok.co.il/items/3046324"><p>Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}<img src="${product.image}"></p><a>`
        
    })

    root.innerHTML = html;
}