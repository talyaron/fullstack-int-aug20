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

    switch (e.target.innerHTML) {
        case 'mobile':
            console.log('mobile')

            break;
        case 'computers':
            document.getElementById(`root`).innerHTML = ''
            console.log('computers')
            products.forEach(product => {
                if (product == 'computers') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert">Product name: ${products.name}, Product Model: ${products.model}, Price: ${products.price}</div>`
                }
            })
            break;
        case 'electricity':
            console.log('electricity')
            break;
        case 'cars':
            console.log('cars')
            break;
        case 'computers':
            console.log('fashion')
            break;
        default:

    }

}