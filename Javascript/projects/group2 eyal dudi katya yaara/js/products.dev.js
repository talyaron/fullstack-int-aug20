"use strict";

var uniqcategory = [];
var products = [{
  category: 'cars',
  price: 120000,
  inStoreSince: '2020-01-23',
  brand: 'Hyundai',
  model: 'i10',
  recommendations: 20,
  image: 'https://www.subaru-global.com/ebrochure/XV/2019my/EN/exterior/assets/FHI/MY19/XV/EN/Exterior/mp4-svg-360/exterior_360/d_exterior_360_01_01.jpg?43d1fdab5753f55134ca114abf2cd33a',
  description: 'achala auto',
  store: 'moshe and co.',
  isdn: '1'
}, {
  category: 'mobile',
  price: 5500,
  inStoreSince: '2020-09-22',
  brand: 'Iphone',
  model: 'iPhone 12 Pro',
  recommendations: 85,
  image: 'https://www.gizmochina.com/wp-content/uploads/2020/05/iphone-12-pro-max-family-hero-all-600x600.jpg',
  description: 'very high end mobile phone',
  store: 'Apple',
  isdn: '2'
}, {
  category: 'fashion',
  price: 2000,
  inStoreSince: '2020-04-05',
  brand: 'GUCCI',
  model: 'Ace Sneakers',
  recommendations: 85,
  image: 'https://cache.net-a-porter.com/images/products/1009127/1009127_in_920_q80.jpg',
  description: 'nice shoes',
  store: 'net a porter',
  isdn: '3'
}, {
  category: 'electricity',
  price: 'Number',
  inStoreSince: '2019-02-22',
  brand: 'Electra',
  model: 'ELECTRA 5100',
  recommendations: 92,
  image: 'https://www.payngo.co.il/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/6/5600-1_1.jpg',
  description: 'good washer',
  store: 'electra',
  isdn: '4'
}, {
  category: 'fashion',
  price: 50,
  inStoreSince: '2020-07-10',
  brand: 'nike',
  model: 'total90',
  recommendations: 40,
  image: 'https://www.shopcleats.me/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-total-90-laser-se-fg-remake-boots-white-yello-black-6.jpg',
  description: 'beautiful shoe that does the job!',
  store: 'sports naharya',
  isdn: '5'
}, {
  category: 'cars',
  price: 140000,
  inStoreSince: '2020-01-09',
  brand: 'hyundai',
  model: 'veloster',
  recommendations: 80,
  image: 'https://editorial.pxcrush.net/carsales/general/editorial/2020-veloster-turbo-premium-11.jpg?width=1024&height=683&aspect=pad',
  description: 'georgeus car, dying to have it',
  store: 'almog motors',
  isdn: '6'
}, {
  category: 'mobile',
  price: 1200,
  inStoreSince: '2020-02-05',
  brand: 'google',
  model: 'pixel 5',
  recommendations: 30,
  image: 'https://i.gadgets360cdn.com/products/large/Pixel-5-DB-369x800-1601538019.jpg?downsize=*:420&output-quality=80',
  description: 'solid and reliable mobile phone',
  store: 'omer phone',
  isdn: '7'
}, {
  category: 'fashion',
  price: 1189,
  inStoreSince: '2020-07-27',
  brand: 'bose',
  model: 'Frames Alto',
  recommendations: 10,
  image: 'https://img.zap.co.il/pics/3/3/2/5/52765233b.gif',
  description: 'Unisex sunglasses',
  store: 'נbug',
  isdn: '8'
}, {
  category: 'electricity',
  price: 1750,
  inStoreSince: '2020-01-23',
  brand: 'LG',
  model: 'OLED55CXPVA 4K',
  recommendations: 10,
  image: 'https://img.zap.co.il/pics/9/4/0/2/55692049c.gif',
  description: 'tv for home',
  store: 'alam',
  isdn: '9'
}, {
  category: 'Computers',
  price: 3500,
  inStoreSince: '2020-01-23',
  brand: 'hp',
  model: 'leptop 14 inch',
  recommendations: 50,
  image: 'https://img.zap.co.il/dealsImages/943/7/943-637403856539846510_1341289c.jpg',
  description: 'computer for home and work',
  store: 'bag',
  isdn: '10'
}, {
  category: 'mobile',
  price: 3500,
  inStoreSince: '2020-01-23',
  brand: 'apple',
  model: 'iphone 11',
  recommendations: 35,
  image: 'https://img.zap.co.il/pics/3/3/2/9/52789233c.gif',
  description: 'good phone',
  store: 'apple store',
  isdn: '11'
}, {
  category: 'computers',
  price: 968,
  inStoreSince: '2020-01-23',
  brand: 'Asus',
  model: '  L203NA-FD126TS',
  recommendations: 138,
  image: 'https://www.bestmobile.co.il/media/catalog/product/2/0/2031.png',
  description: 'achala computer',
  store: 'BestMobil',
  isdn: '12'
}, {
  category: 'computers',
  price: 2789,
  inStoreSince: '2020-04-15',
  brand: 'Lenovo',
  model: ' Lenovo V14 IIL 82C400SDIV',
  recommendations: 38,
  image: 'https://img.zap.co.il/pics/5/1/9/1/58201915c.gif',
  description: 'achala computer',
  store: 'Pc-Online',
  isdn: '13'
}, {
  category: 'cars',
  price: 118000,
  inStoreSince: '2018-01-1',
  brand: 'tesla',
  model: 'model 3 - electric',
  recommendations: 100,
  image: 'https://static.dezeen.com/uploads/2017/07/tesla-model-3-design_dezeen_hero-1-852x479.jpg',
  description: 'the best sadan in the market',
  store: 'tesla.com',
  isdn: '14'
}, {
  category: 'cars',
  price: 250000,
  inStoreSince: '2015-01-1',
  brand: 'tesla',
  model: 'model S - electric',
  recommendations: 100,
  image: 'https://www.driving.co.uk/s3/st-driving-prod/uploads/2019/05/2019-Tesla-Model-3-Performance-USA-spec-01.jpg',
  description: 'the best primium sadan in the market',
  store: 'tesla.com',
  isdn: '15'
}, {
  category: 'computers',
  price: 2300,
  inStoreSince: '2020-01-1',
  brand: 'Lenovo',
  model: 'flex 5',
  recommendations: 70,
  image: 'https://img.zap.co.il/pics/9/2/5/7/56387529c.gif',
  description: 'tuch screen and pen include 2in1',
  store: 'best buy',
  isdn: '16'
}, {
  category: 'mobile',
  price: 1170,
  inStoreSince: '2020-02-01',
  brand: 'xiaomi',
  model: 'k30 ultra',
  recommendations: 80,
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funite4buy.com%2Freview%2FReview-Xiaomi-Redmi-K30-Ultra%2F&psig=AOvVaw3cxuEImTB4tMPHI18eVe8R&ust=1606203960448000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCKo5aWmO0CFQAAAAAdAAAAABAF',
  description: 'best phone',
  store: 'hemilton',
  isdn: '17'
}, {
  category: 'FASHION',
  price: 100,
  inStoreSince: '20-11-20',
  brand: 'bilabol',
  model: 'shirt',
  recommendations: 200,
  image: 'https://ae01.alicdn.com/kf/U997bf8243284402ea3107859f9dfb240z/T-shirt-BILLABONG-Gold-Coast-Tee.jpg',
  description: 'best t-shirt',
  store: 'bilaspong',
  isdn: '18'
},
/* {
  category: 'Fashion',
  price: 32,
  inStoreSince: '7-2-92',
  brand: 'galcha',
  model: 'pants',
  recommendations: 0912,
  image: 'https://cdn1.jolicloset.com/imgr/full/2019/08/140404-1/orange-silk-gucci-pants.jpg',
  store: 'bug',
  isdn: '19',
}, */
{
  category: 'Fashion',
  price: 69420,
  inStoreSince: '7-2-52',
  brand: 'shalom',
  model: 'socks',
  recommendations: 99,
  image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1539362705/557012_3K227_9764_001_100_0000_Light-Baby-GG-socks.jpg',
  description: 'lol',
  store: 'supersal',
  isdn: '20'
}, {
  category: 'earphones',
  price: 5261,
  inStoreSince: '2020-01-01',
  brand: 'Apple',
  model: 'AirPods 2',
  recommendations: '34',
  image: 'https://img.zap.co.il/pics/9/4/2/1/49811249b.gif',
  description: 'Wireless earphones from Apple',
  store: 'SCOPE Digital',
  isdn: '21'
}, {
  category: 'earphones',
  price: 5402,
  inStoreSince: '2020-05-01',
  brand: 'Apple',
  model: 'AirPods 2',
  recommendations: '34',
  image: 'https://img.zap.co.il/pics/9/4/2/1/49811249b.gif',
  description: 'Wireless earphones from Apple',
  store: 'MobileLand',
  isdn: '22'
}, {
  category: 'Vacuum cleaners',
  price: '1200',
  inStoreSince: '2020-11-15',
  brand: 'Daison',
  model: 'V12',
  recommendations: 1250,
  image: 'https://img.zap.co.il/pics/5/9/4/9/57119495b.gif',
  description: '8 cores, 12 threads',
  store: 'Daison',
  isdn: '23'
}, {
  category: 'Vacuum cleaners',
  price: '1500',
  inStoreSince: '2019-11-15',
  brand: 'Shark',
  model: 'ION WV250',
  recommendations: 3250,
  image: 'https://img.zap.co.il/pics/4/1/5/0/49200514b.gif',
  description: 'Manual none cord Vacuum cleaners',
  store: 'Store Electric',
  isdn: '23A'
}, {
  category: 'earphones',
  price: 5753,
  inStoreSince: '2020-01-01',
  brand: 'Apple',
  model: 'AirPods 2',
  recommendations: '34',
  image: 'https://img.zap.co.il/pics/0/2/2/6/43436220c.gif',
  description: 'Micro 23 Litters',
  store: 'Game Storm',
  isdn: '24'
}, {
  category: 'electricity',
  price: 375,
  inStoreSince: '2020-01-03',
  brand: 'Samsung',
  model: 'MS23K3513AS',
  recommendations: '24',
  image: 'https://img.zap.co.il/pics/0/2/2/6/43436220c.gif',
  description: 'Micro 23 Litters',
  store: 'Game Storm',
  isdn: '25'
}, {
  category: 'electricity',
  price: 428,
  inStoreSince: '2019-01-01',
  brand: 'Samsung',
  model: 'MS23K3513AS',
  recommendations: '38',
  image: 'https://img.zap.co.il/pics/0/2/2/6/43436220c.gif',
  description: 'Micro 23 Litters',
  store: 'Game Storm',
  isdn: '26'
}, {
  category: 'electricity',
  price: 429,
  inStoreSince: '2020-04-01',
  brand: 'Samsung',
  model: 'MS23K3513AS',
  recommendations: '14',
  image: 'https://img.zap.co.il/pics/9/4/2/1/49811249b.gif',
  description: 'WMicro 23 Litters',
  store: 'Game Storm',
  isdn: '27'
}, {
  category: 'earphones',
  price: 5264,
  inStoreSince: '2020-01-01',
  brand: 'Apple',
  model: 'AirPods 2',
  recommendations: '34',
  image: 'https://img.zap.co.il/pics/9/4/2/1/49811249b.gif',
  description: 'Wireless earphones from Apple',
  store: 'SCOPE Digital',
  isdn: '28'
}, {
  category: 'earphones',
  price: 5405,
  inStoreSince: '2020-05-01',
  brand: 'Apple',
  model: 'AirPods 2',
  recommendations: '34',
  image: 'https://img.zap.co.il/pics/9/4/2/1/49811249b.gif',
  description: 'Wireless earphones from Apple',
  store: 'MobileLand',
  isdn: '29'
}, {
  category: 'earphones',
  price: 5756,
  inStoreSince: '2020-01-01',
  brand: 'Apple',
  model: 'AirPods 2',
  recommendations: '34',
  image: '',
  description: 'Micro 23 Litters',
  store: 'Game Storm',
  isdn: '30'
}, {
  category: 'electricity',
  price: 375,
  inStoreSince: '2020-01-03',
  brand: 'Samsung',
  model: 'MS23K3513AS',
  recommendations: '24',
  image: 'https://img.zap.co.il/pics/0/2/2/6/43436220c.gif',
  description: 'Micro 23 Litters',
  store: 'Game Storm',
  isdn: '31'
}, {
  category: 'electricity',
  price: 428,
  inStoreSince: '2019-01-01',
  brand: 'Samsung',
  model: 'MS23K3513AS',
  recommendations: '38',
  image: 'https://img.zap.co.il/pics/0/2/2/6/43436220c.gif',
  description: 'Micro 23 Litters',
  store: 'Game Storm',
  isdn: '32'
}, {
  category: 'electricity',
  price: 429,
  inStoreSince: '2020-04-01',
  brand: 'Samsung',
  model: 'MS23K3513AS',
  recommendations: '14',
  image: 'https://img.zap.co.il/pics/9/4/2/1/49811249b.gif',
  description: 'WMicro 23 Litters',
  store: 'Game Storm',
  isdn: '33'
}, {
  category: 'Computers',
  price: '1000',
  inStoreSince: '2020-04-15',
  brand: 'intel',
  model: 'i5-10500',
  recommendations: 4560,
  image: 'https://img.zap.co.il/pics/3/8/4/6/55976483b.gif',
  description: '6 cores, 12 threads',
  store: 'intel store',
  isdn: '34'
}, {
  category: 'computers',
  price: '9200',
  inStoreSince: '2018-11-15',
  brand: 'intel',
  model: 'i5-9600k',
  recommendations: 12780,
  image: 'https://img.zap.co.il/pics/7/2/8/5/58655827b.gif',
  description: '6 cores, 6 threads',
  store: 'intel store',
  isdn: '35'
}];

