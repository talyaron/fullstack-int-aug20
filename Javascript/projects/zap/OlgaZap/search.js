let results = [];
function handleSearch(e) {
  e.preventDefault();

  const searchTerm = e.target.children.search.value;
  console.log(searchTerm)

  if (searchTerm.length >= 2) {
    const results = searchProducts(searchTerm);
    renderSearchResults(results);
    /*console.log(results)*/

  }

}

function searchProducts(searchTerm) {
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
debugger;
const root = document.getElementById('root');

function renderSearchResults(results) {

  let html = '';
  let btnsSortFilter = '';
  btnsSortFilter += `<span>Sort by:<button id="btnSortPrice" onclick="SortPrice()" type="submit"> price</button>
    <button onclick="SortRating()" id="btnSortc" type="submit">rating</button></span>`
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })


  root.innerHTML = `<div>${btnsSortFilter}</div>  <div>${html}</div>`;


  
}

function SortPrice() {
   let html = '';
  results.sort((a, b) => { if (a.price < b.price) return -1; })
  console.log(results)
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })
  renderSearchResults(results);

}

function SortRating() {
  let html = '';
  results.sort((a, b) => { if (a.recommendations < b.recommendations) return -1; })
  console.log(results)
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })
  renderSearchResults(results);

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







