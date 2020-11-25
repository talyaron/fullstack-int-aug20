
function handleclick(e) {

    document.getElementById(`root`).innerHTML = '';
    switch (e.target.innerHTML) {
        case 'mobile':
            
            products.forEach(product => {
                if (product.category == 'mobile') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert" data-id="${product.name}" onclick="handleInsertclick(event)">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })

            break;
        case 'computers':

            products.forEach(product => {
                if (product.category == 'computers') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert" data-id="${product.name}" onclick="handleInsertclick(event)">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })
            break;
        case 'electricity':
            products.forEach(product => {
                if (product.category == 'electricity') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert" data-id="${product.name}" onclick="handleInsertclick(event)">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })
            break;
        case 'cars':
            products.forEach(product => {
                if (product.category == 'cars') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert" data-id="${product.name}" onclick="handleInsertclick(event)">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })
            break;
        case 'fashion':
            
            products.forEach(product => {
                if (product.category == 'fashion') {
                    document.getElementById(`root`).innerHTML += `<div id="searchInsert" data-id="${product.name}"  onclick="handleInsertclick(event)">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price}</div>`
                }
            })
            break;
        default:

    }

}
function handleInsertclick(e){
   let root = document.getElementById('root') ;
   root.innerHTML ='';
   let x = ""
    products.forEach(product=>{
        if(product.name == e.target.dataset.id)
        {
            x+=`<img style="height: 150px;" src="${product.image}">`
            x +=  `<div id="searchInsertObject" data-id="${product.name}"  onclick="handleInsertclick(event)">Product name: ${product.name}, Product Model: ${product.model}, Price: ${product.price},</div>`
          
        }
        root.innerHTML =x;

    })
}