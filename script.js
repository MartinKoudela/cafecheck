function getMail(){
    event.preventDefault();

    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_l1shzrp", "template_pzokilg", parms)
        .then(() => {
            return emailjs.send("service_l1shzrp", "template_cufyelu", parms);
        })


        .then(() => {
            alert("Děkuji za zpětnou vazbu, byl vám zaslán email!");                // alert za vyplneni
            document.getElementById("feedbackForm").reset();    // reset formulare
        })
        .catch((error) => {
            console.error("Chyba při ukládání:", error);        // chyba alert
            alert("Nastala chyba při odesílání zpětné vazby.");
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});