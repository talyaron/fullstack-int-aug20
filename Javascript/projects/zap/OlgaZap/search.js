let results = [];

function handleSearch(e) {
  e.preventDefault();

  const searchTerm = e.target.children.search.value;
  console.log(searchTerm)

  if (searchTerm.length >= 2) {
    results = searchProducts(searchTerm);
    renderSearchResults(results);
    /*console.log(results)*/

  }

}

function searchProducts(searchTerm) {
  results = []
  const regSearch = new RegExp(searchTerm, 'g')
  products.forEach(product => {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      /*console.log(product)*/
      results.push(product);
    }
  })

  /*console.log(results)*/
  return results;
}

const root = document.getElementById('root');
function renderSearchResults(results) {

  let html = '';
  let btnsSortFilter = ''
  btnsSortFilter += `<span>Sort by:<button id="btnSortPrice" onclick='sortPrice(event)' type="submit"> price</button>
    <button id="btnSortRating" type="submit" onclick='sortRating(event)'>rating</button></span>`
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })


  root.innerHTML = btnsSortFilter + html;

}


function handleClick(e) {
  products.forEach(elm => {
    if (e.target.id !== elm.isdn) {
      console.log('false')
    } else {
      let container = ''
      container += `<h3>${elm.name}</h3>` + `<img src="${elm.image}">` + `<div>Price: ${elm.price}</br>Model: ${elm.model}</br>Brand: ${elm.brand}</br>Recommendations: ${elm.recommendations}</br>Description: ${elm.description}</br>Store:${elm.store}</div>`
      root.innerHTML = container
    }
  })


}

const btnSortPrice = document.getElementById('btnSortPrice')
const btnSortRating = document.getElementById('btnSortRating')

function sortPrice() {
  console.log('btnSortPrice')
  html = ''
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
  results.sort((a, b) => { if (a.recommendations < b.recommendations) return -1; })
  console.log(results)
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })
  renderSearchResults(results)


}







