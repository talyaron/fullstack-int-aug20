const clown = document.getElementById('clown')
const box = document.getElementById('box')
const audio = new Audio()
audio.src = 'evil-clown-laugh.mp3'

box.addEventListener('click', clickBox => {
    clown.style.transform = 'translate(-100px, -400px)'
    clown.style.transition = '0.3s'
    clown.style.width = '200px'
})

clown.addEventListener('click', clickClown => {
    clown.style.transform = 'translate(1px, 1px)'
    clown.style.transition = '0.3s'
    clown.style.width = '60px'
})
box.addEventListener('dblclick', clickAudio => {
    console.log("Entering function")
      if (!audio.paused) {
        console.log("isPlaying = true")
        audio.pause()
        audio.currentTime = 0;
    } else {
        console.log("isPlaying = false")
        audio.play()
    }
})