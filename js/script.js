document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        if (emailInput.value !== confirmEmailInput.value) {
            alert('Email addresses do not match!');
            event.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });
    
    const testButton = document.getElementById('testButton');
    testButton.addEventListener('click', function () {
        form.submit();
    });
});
