function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_l1shzrp", "template_pzokilg",parms).then(alert("Email byl zaslán!"))
}

