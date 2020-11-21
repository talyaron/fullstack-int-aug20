function handleFilterProducts(e){
    almostFilteredArray = [];
    const categoryToSort = e.target.parentNode.parentNode.children[15].innerText;
    const regSearch = new RegExp(categoryToSort, 'g');
        products.forEach(product=>{
            if(regSearch.test(product.category)){
                almostFilteredArray.push(product);
                const filteredArray = almostFilteredArray.filter(product => product.recommendations > 50).sort((a,b)=> a.recommendations - b.recommendations)
                renderFilterArray(filteredArray);
        }
    })      
}

function renderFilterArray(filteredArray){
    const createdCategoryPage = document.getElementById('createdCategoryPage');
    createdCategoryPage.setAttribute("style","display:none;")
    const filteredProducts = document.getElementById("filteredProducts");
    let html = ``;
    filteredArray.forEach(product => {
        html += `
        <img class="productPic" src="${product.image}" alt="">
        <div class="clickableName" onclick=handleClickedName(event) >${product.name}</div>
        <div>${product.brand}</div>
        <div><p>In Store Since:</p>${product.inStoreSince}</div>
        <div><p>Price:</p>${product.price}₪</div>
        <div><p>Recommendation:</p>${product.recommendations}/100</div>
        <div style="display:none;">${product.category}</div>
        <hr>
        `
    })

    filteredProducts.innerHTML = html;
}