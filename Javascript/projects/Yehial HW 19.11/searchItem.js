const results = []

function handleSearch(theEvent) {
    theEvent.preventDefault();
    const searchTerm = theEvent.target.children.search.value;


    if (searchTerm.length > 2) {

        const resultsAfterSearch = searchItemFromData(searchTerm);
        renderSearchResults(resultsAfterSearch);
    }


}

function searchItemFromData(searchTerm) {
    

    const regSearch = new RegExp(searchTerm, 'g')

    products.forEach(item => {
        if (regSearch.test(item.name) || regSearch.test(item.category) || regSearch.test(item.model)) {
            results.push(item)
            
        }


    });
    return results;
}



function renderSearchResults(itemsAfterSearch) {
    const rootDiv = document.getElementById('root');
    let htmlBuild = '';

    itemsAfterSearch.forEach(item => {

        htmlBuild += `
                        <div class="singel__Item" onclick="itemProperties(event)">
                       
                            <p class="singel__Item__Description"   name="${item.model}" >Product name: ${item.name}, Product Model: ${item.model}, Price: ${item.price}</p>
                       
                       
                            <div class="singel__Item__Popup" name="prop">
                                <img src=${item.image}  style='height: 300px;width: 300px;display:block;' alt="">
                                
                            </div>

                        </div>
                      `;
                      
    });

    rootDiv.innerHTML = htmlBuild;

}