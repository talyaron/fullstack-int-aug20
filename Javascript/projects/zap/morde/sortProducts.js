function handleSortProducts(e){
        const categoryToSort = e.target.parentNode.parentNode.children[15].innerText;
        const sortedArray = [];
        const regSearch = new RegExp(categoryToSort, 'g');
        products.forEach(product=>{
            if(regSearch.test(product.category)){
                sortedArray.push(product);
                sortedArray.sort((a,b)=> a.price - b.price);
                renderSortedArray(sortedArray);
        }
    })      
}

function renderSortedArray(sortedArray){
    const createdCategoryPage = document.getElementById('createdCategoryPage');
    createdCategoryPage.setAttribute("style","display:none;")
    const sortedProducts = document.getElementById("sortedProducts");
    let html = ``;
    sortedArray.forEach(product => {
        html +=`
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

    sortedProducts.innerHTML = html;
}