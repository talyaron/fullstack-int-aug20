"use strict";

function GetFullName(surName, firstName) {
  var fullName = {};
  fullName.firstName = firstName;
  fullName.surName = surName;
  return fullName;
}

console.log(GetFullName("eyal", "shemuel"));
/* test */