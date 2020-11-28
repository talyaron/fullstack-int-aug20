function handleClickCategories(e){
    console.log(e)
html=''
let filterResModel = ''
let filterResBrand = ''
products.forEach(product=>{
    if(e.toElement.id == product.category){
      
        html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`

}

root.innerHTML = html;
filterByModel.innerHTML = filterResModel
filterByBrand.innerHTML = filterResBrand
})
}