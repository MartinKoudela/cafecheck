function getMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_l1shzrp", "template_pzokilg",parms)
    emailjs.send("service_l1shzrp", "template_cufyelu",parms)


        .then(() => {
            alert("Děkujeme za zpětnou vazbu, byl vám zaslán email!");                // alert za vyplneni
            document.getElementById("feedbackForm").reset();    // reset formulare
        })
        .catch((error) => {
            console.error("Chyba při ukládání:", error);        // chyba alert
            alert("Nastala chyba při odesílání zpětné vazby.");
        });
}