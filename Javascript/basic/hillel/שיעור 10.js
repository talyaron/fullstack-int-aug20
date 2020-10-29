let name= "honda"
let model="sivic"
let year=2008
let color="gold"
let horsepower=140
let Engine=1800

console.log(name)
console.log(model)
console.log(year)
console.log(color)
console.log(horsepower)
console.log(Engine)

name="Range Rover"
model="Sport"
year=2021
color="White"
horsepower=450
Engine=3500

console.log(name,model,year,color,horsepower,Engine)


//html מכאן הכל מופיע

let car={name:"Honda",model:"sivic",year:2008,  color:"gold",horsepower:140,Engine:1800}
console.log(car)

let text1=document.getElementById('title1')
title1.innerText = `יצרן: ${car.name}`;

let text2=document.getElementById('title2')
title2.innerText=`דגם: ${ car.model}`;

let text3=document.getElementById('title3')
title3.innerText=` שנה: ${car.year}`;

let text4=document.getElementById('title4')
title4.innerText=`צבע: ${car.color}`;

let text5=document.getElementById('title5')
title5.innerText=`כ"ס: ${car.horsepower}`;

let text6=document.getElementById('title6')
title6.innerText=`נפח מנוע: ${car.Engine}`;


let carr={name:"Range Rover",model:"Sport",year:2021,  color:"White",horsepower:450,Engine:3500}
console.log(carr)

name="Range Rover"
model="Sport"
year=2021
color="White"
horsepower=450
Engine=3500

console.log(name,model,year,color,horsepower,Engine)


let text11=document.getElementById('title11')
title11.innerText=`יצרן: ${carr.name}`;

let text22=document.getElementById('title22')
title22.innerText=`דגם: ${carr.model}`;

let text33=document.getElementById('title33')
title33.innerText=`שנה: ${carr.year}`;

let text44=document.getElementById('title44')
title44.innerText=`צבע: ${carr.color}`;

let text55=document.getElementById('title55')
title55.innerText=`כ"ס: ${carr.horsepower}`

let text66=document.getElementById('title66')
title66.innerText=`נפח מנוע: ${carr.Engine}`;