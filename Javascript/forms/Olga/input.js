function handleChange(e){
    console.log(e);
   
    console.log(e.target.value)
}

document.getElementById('in').addEventListener('change', handleChange => {
    console.log(handleChange)
})

function handleChangePass(e){
    console.log(e);
   
    console.log(e.target.value)
}

document.getElementById('inPass').addEventListener('change', handleChangePass => {
    console.log(handleChangePass)
})
function handleChangeMon(e){
    console.log(e);
   
    console.log(e.target.value)
}

document.getElementById('inMon').addEventListener('change', handleChangeMon => {
    console.log(handleChangeMon)
})




