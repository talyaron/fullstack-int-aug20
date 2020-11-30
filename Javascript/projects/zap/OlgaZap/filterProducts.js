

let btnResModel = document.getElementById('btnResModel')
let btnResBrand = document.getElementById('btnResBrand')


function filterModel(e){
  console.log('filterModel')
  html = ''
  filterResModel = ''
  filterResBrand = ''
  results.filter(product => {
    if(e.target.textContent == product.model){
      console.log(product)
      html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
      
    }
  })
  root.innerHTML = html
    
}

function filterBrand(e){
    console.log('filterBrand')
    html = ''
    filterResModel = ''
    filterResBrand = ''
    results.filter(product => {
      if(e.target.textContent == product.brand){
        console.log(product)
        html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
      }
    })
    root.innerHTML = html
      
  
  }