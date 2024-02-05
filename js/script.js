document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;

    if (email === confirmEmail) {
        alert("Emails match! Sending to web server.");
    } else {
        alert("Emails do not match. Please check and try again.");
    }
});