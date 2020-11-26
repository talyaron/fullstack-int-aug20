function handleOnMouseEnter(event) {
    event.target.style.transform = 'scale(1.5)'
}

function handleOnClick(event) {
    event.target.src = "https://i.pinimg.com/originals/db/44/a9/db44a987311a5383faac3e6041e277e8.jpg"
}

const img = document.querySelector('#img')

img.addEventListener('mouseleave', event => {
    event.target.src = "https://boxesstore.com/wp-content/uploads/2019/11/large-moving-boxes-1800_3.jpg"
    event.target.style.transform = 'scale(1)'
})