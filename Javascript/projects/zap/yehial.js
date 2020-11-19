function handleSearch(e){
    const searchTerm=e.target.children.search.value;
    if(searchTerm.length>2){
        searchProducts(searchTerm);
    }
}

function searchProducts(searchTerm){
    const results=[];
    const regSearch = new RegExp(searchTerm,'g');
    
    products.forEach(product => {

        
    });

}
