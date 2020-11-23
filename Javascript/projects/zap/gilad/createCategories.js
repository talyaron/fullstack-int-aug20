// //-----------------------mobile cattegory--------------------------------------------//

// function handleclick(e){
//     document.getElementById(`root`).innerHTML = ''

//     products.forEach(products=>{

//         if(products.category == 'mobile')
//         {console.log(products)
//         document.getElementById(`root`).innerHTML+=`<div id="searchInsert">Product name: ${products.name}, Product Model: ${products.model}, Price: ${products.price}</div>`

//         }
//     })

// }
//  //-----------------------computers category--------------------------------------------//  
//  function handleclick(e){
//     document.getElementById(`root`).innerHTML = ''

//     products.forEach(products=>{

//         if(products.category == 'computers')
//         {console.log(products)
//         document.getElementById(`root`).innerHTML+=`<div id="searchInsert">Product name: ${products.name}, Product Model: ${products.model}, Price: ${products.price}</div>`

//         }
//     })

// }
function handleclick(e) {

    document.getElementById(`root`).innerHTML = '';
    switch (e.target.innerHTML) {
        case 'mobile':
            products.forEach(product => {
                if (product.category == 'mobile') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })

            break;
        case 'computers':

            products.forEach(product => {
                if (product.category == 'computers') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })
            break;
        case 'electricity':
            products.forEach(product => {
                if (product.category == 'electricity') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })
            break;
        case 'cars':
            products.forEach(product => {
                if (product.category == 'cars') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })
            break;
        case 'fashion':
            products.forEach(product => {
                if (product.category == 'fashion') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })
            break;
        default:

    }

}