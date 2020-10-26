

let animal = { name: "Sloth", size: "50-80 CM", src: "https://images-na.ssl-images-amazon.com/images/I/81%2BikGeEBlL._AC_SX522_.jpg", color: "Gray", weight: "4-7 KG" }


// First Method

console.log("Name: " + animal.name);
console.log("Size: " + animal.size);
console.log("Img: " + animal.src);
console.log("Color: " + animal.color);
console.log("Weight: " + animal.weight);

console.log(animal.name, animal.size, animal.src, animal.color, animal.weight)

// Second Method 

console.log("Name: " + animal['name'])
console.log("Size: " + animal['size'])
console.log("Img: " + animal['src'])
console.log("Color: " + animal['color'])
console.log("Weight: " + animal['weight'])

console.log(animal['name'], animal['size'], animal['src'], animal['color'], animal['weight'])

let image = document.getElementById('animalPic')
const title = document.getElementById("title")
image.src = animal.src;
title.innerText = `My fav animal is: ${animal.name}`;



//arrays

const arr = ['Oz', "Ester", "Brit", "Avichai", "Gabriella"]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
const familyName = document.getElementById("familyName")
familyName.innerText =
    `My family age by oldest to youngest: ${arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3] + ", " + arr[4]}`;

//date

const today = new Date()
const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת',]
console.log(days[today.getDay()]);
console.log(`היום יום ${days[today.getDay()]}`);