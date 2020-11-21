function handleSearch(e) {
    e.preventDefault();
    
    const searchTerm = e.target.children.search.value;

    if(searchTerm.length>0){
        const results = searchProducts(searchTerm);
        renderSearchResults(results);
    }
}

function searchProducts(searchTerm) {
    const results = []
    const regSearch = new RegExp(searchTerm, 'g')
    products.forEach(product => {
      if( regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model) ){
        results.push(product);
      } 
    })

    
    return results;
}

function renderSearchResults(results){
    const root=document.getElementById('root');

    let html = '';
    results.forEach(product=>{
        html += `<div class="productList"><img src=${product.image}><p class="productList__p">Product name: <b>${product.name}</b>, Product Model: <b>${product.model}</b>, Price: <b>${product.price} </b></p></div>`
    })

    root.innerHTML = html;
}