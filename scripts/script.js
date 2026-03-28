// alert ("Javascript link successful!");

// THE DOM ELEMENTS //
const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmError = document.getElementById('confirmPasswordError');
const successMessage = document.getElementById('successMessage');
console.log('form:', form);
console.log('usernameInput:', usernameInput);
console.log('emailInput:', emailInput);
console.log('passwordInput', passwordInput);
console.log('confirmInput', confirmInput);
console.log('usernameError', usernameError);
console.log('emailError', emailError);
console.log('passwordError', passwordError);
console.log('confirmError', confirmError);
console.log('successMessage', successMessage);

// LOCAL STORAGE //
const savedUsername = localStorage.getItem('registeredUsername');
console.log('Saved username from localStorage:', savedUsername);

if (savedUsername) {
    usernameInput.value = savedUsername;
    usernameInput.classList.add('input-valid');
    console.log('Username pre-filled from localStorage:', savedUsername);
}

// showError Message -sync- Constraint Validations API (red)
function showError(inputElement, errorElement, message) {
    inputElement.setCustomValidity(message);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.remove('input-valid');
    inputElement.classList.add('input-error');
}

// clearError Message -sync- Constraint Validation API (red to green switch)
function clearError(inputEement, errorElement) {
    inputElement.setCustomValidity('');
    errorElement.textContent = '';
    inputElement.classlist.remove('input-error');
    inputElement.classList.add('input-valid');
}
console.log('showError:', showError);
console.log('clearError:', clearError);


