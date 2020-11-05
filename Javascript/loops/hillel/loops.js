



const my_car =[
    //1
    {
            Company:"האודי",
            model :" E-tron GT ",
            Power_horsepower:590,
            Engine : 5000,
            Turbo : 2,
            Weight : 2500,
            price :1500000,
            Speedfrom0to100 : 3.5,
            src : "https://www.cartube.co.il/images/stories/audi/general4/2018/c3354d33-audi-e-tron-gt-concept-21-970px.jpg",
            literature1 :548,
            literature2 :24,
            literature3 :489,
    },
    //2
    {
        Company:"האודי",
        model :"s8",
        Power_horsepower:570,
        Engine : 4000,
        Turbo : 2,
        Weight : 2500,
        Speedfrom0to100 : 3.8,
        price :1000000,
        src : "https://www.cartube.co.il/images/stories/audi/a8/2019/d0b0177d-audi-s8-3-970px.jpg",
        literature1 :57,
        literature2 :314,
        literature3 :14,

    },
    //3
    {
            Company:"האודי",
            model :"RS-7",
            Power_horsepower:450,
            Engine : 3000,
            Turbo : 2,
            Weight : 2000,
            price :1200000,
            Speedfrom0to100 : 3,
            src : "data:image/jpeg;base64,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",
            literature1 :78,
            literature2 :452,
            literature3 :45,
         },
         //4
         {
            Company:"האודי",
            model :"RS Q8",
            Power_horsepower: 600,
            Engine : 4500,
            Turbo : 2,
            Weight : 2500,
            Speedfrom0to100 : 3.8,
            price :1000000,
            src : "https://www.cartube.co.il/images/stories/audi/q8/2019/Audi-RS-Q8-322-970px.jpg",
            literature1 :545,
            literature2 :24,
            literature3 :789,
    
        },

]
/*let hil= "";
function caftor(){
    document.getElementById("demo")
    hil +=`<p>${my_car[cars].model}</p>`
    demo.innerHTML=(hil)
    }*/

let html ="";
let car= document.getElementById("car")

for (cars= 0; cars<my_car.length; cars++){


html += `<p>${my_car[cars].Company}</p>`

html += `<div class="text_card"> דגם ${my_car[cars].model}</div>`


html +=`<img src="${my_car[cars].src}">`

if (my_car[cars].Power_horsepower > 500){
    html += `<div class="cohsos"> ${my_car[cars].Power_horsepower} כח סוס זה מאוד מהיר </div>`
}
else {
    html += `<div class="cohsos"> ${my_car[cars].Power_horsepower} כח סוס זה נחמד </div>`
}
if (my_car[cars].price > 1000000){
html += `<div class="price">${my_car[cars].price}₪ מחיר ממש יקר </div>`
}
else {
    html += `<div class="price">${my_car[cars].price}₪ זה מחיר סביר בשביל להנות </div>`
}
if (my_car[cars].Weight>2000){
    html += `<div class="price">${my_car[cars].Weight} המשקל ממש כבד</div>`  
}
else {
    html += `<div class="price">${my_car[cars].Weight} משקל טוב לרכב ספורט משפחתי</div>`   
}
if (my_car[cars].Engine>4000){
    html += `<div class="price">מנוע ${my_car[cars].Engine} זה מנוע מפלצתי</div>`  
}
else {
    html += `<div class="price">מנוע ${my_car[cars].Engine} זה מנוע חזק </div>`   
}
if (my_car[cars].Speedfrom0to100>3.5){
    html += `<div class="price">מ 0 ל 100 תוך ${my_car[cars].Speedfrom0to100} זה מהיר</div>`  
}
else {
    html += `<div class="price">מ 0 ל 100 תוך ${my_car[cars].Speedfrom0to100} מאוד מהיר</div>`   
}
html += `<div class="lochit">${my_car[cars].literature1}-${my_car[cars].literature2}-${my_car[cars].literature3}</div>`


car.innerHTML=(html)
}

