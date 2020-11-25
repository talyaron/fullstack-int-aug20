let results = [];
<<<<<<< HEAD

=======
>>>>>>> f1a91f7af16b6d80d9952410ba579f3beaf4400a
function handleSearch(e) {
  e.preventDefault();

  const searchTerm = e.target.children.search.value;
  console.log(searchTerm)

  if (searchTerm.length >= 2) {
<<<<<<< HEAD
    results = searchProducts(searchTerm);
=======
    const results = searchProducts(searchTerm);
>>>>>>> f1a91f7af16b6d80d9952410ba579f3beaf4400a
    renderSearchResults(results);
    /*console.log(results)*/

  }

}

function searchProducts(searchTerm) {
<<<<<<< HEAD
  results = []
=======
>>>>>>> f1a91f7af16b6d80d9952410ba579f3beaf4400a
  const regSearch = new RegExp(searchTerm, 'g')
  products.forEach(product => {
    if (regSearch.test(product.name) || regSearch.test(product.category) || regSearch.test(product.model)) {
      /*console.log(product)*/
      results.push(product);
    }
  })

<<<<<<< HEAD

  return results;
}
let html = '';
const root = document.getElementById('root');
function renderSearchResults(results) {

  
  let filterResModel = ''
  let filterResBrand = ''
  let btnsSort = ''
  btnsSort += `<span>Sort by:<button id="btnSortPrice" onclick='sortPrice(event)' type="submit"> price</button>
    <button id="btnSortRating" type="submit" onclick='sortRating(event)'>rating</button></span> 
      `

      results.forEach(product =>{
        filterResModel += ` <div><li id="btnResModel" style="min-width:50px; min-height:50px" onclick='filterModel(event)'>${product.model}</li>
        </div>`
        filterResBrand += ` <div><li id="btnResBrand" type="submit" style="min-width: 50px; min-height: 50px"  onclick='filterBrand(event)'>${product.brand}</li></div>`
      })  
  
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })


  root.innerHTML = btnsSort + filterResModel + filterResBrand + html;

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
=======
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
>>>>>>> f1a91f7af16b6d80d9952410ba579f3beaf4400a
  results.sort((a, b) => { if (a.price < b.price) return -1; })
  console.log(results)
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })
<<<<<<< HEAD
  renderSearchResults(results)


}
function sortRating() {
  console.log('btnSortRating')
  html = ''
=======
  renderSearchResults(results);

}

function SortRating() {
  let html = '';
>>>>>>> f1a91f7af16b6d80d9952410ba579f3beaf4400a
  results.sort((a, b) => { if (a.recommendations < b.recommendations) return -1; })
  console.log(results)
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })
<<<<<<< HEAD
  renderSearchResults(results)
=======
  renderSearchResults(results);

>>>>>>> f1a91f7af16b6d80d9952410ba579f3beaf4400a
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


<<<<<<< HEAD
let btnResModel = document.getElementById('btnResModel')
let btnResBrand = document.getElementById('btnResBrand')

function filterModel(e){
  console.log('btnResModel')
  html = ''
  
  results.filter(result => {
    if(e.target.textContent == result.model){
      html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
      root.innerHTML = html
    }
  })
  
  
  /*results.forEach(product => {
    if(e.target.model !==product.model){
      console.log('false')
    }else{
      html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
      root.innerHTML = html
    }
    
  })*/
  

=======
>>>>>>> f1a91f7af16b6d80d9952410ba579f3beaf4400a
}



/*function filterModel() {
  console.log('btnSortRating')
  html = ''
  results.filter(result => result.model)
  console.log(results)
  results.forEach(product => {
    html += `<p id="${product.isdn}" onclick=handleClick(event)>Product name: ${product.name} </br> Product Model: ${product.model} </br> Price: ${product.price}</p>`
  })
  renderSearchResults(results)
}*/

/*let newBooks = books[0].filter(book => book.year > 1999).sort((a, b) => a.year - b.year)
        console.log(newBooks);

<<<<<<< HEAD
        console.log((() => 'bla bla')())*/
=======

>>>>>>> f1a91f7af16b6d80d9952410ba579f3beaf4400a

