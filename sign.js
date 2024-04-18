function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return false; // Prevent form submission
    }
    // Additional validation checks can be added here if needed

    return true; // Allow form submission
}
