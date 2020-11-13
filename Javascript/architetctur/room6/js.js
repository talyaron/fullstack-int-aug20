const ColorBox = document.querySelectorAll(".Box");
const BoxWrapperOUTput = document.querySelector('.BoxWrapperOUTput');

ColorBox.forEach(element => {
    element.addEventListener('click',function (event) {
        BoxWrapperOUTput.innerHTML += `<div class="Box" id="${element.id}"></div>`;
    })
});

