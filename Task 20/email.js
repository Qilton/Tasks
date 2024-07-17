function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("mail").value,
    };

    const serviceID = "service_ao1omlp";
    const templateID = "template_h5zi7kc";

    console.log("Sending email...");
    console.log("Params:", params);

    emailjs.send(serviceID, templateID, params)
        
}
