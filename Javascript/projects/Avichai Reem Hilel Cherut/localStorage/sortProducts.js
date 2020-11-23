function handlePrice(e) {
  products.sort((a, b) => a.price - b.price)
  root2.innerHTML = ""
  for (i = 0; i < products.length; i++) {
    if (chosenCategory == products[i].category) {
      root2.innerHTML += `<p>Product name: ${products[i].name},Product category: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}<img src="${products[i].image}"></p>`

    }
  }
}

function handleRecommend(e) {
  products.sort((a, b) => a.recommendations - b.recommendations)
  root2.innerHTML = ""
  for (i = 0; i < products.length; i++) {
    if (chosenCategory == products[i].category) {
      root2.innerHTML += `<p>Product name: ${products[i].name},Product category: ${products[i].category}, Product Model: ${products[i].model}, Price: ${products[i].price}, Recommendations: ${products[i].recommendations}<img src="${products[i].image}"></p>`
    }
  }
}