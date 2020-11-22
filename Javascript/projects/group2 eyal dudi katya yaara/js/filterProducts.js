
let FilteredProducts = [];

function FilterProductsByCategory(category){
let ProductsByCategory = products.filter(product => product.category.toUpperCase() == category );
return ProductsByCategory;
}

function renderFilteredProducts(FilteredProducts) {
    const BodyContainer = document.getElementById('BodyContainer');
    let ProductContainer = '';
    BodyContainer.innerHTML ='';
   /*  category: 'computers',
    price: '9200',
    inStoreSince: '2018-11-15',
    brand: 'intel',
    model: 'i5-9600k',
    recommendations: 12780,
    image:
      'https://www.ebay.com/i/333303102982?mkevt=1&siteid=1&mkcid=2&mkrid=711-153320-877651-5&source_name=google&mktype=pla_ssc&campaignid=11227688602&groupid=109637828346&targeted=pla-293946777986&MT_ID=&adpos=&device=c&googleloc=20514&itemid=333303102982&merchantid=116792603&geo_id=100&gclid=CjwKCAiAzNj9BRBDEiwAPsL0d4An78lLBihzNR7N5F-lWGUg4555cYx463oazuAupZLp9teM46ptLBoC_GwQAvD_BwE',
    description: '6 cores, 6 threads',
    name: 'i5-9600k',
    store: 'intel store',
    isdn: '123hnbjh123', */
    FilteredProducts.forEach((product) => {
         const card = `<div class="card mb-3" style="max-width: 90%; max-height:25%; margin: auto;">
         <div class="row no-gutters">
           <div class="col-md-4">
             <img src="${product.image}" style="width: 90%; height: 90%; class="card-img" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
             </div>
           </div>
         </div>
       </div>`;
         ProductContainer += card;
    });
  
    BodyContainer.innerHTML += ProductContainer;
  }

function RenderProductsInCategory(category){
   
    FilteredProducts = FilterProductsByCategory(category);
    renderFilteredProducts(FilteredProducts);
    console.log(FilteredProducts);
}