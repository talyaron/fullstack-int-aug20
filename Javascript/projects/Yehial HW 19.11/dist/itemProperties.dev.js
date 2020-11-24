"use strict";

function itemProperties(event) {
  var test = products.find(function (e) {
    if (e.name == 'iPhone 12 Pro') return e.name;
  });
  event.target.innerHTML += "<div>".concat(test.name, "</div>");
  console.log(test.description); // console.log(test);
  // if(propertiesDiv.style.display=='block'){
  //     propertiesDiv.style.display='none';
  // }
  // else{
  //     propertiesDiv.style.display='block'
  // }
}