function handleClickCategories(e){
    renderSearchResults(results)
    filterModel(e)
    filterBrand(e)
   
    results = []
html=''
filterResModel = ''
filterResBrand = ''
containerFilter = `<div>Filter by model <div id="filterByModel"></div></div>
  <div>Filter by brand <div id="filterByBrand"></div></div>`
  filterBy.innerHTML = containerFilter
  
const filterByModel = document.getElementById('filterByModel')
const filterByBrand = document.getElementById('filterByBrand')


btnsSort += `<span>Sort by:<button id="btnSortPrice" onclick='sortPrice(event)' type="submit"> price</button>
    <button id="btnSortRating" type="submit" onclick='sortRating(event)'>rating</button></span>` 
   

products.forEach(product=>{
    sortPrice()
    renderSearchResults(results)
    if(e.toElement.id == product.category){
      
        html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
        filterResModel += ` <div><li id="btnResModel" style="min-width:25px; min-height:25px" onclick='filterModel(event)'>${product.model}</li>
        </div>`
    filterResBrand += ` <div><li id="btnResBrand" style="min-width: 25px; min-height: 25px"  onclick='filterBrand(event)'>${product.brand}</li></div>`
    results.push(product);
    console.log(results)
}

root.innerHTML = btnsSort + html ;
filterByBrand.innerHTML = filterResBrand
filterByModel.innerHTML = filterResModel

})


}