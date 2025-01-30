// EmailJS setup
(function() {
    emailjs.init("gorantla chandu harsha vardhan reddy"); // Replace with your User ID
})();

// Form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    let formData = new FormData(this);

    // Send the email via EmailJS
    emailjs.sendForm("service_jyy1fed", "template_yopseso", formData)
        .then(function(response) {
            document.getElementById("form-status").innerHTML = "Message sent successfully!";
            document.getElementById("contact-form").reset();
        }, function(error) {
            document.getElementById("form-status").innerHTML = "Error sending message. Please try again later.";
        });
});
