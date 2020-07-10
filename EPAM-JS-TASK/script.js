document.getElementById('sub-btn').addEventListener('click', function() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var yearBirth = document.getElementById('dob').value;
    var phoneNum = document.getElementById('ph-no').value;
    var emailID = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('re-password').value;
    
    if (firstName.length === 0) {
        alert('Enter the first name!');
    }else if (lastName.length === 0) {
        alert('Enter the last name!');
    }else if (yearBirth.length === 0) {
        alert('Enter date of birth!');
    }else if (phoneNum.length === 0) {
        alert('Enter the phone number!');
    }else if (phoneNum.length > 10) {
        alert('Check phone number!');
    }else if (emailID.length === 0) {
        alert('Enter the email ID !');
    }else if (password.length === 0 && (rePassword.length === 0 || rePassword.length !== 0)) {
        alert('Enter the password!');
    }else if (rePassword.length === 0) {
        alert('Re-enter the password!');
    }else {
        alert('Redirecting to another page....');
        window.location = 'redirect.html';
    }
});