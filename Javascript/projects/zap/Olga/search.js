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


  return results;
}
let html = '';
const root = document.getElementById('root');
const filterBy = document.getElementById('filterBy')

let containerFilter = ''
let btnsSort = ''
let filterResModel = ''
let filterResBrand = ''

function renderSearchResults(results) {
  filterResModel = ''
  filterResBrand = ''
  btnsSort = ''
  html = ''
  containerFilter = ''

  containerFilter = `<div class='filter'>Filter by model <br><br><div id="filterByModel"></div></div>
  <div class='filter'>Filter by brand <br><br><div id="filterByBrand"></div></div>`

  filterBy.innerHTML = containerFilter

const filterByModel = document.getElementById('filterByModel')
const filterByBrand = document.getElementById('filterByBrand')


  btnsSort += `<span id='sortBy'>Sort by:<button id="btnSortPrice" onclick='sortPrice(event)' type="submit"> price</button>
    <button id="btnSortRating" type="submit" onclick='sortRating(event)'>rating</button></span>` 
      

  results.forEach(product => {
    filterResModel += ` <div><li id="btnResModel" style="min-width:25px; min-height:25px" onclick='filterModel(event)'>${product.model}</li>
        </div>`
    filterResBrand += ` <div><li id="btnResBrand" style="min-width: 25px; min-height: 25px"  onclick='filterBrand(event)'>${product.brand}</li></div>`
  })

  results.forEach(product => {
    html += `<p class='product' id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })

  filterByModel.innerHTML = filterResModel
  filterByBrand.innerHTML = filterResBrand
  root.innerHTML = btnsSort + html;

}


function handleClick(e) {
  filterResModel = ''
  filterResBrand = ''
  products.forEach(elm => {
    if (e.target.id !== elm.isdn) {
      console.log('false')
    } else {
      let container = ''
      container += `<div class='containerProuct'><h3 id='nameProduct'>${elm.name}</h3>` + `<img src="${elm.image}">` + `<div id='price'>Price: ${elm.price}</br>Model: ${elm.model}</br>Brand: ${elm.brand}</br>Recommendations: ${elm.recommendations}</br>Description: ${elm.description}</br>Store:${elm.store}</div></div>`
      root.innerHTML = container
    }
  })


}