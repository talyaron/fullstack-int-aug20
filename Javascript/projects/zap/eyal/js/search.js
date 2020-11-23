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
      }

     
    })
    return results;
}

function renderSearchResults(results){
   
    const root=document.getElementById('root');

    let html = '';
    results.forEach(product=>{
        console.log('results');
        html += `<p onclick=" resultClick('${product.isdn}')">Product Model: ${product.model}, Price: ${product.price}</p>`
    })
    root.style = "display:block"
    root.innerHTML = html;
}

function resultClick(id){
    const root=document.getElementById('root');
    RenderProductScreen(id);
    root.style = "display:none"
}