
const btnSortPrice = document.getElementById('btnSortPrice')
const btnSortRating = document.getElementById('btnSortRating')

function sortPrice() {
  console.log('btnSortPrice')
  html = ''
  filterResModel = ''
  filterResBrand = ''
  results.sort((a, b) => { if (a.price < b.price) return -1; })
  console.log(results)
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })
  renderSearchResults(results)


}
function sortRating() {
  console.log('btnSortRating')
  html = ''
  filterResModel = ''
  filterResBrand = ''
  results.sort((a, b) => { if (a.recommendations < b.recommendations) return -1; })
  console.log(results)
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })
  renderSearchResults(results)
}
