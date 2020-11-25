function handleByPrice(e) {
    let productByPrice = []

    products.forEach(e => {
        if (chosenCategory == e.category) {
            productByPrice.push(e)
        }
    });
    html2 = ""
    productByPrice.sort((a, b) => a.price - b.price)
    console.log(productByPrice)
    productByPrice.forEach(e => {
        html2 += `<p>Product name: ${e.name}, 
        Product Model: ${e.model}, Product Price: ${e.price}`
    })
    productsbyCategory.innerHTML = html2
}

function handleByRecommendations(e) {
    let productByRecommendations = []

    products.forEach(e => {
        if (chosenCategory == e.category) {
            productByRecommendations.push(e)
        }
    });
    html2 = ""
    productByRecommendations.sort((a, b) => a.recommendations - b.recommendations)
    console.log(productByRecommendations)
    productByRecommendations.forEach(e => {
        html2 += `<p>Product name: ${e.name}, 
        Product Model: ${e.model}, Product Price: ${e.price} Recommendations: ${e.recommendations}`
    })
    productsbyCategory.innerHTML = html2
}