document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (validatePassword(password)) {
        console.log('Form submitted');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        alert('Registration successful!');
    } else {
        alert('Password does not meet the security requirements.');
    }
});

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
