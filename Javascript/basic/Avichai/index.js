

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