function handlePrice(e) {
    products.sort((a, b) => a.price - b.price)
    root.innerHTML = ""
    for (i = 0; i < products.length; i++) {
        if (productName == products[i].category) {
          root.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`
  
        }
    }
  }
  
  function handleRecommend(e) {
    products.sort((a, b) => a.recommendations - b.recommendations)
    root.innerHTML = ""
    for (i = 0; i < products.length; i++) {
        if (productName == products[i].category) {
          root.innerHTML += `<p>Product name: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}</p>`
        }
    }
  }