function FilterProductsById(products, id) {
  /*  return products.isdn == id; */
  var ProductsByid = products.filter(function (filtered) {
    return filtered.isdn == id;
  });
  console.log("this is the id: ".concat(ProductsByid));
  return ProductsByid;
}

function RenderProductScreen(id) {
  var BodyContainer = document.getElementById('BodyContainer');
  var product = FilterProductsById(products, id);
  var card = "\n  <div id=\"productPaige\">\n  <div class=\"card text-center\">\n  <div class=\"card-header\">\n  <ul class=\"nav nav-tabs card-header-tabs\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" onclick=\"RenderMainTab()\">Main</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link disabled \" onclick=\"RenderPitchersTab()\">Pitchers</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link disabled \" onclick=\"RenderSpecificationsTab()\">Specifications</a>\n    </li>\n  </ul>\n </div>\n <div class=\"card-body\">\n  <img src=\"".concat(product[0].image, "\" style=\"width: 100%;\" alt=\"\"> <!-- ProductPitcher -->\n  <h5 class=\"card-title\">").concat(product[0].model, "</h5> <!-- PRODUCKTNAME + Model -->\n  <p class=\"card-text\">").concat(product[0].brand, " ").concat(product[0].model, " ").concat(product[0].description, "</p>\n  <p class=\"card-text \" style=\"font-size:2rem\">").concat(product[0].price, " $</p> <!-- price -->\n</div>\n</div>\n</div>\n<!--END ProductSection --> ");
  BodyContainer.innerHTML = card;
}