function OrderTheCategories() {
  const categories = [];
  let OrderedCategories = [];
  products.forEach((product) => {
    categories.push(product.category);
  });
  try {
    categories.forEach((c) => {
      if (!OrderedCategories.includes(c.toUpperCase())) {
        OrderedCategories.push(c.toUpperCase());
      }
    });
  } catch (e) {
    categories.forEach((c) => {
      if (!OrderedCategories.includes(c)) {
        OrderedCategories.push(c);
      }
    });
  }
  OrderedCategories = OrderedCategories.sort();
  return OrderedCategories;
}
/* Render NavBar */

function renderNavCategories(Categories) {
  /*  console.log('renderNavCategories function called'); */
  const Nav = document.getElementById('UlNavBar');

  let ul = '';
  Categories.forEach((category) => {
    // ul += `<li class="nav-item "><a class="nav-link" href="#">${category}</a></li>`
    ul += `<li class="nav-item "><a class="nav-link" href="#">${category}</a></li>`;
  });

  Nav.innerHTML = ul;
}

function removeDuplicateObjectFromArray(array, key) {
  let check = {};
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (!check[array[i][key]]) {
      check[array[i][key]] = true;
      res.push(array[i]);
    }
  }
  return res;
}

function getProductPic(category) {
  return uniqcategory.filter(product => product.category.toUpperCase() == category);

}





function renderBlocksCategories(Categories) {
  const BodyContainer = document.getElementById('BodyContainer');
  let NewBodyContainer = '';

  Categories.forEach((category) => {
    let categoryProducts = getProductPic(category);
    /*  console.log(categoryProducts[0]); */
    const card = `<div class="card bg-dark text-black" onclick="RenderProductsInCategory('${category}')">
                  <img src="${categoryProducts[0].image}" class="card-img" alt="${category}">
                  <div class="card-img-overlay">
                  <h3 class="card-title text-center">${category}</h3>
                  </div>
                  </div>`;
    NewBodyContainer += card;
  });

  BodyContainer.innerHTML = NewBodyContainer;
}

function StartRenderCategories() {
  let Categories = OrderTheCategories();
  uniqcategory = removeDuplicateObjectFromArray(products, 'category');
  renderNavCategories(Categories);
  renderBlocksCategories(Categories);

}
