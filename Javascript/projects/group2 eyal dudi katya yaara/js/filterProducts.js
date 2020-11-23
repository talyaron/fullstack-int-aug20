
let FilteredProducts = [];

function FilterProductsByCategoryandBrand(category,brand) {
  let ProductsByCategory = products.filter(filtered => (filtered.category.toUpperCase() == category.toUpperCase())&&(filtered.brand.toUpperCase() == brand.toUpperCase()));
  console.log(`this is the filterd: ${ProductsByCategory}` );
  return ProductsByCategory;
}

function renderFilteredProducts(FilteredProducts) {
  const BodyContainer = document.getElementById('BodyContainer');
  let ProductContainer = '';
  BodyContainer.innerHTML = '';
 
  FilteredProducts.forEach((product) => {
    const card = `<div class="card mb-3" style="max-width: 90%; max-height:25%; margin: auto;" onclick="RenderProductScreen('${product.isdn}')">
         <div class="row no-gutters">
           <div class="col-md-4">
             <img src="${product.image}" style="width: 90%; height: 90%; class="card-img" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">${product.brand}  ${product.model}</h5>
               <p class="card-text">The ${product.category} from  ${product.brand} This is the ${product.description}</p>
               <p class="card-text"><small class="text-muted">The price is only: ${product.price} $</small></p>
             </div>
           </div>
         </div>
       </div>`;
    ProductContainer += card;
  });

  BodyContainer.innerHTML += ProductContainer;
  BodyContainer.style = "display: block; flex-wrap: none; ";
}

function RenderProductsInCategory(category,brand) {

  FilteredProducts = FilterProductsByCategoryandBrand(category,brand);
  renderFilteredProducts(FilteredProducts);
  console.log(FilteredProducts);
}