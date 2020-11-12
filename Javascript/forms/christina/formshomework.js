const userName = "Christina111"
const password = "1234"

function handleSubmit(e) {

    if (e.target.children.username.value !== userName) {
        alert('the username is uncorrect')

    }

    if (e.target.children.password.value !== password) {
        alert('the password is uncorrect')

    }

}


function handleClick(e) {

}