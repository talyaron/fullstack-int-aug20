filterButtons.addEventListener('click', e => {
  let chosenFilter = (e.composedPath()[0].id)
  console.log(e.composedPath()[0].id)
  root.innerHTML =''
  currentCategory.forEach(product =>{
      
      if(chosenFilter == product.brand){ 
          root.innerHTML += `<p>Product brand: ${product.brand}, Product Model: ${product.model}, Price: ${product.price}, Recommendations: ${product.recommendations}</p>`
       
          // filterButtons.innerHTML += `<button >${product.brand}</button>`;
      }
  })

});
