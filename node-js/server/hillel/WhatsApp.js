const shgia = document.querySelector("#shgia")
const inputext = document.querySelector("#inputext")
let html = "";

// טלפון קליק

inputext.addEventListener('click', function (event) {
    html = "הזן מספר בין 10 ספרות"
    shgia.innerHTML = (html)
})
// טלפון

function funcPhone(e) {
    const Mobile_Phone = event.target.value;
    if (Mobile_Phone.length > 10) {
        html = "מספר טלפון ארוך"
    } else if (Mobile_Phone.length < 10) {
        html = "הזן מספר בין 10 ספרות"
    } else if (Mobile_Phone.length = 10) {
        html = "מספר תקין"
    }
    shgia.innerHTML = (html)
}

// קידומת
function funckidomet(e) {
    const kidomet = event.target.value;
    if (kidomet.length > 4) {
        html = "קידומת ארוכה"
    } else if (kidomet.length < 1) {
        html = "הזן קידומת"
    } else {
        html = "הזן מספר בין 10 ספרות"
    }
    shgia.innerHTML = (html)
}

// פונקציה של הכפתור

function button() {
    event.preventDefault();
    const Mobile_Phone = event.target.children.Mobile_Phone.value;
    const kidomet = event.target.children.kidomet.value;
    const kidometd = event.target.children.kidometd.value;



    if (Mobile_Phone.length < 1 && kidomet.length < 1) {
        html = "בלי מספר + קידומת לא נוכל לעזור לך"
    } else if (Mobile_Phone.length < 1) {
        html = "בלי מספר לא נוכל לדעת עם מי להתכתב"
    } else if (kidomet.length < 1) {
        html = "בלי קידומת אי אפשר להתקדם"
    } else if (Mobile_Phone.length > 10 && kidomet.length > 4) {
        html = "מספר וקידומת ארוכים"
    } else if (Mobile_Phone.length < 10 && kidomet.length > 4) {
        html = "מספר קצר וקידומת ארוכה"
    } else if (Mobile_Phone.length < 10) {
        html = "מספר טלפון קצר "
    } else if (Mobile_Phone.length > 10) {
        html = "מספר טלפון ארוך "
    } else if (kidomet.length > 4) {
        html = "קידומת ארוכה"
    } else {
        window.open(`https://wa.me/${kidomet}${Mobile_Phone}?text=${kidometd}`)
        html = "הזן מספר בין 10 ספרות"
        inputext.value = ""
        inpotd.value = ""
    }
    shgia.innerHTML = (html)
}