document.getElementById('userForm').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;
    if (confirmEmail === email) {
        alert('Emails match! Sending to web server.');
    } else {
        alert('Emails do not match. Try again.');
        event.preventDefault();
    }
});