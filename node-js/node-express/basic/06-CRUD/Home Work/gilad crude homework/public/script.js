function handleSubmit(e){
    e.preventDefault()
    let name = e.target.children.name.value
    let description = e.target.children.description.value
    let price = e.target.children.price.value
    console.log(name, description, price)

    fetch('/postProduct', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description, price })
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
           let products = data
           writeToDome(products)
            
    
        })
}
 function handleDelet(e)
 {
    let name= e.target.value
     console.log(name)
     

     fetch('/delete', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            const { products } = data;
            writeToDome(products);
        })
}
     
     
 
 function writeToDome(products){
    let display = ''
    products.forEach(product => {
        console.log(`product name: ${product.name}`)
        console.log(` product descripton: ${product.description}`)
        console.log(`product price: ${product.price}$`)
        display += `<div class = "products"> Product name:${product.name}, Price:${product.price}$ <br> Product description:${product.description} <button value=${product.name} onclick="handleDelet(event)">DELETE</button></div>`
        
    });
    console.log(display)
    document.getElementById('root').innerHTML=display
    

 }
    
