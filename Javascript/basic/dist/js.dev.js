"use strict";

//primitive variabels
var city = 'Kedumim'; //it is an old declaration, similar to let

var name = "Tal"; //string

var email = "Yaron";
var phoneNumber = 49; //number;

name = 23; //number

name = true;
name = false; //booleans

name = null; // nothing, undefined in memory

name = undefined; //there is a location in memory, but no value was asign

var student = {
  name: "tal",
  surename: 'Yaron'
}; //obj {key:value, key:value, key:value}

console.log(student.name);
console.log(student['name']);
console.log(student.surename);
console.log(student['surename']);
var animal = {
  name: "אוגר",
  size: "קטן",
  src: "https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_380,w_500/543439",
  color: "לבן",
  weight: "150g"
};
var image = document.getElementById('animalPic');
console.dir(image);
image.src = 'aa.jpg';