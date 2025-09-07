// script.js
// Interactive Web Page Assignment

// --- Light/Dark Mode Toggle ---
// Toggles the page between light and dark mode
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        toggleThemeBtn.textContent = 'Switch to Light Mode';
    } else {
        toggleThemeBtn.textContent = 'Switch to Dark Mode';
    }
});

// --- Counter Feature ---
// Simple counter with increment and reset
let count = 0;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

incrementBtn.addEventListener('click', function() {
    count++;
    counterValue.textContent = count;
});

resetBtn.addEventListener('click', function() {
    count = 0;
    counterValue.textContent = count;
});

// --- Form Validation ---
// Validates the sign up form fields and provides feedback
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const termsCheckbox = document.getElementById('terms');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const termsError = document.getElementById('terms-error');
const formSuccess = document.getElementById('form-success');
const togglePasswordBtn = document.getElementById('toggle-password');

function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    // At least 6 chars, 1 number, 1 letter
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword && confirmPassword.length > 0;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    termsError.textContent = '';
    formSuccess.textContent = '';

    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 2 characters.';
        valid = false;
    }
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address.';
        valid = false;
    }
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be 6+ chars, include a letter and a number.';
        valid = false;
    }
    if (!validateConfirmPassword(passwordInput.value, confirmPasswordInput.value)) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        valid = false;
    }
    if (!termsCheckbox.checked) {
        termsError.textContent = 'You must agree to the terms.';
        valid = false;
    }
    if (valid) {
        formSuccess.textContent = 'Sign up successful!';
        form.reset();
        // Reset password toggle to hide
        passwordInput.type = 'password';
        confirmPasswordInput.type = 'password';
        togglePasswordBtn.textContent = 'Show';
    }
});

// Real-time validation feedback
nameInput.addEventListener('input', function() {
    nameError.textContent = validateName(nameInput.value) ? '' : 'Name must be at least 2 characters.';
});
emailInput.addEventListener('input', function() {
    emailError.textContent = validateEmail(emailInput.value) ? '' : 'Enter a valid email address.';
});
passwordInput.addEventListener('input', function() {
    passwordError.textContent = validatePassword(passwordInput.value) ? '' : 'Password must be 6+ chars, include a letter and a number.';
    // Also check confirm password
    confirmPasswordError.textContent = validateConfirmPassword(passwordInput.value, confirmPasswordInput.value) ? '' : 'Passwords do not match.';
});
confirmPasswordInput.addEventListener('input', function() {
    confirmPasswordError.textContent = validateConfirmPassword(passwordInput.value, confirmPasswordInput.value) ? '' : 'Passwords do not match.';
});
termsCheckbox.addEventListener('change', function() {
    termsError.textContent = termsCheckbox.checked ? '' : 'You must agree to the terms.';
});

// Show/hide password toggle
togglePasswordBtn.addEventListener('click', function() {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    confirmPasswordInput.type = isHidden ? 'text' : 'password';
    togglePasswordBtn.textContent = isHidden ? 'Hide' : 'Show';
});
