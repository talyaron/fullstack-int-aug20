"use strict";

// debugger;
var theVat = 17;

function getInputButton(i) {
  document.getElementById(i);

  if (document.getElementById("screan").innerHTML == 0) {
    document.getElementById("screan").innerHTML = i;
  } else {
    document.getElementById("screan").innerHTML += i;
  }

  ;
}
/* הצג לחיצת לחצן */


function setClearscrean() {
  document.getElementById("Clear");
  document.getElementById("screan").innerHTML = 0;
}
/* הגדר מע"מ שונה */


function setVat() {
  theVat = document.getElementById("screan").innerHTML;
  document.getElementById("screan").innerHTML = 'ערך המע"מ שונה ל ' + theVat + ' אחוז';
  setTimeout(resetScreanAndShowVat, 1000);
}

function resetScreanAndShowVat() {
  document.getElementById("screan").innerHTML = "0";
  document.getElementById("displayVat").innerHTML = theVat + "%";
}

function getVat() {
  // theVat =  document.getElementById("screan").innerHTML;
  document.getElementById("displayVat").innerHTML = theVat;
  console.log(theVat);
}
/* הוסף מע"מ */


function addVatToPrice() {
  display = document.getElementById("screan").innerHTML;
  display = display * (theVat / 100 + 1);
  document.getElementById("screan").innerHTML = display;
}

;
/*  הפחת מע"מ */

function substractVatFromPrice() {
  display = document.getElementById("screan").innerHTML;
  display = display * (1 - theVat / 100);
  document.getElementById("screan").innerHTML = display;
}

;
/* מצא מע"מ */

function getVPriceFromTotal() {
  display = document.getElementById("screan").innerHTML;
  display = display - display * (1 - theVat / 100);
  document.getElementById("screan").innerHTML = display;
}

;