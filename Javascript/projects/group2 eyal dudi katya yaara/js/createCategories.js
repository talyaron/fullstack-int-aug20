function OrderTheCategorys() {
  const categorys = [];
  let OrderdCategorys = [];
  products.forEach((product) => {
    categorys.push(product.category);
  });
  try {
    categorys.forEach((c) => {
      if (!OrderdCategorys.includes(c.toUpperCase())) {
        OrderdCategorys.push(c.toUpperCase());
      }
    });
  } catch (e) {
    categorys.forEach((c) => {
      if (!OrderdCategorys.includes(c)) {
        OrderdCategorys.push(c);
      }
    });
  }
  OrderdCategorys = OrderdCategorys.sort();
  return OrderdCategorys;
}
/* Render NavBar */

function renderNavCategoris(categoris) {
 /*  console.log('renderNavCategoris function called'); */
  const Nav = document.getElementById('UlNavBar');

  let ul = '';
  categoris.forEach((category) => {
    // ul += `<li class="nav-item "><a class="nav-link" href="#">${category}</a></li>`
    ul += `<li class="nav-item "><a class="nav-link" href="#">${category}</a></li>`;
  });

  Nav.innerHTML = ul;
}

function removeDuplicateObjectFromArray(array, key) {
    let check = {};
    let res = [];
    for(let i=0; i<array.length; i++) {
        if(!check[array[i][key]]){
            check[array[i][key]] = true;
            res.push(array[i]);
        }
    }
    return res;
}

function getProductPic(category) {
 return uniqcategory.filter(product=>product.category.toUpperCase() == category );
  
}


   
 

function renderBlocksCategoris(categoris) {
  const BodyContainer = document.getElementById('BodyContainer');
  let NewBodyContainer = '';

  categoris.forEach((category) => {
    let categoryProducts = getProductPic(category);
   /*  console.log(categoryProducts[0]); */
    const card = `<div class="card bg-dark text-black">
                  <img src="${categoryProducts[0].image}" class="card-img" alt="${category}">
                  <div class="card-img-overlay">
                  <h3 class="card-title text-center">${category}</h3>
                  </div>
                  </div>`;
    NewBodyContainer += card;
  });

  BodyContainer.innerHTML = NewBodyContainer;
}

function startrendernav() {
  let categoris = OrderTheCategorys();
  uniqcategory =  removeDuplicateObjectFromArray(products, 'category');
  renderNavCategoris(categoris);
  renderBlocksCategoris(categoris);
  
}
