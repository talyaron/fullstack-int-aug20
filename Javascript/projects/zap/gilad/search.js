function handleSearch(e) {
    e.preventDefault();
    
    const searchTerm = e.target.children.search.value;

    if(searchTerm.length>2){
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
        console.log(results);
      }

     
    })

    
    return results;
}

function renderSearchResults(results){
    const root=document.getElementById('root');

    let html = '';
    results.forEach(product=>{
        html += `<div id="searchInsert">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
    })

    root.innerHTML = html;
}