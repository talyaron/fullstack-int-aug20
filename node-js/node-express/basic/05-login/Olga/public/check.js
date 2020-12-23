console.log(document.cookie)
setInterval(() => {
    if(!document.cookie){ //this do not check if the cookie is there. it is only getting all the cookies
      location.replace("/");
    }
}, 1000); 