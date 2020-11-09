function handleSubmit(e){
    e.preventDefault();

    console.log(e)


    const radio = e.target.children.radio.value;
    const username = e.target.children.username.value;
    const number = e.target.children.number.value;
    const color = e.target.children.color.value;
   
   

    console.log(username, radio, number, color);

    
}