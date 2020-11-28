

let btnResModel = document.getElementById('btnResModel')
let btnResBrand = document.getElementById('btnResBrand')


function filterModel(e){
  console.log('btnResModel')
  html = ''
  filterResModel = ''
  filterResBrand = ''
  results.filter(result => {
    if(e.target.textContent == result.model){
      console.log(result)
      html += `<p id="${result.isdn}" onclick=handleClick(event)>Product name: ${result.name} </br> Product Model: ${result.model} </br> Price: ${result.price}</p>`
      
    }
  })
  root.innerHTML = html
    
}

function filterBrand(e){
    console.log(e.target)
    html = ''
    filterResModel = ''
    filterResBrand = ''
    results.filter(result => {
      if(e.target.textContent == result.brand){
        console.log(result)
        html += `<p id="${result.isdn}" onclick=handleClick(event)>Product name: ${result.name} </br> Product Model: ${result.model} </br> Price: ${result.price}</p>`
      }
    })
    root.innerHTML = html
      
  
  }