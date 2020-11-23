
let FilteredBrands = [];

function FilterProductsByCategory(category) {
  let ProductsByCategory = products.filter(product => product.category.toUpperCase() == category);
  return ProductsByCategory;
}

function renderFilteredBrands(FilteredBrands) {
  const BodyContainer = document.getElementById('BodyContainer');
  let ProductContainer = '';
  BodyContainer.innerHTML = '';
 
  FilteredBrands.forEach((product) => {
    const card = `<div style="border-radius: 10px;" class="card bg-dark text-black " onclick=" RenderProductsInCategory('${product.category}','${product.brand}')">
                  <img src="${product.image}" class="card-img" style="width: auto;" alt="${product.brand}">
                  <h3 class="card-title text-center  " style="margin-bottom: 0px; margin-top: 3px;">${product.brand}</h3>
                  </div>`;
    ProductContainer += card;
  });

  BodyContainer.innerHTML += ProductContainer;
}

function RenderBrandsCategory(category) {
  FilteredBrands = FilterProductsByCategory(category);
  let uniqbrand = removeDuplicateObjectFromArray(FilteredBrands,'brand')
  renderFilteredBrands(uniqbrand);
  console.log(uniqbrand);
}