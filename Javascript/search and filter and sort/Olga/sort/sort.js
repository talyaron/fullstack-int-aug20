let products = [{ name: 'cake', price: 20 }, { name: 'cupcake', price: 15 }, { name: 'sweet', price: 18 }, { name: 'doughnut', price: 22 }, { name: 'icecream', price: 16 }, ]

products.sort((a,b)=>a.price-b.price);
console.log(products)

let newProducts = products.filter(products => products.price < 20)

        console.log(newProducts);