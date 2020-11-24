function createCategories(){
    const categoriesArray = [];
    products.forEach(product => {
        categoriesArray.push(product.category);
        removeDuplicates(categoriesArray);
    })
}

function removeDuplicates(arr){
    let filteredCategoriesArray = [];
    arr.forEach(category => {
        if(!filteredCategoriesArray.includes(category)){
            filteredCategoriesArray.push(category)
            filteredCategoriesArray.sort((a, b) => { if(a< b) return -1;})
        }
    });
    renderCategories(filteredCategoriesArray);
    
 
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function renderCategories(arr){
    const createdCategories = document.getElementById("createdCategories");
    let html = "";
    arr.forEach(category => {
        html += `
        <div class="categoryTitle" onclick=handleClickedCategory(event)>
        ${category.capitalize()}
        <div><img class="categoryPic" src="img/${category}.jpg" alt=""></div>
        </div>`
    })
    createdCategories.innerHTML = html;

}

function handleClickedCategory(e){
    if(e.target.innerText.length >= 1){
    const clickedCategory = e.target.innerText;
    const createdCategories = document.getElementById("createdCategories");
    createdCategories.setAttribute("style","display:none");
    createCategoryInfo(clickedCategory);
}   
}


function createCategoryInfo(category){
    const categoryArray = [];
    const regSearch = new RegExp(category.toLowerCase(), 'g')
    products.forEach(product=>{
        if(regSearch.test(product.category)){
            categoryArray.push(product);
            renderCategoryInfo(categoryArray);
    }
})
}


function renderCategoryInfo(categoryArray){
    const createdCategoryPage = document.getElementById('createdCategoryPage');
    let html = `<div class="buttonsClass">
    <button class="btnClass" onclick="handleSortProducts(event)">Sort By Price</button>
    <button class="btnClass" onclick="handleFilterProducts(event)">Filter By Recommendation</button>
    </div>`;
    categoryArray.forEach(product => {
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
    createdCategoryPage.innerHTML = html;
}

function handleClickedName(e){
    const createdCategoryPage = document.getElementById('createdCategoryPage');
    const sortedProducts = document.getElementById('sortedProducts');
    const filteredProducts = document.getElementById('filteredProducts');
    sortedProducts.setAttribute("style","display:none");
    filteredProducts.setAttribute("style","display:none");
    createdCategoryPage.setAttribute("style","display:none");
    const pickedProductName = e.target.innerText;
    createProductInfoFromCategory(pickedProductName);
}

function createProductInfoFromCategory(productName){
    const regSearch = new RegExp(productName, 'g')
    products.forEach(product=>{
        if(regSearch.test(product.name)){
        renderProductInfoFromCategory(product);
    }
})
}

function renderProductInfoFromCategory(product){
    const createdProductPage = document.getElementById('createdProductPage');
    createdProductPage.innerHTML = "";
    createdProductPage.innerHTML +=`
    <img class="productPic" src="${product.image}" alt="">
    <div><h1>${product.name}</h1></div>
    <div>${product.brand}</div>
    <div>${product.category}</div>
    <div><p>Description:</p>${product.description}</div>
    <div><p>In Store Since:</p>${product.inStoreSince}</div>
    <div><p>Model:</p>${product.model}</div>
    <div><p>Price:</p>${product.price}</div>
    <div><p>Recommendations:</p>${product.recommendations}/100</div>
    `
}



