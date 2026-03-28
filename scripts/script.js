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

// LOCAL STORAGE //
const savedUsername = localStorage.getItem('registeredUsername');
console.log('Saved username from localStorage:', savedUsername);

if (savedUsername) {
    usernameInput.value = savedUsername;
    usernameInput.classList.add('input-valid');
    console.log('Username pre-filled from localStorage:', savedUsername);
}

// HELPER FUNCTIONS //
// showError Message -sync- Constraint Validations API (red)
function showError(inputElement, errorElement, message) {
    inputElement.setCustomValidity(message);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.remove('input-valid');
    inputElement.classList.add('input-error');
}

// clearError Message -sync- Constraint Validation API (red to green switch)
function clearError(inputElement, errorElement) {
    inputElement.setCustomValidity('');
    errorElement.textContent = '';
    inputElement.classList.remove('input-error');
    inputElement.classList.add('input-valid');
}

// VALIDATION FUNCTIONS - boolean //
// Validate username parameters //
function validateUsername() {
    const validity = usernameInput.validity;
    console.log('Username current value:', usernameInput.value);

    if (validity.valueMissing) {
        // Empty field validation
        showError(usernameInput, usernameError, 'Username is required.');
        return false;
    }

    if (validity.tooShort) {
        // Characters outside the min/max requirements entered
        showError(usernameInput, usernameError, `Username must be at least ${usernameInput.minLength} characters.`);
        return false;
    }

    if (validity.patternMismatch) {
        // Patterns outside the requirements entered
        showError(usernameInput, usernameError, 'Username can only contain letters, numbers, and underscores.');
        return false;
    }

    // All requirements met - green light
    clearError(usernameInput, usernameError);
    return true;
}

// Validate email parameters //
function validateEmail() {
    const validity = emailInput.validity;
    console.log('email current value:', emailInput.value);

    // email address requirements not met
    if (validity.typeMismatch) {
        showError(emailInput, emailError, 'Please enter a valid email address, for example, name@example.com.');
        return false;
    }
    // Empty field validation
    if (validity.valueMissing) {
        showError(emailInput, emailError, 'An email address is required.');
        return false;
    }

    // All requirements met - green light
    clearError(emailInput, emailError);
    return true;
}

// Password validation
function validatePassword() {
    const validity = passwordInput.validity;
    console.log('password current value:', passwordInput.value);

    // Empty field validation
    if (validity.valueMissing) {
        showError(passwordInput, passwordError, 'A password is required.');
        return false;
    }

    // Password minimum length not met
    if (validity.tooShort) {
        showError(passwordInput, passwordError, `Password must be at least ${passwordInput.minLength} characters long.`);
        return false;
    }
    // Patterns outside the requirements entered
    if (validity.patternMismatch) {
        showError(passwordInput, passwordError, 'Password must include at least one uppercase letter, one lowercase letter, and one number.');
        return false;
    }

    // All requirements met - green light
    clearError(passwordInput, passwordError);
    return true;
}

// Confirm Password
function validateConfirmPassword() {
    console.log('Values Match:', confirmInput.value === passwordInput.value);

    // Both password fields must be completed
    if (confirmInput.value === '') {
        showError(confirmInput, confirmError, 'Please confirm your password.');
        return false;
    }

    // Password values do not match
    if (confirmInput.value !== passwordInput.value) {
        showError(confirmInput, confirmError, 'Passwords do not match. Please try again.');
        return false;
    }

    // All requirements met - green light
    clearError(confirmInput, confirmError);
    return true;
}

// EVENT LISTENERS //
usernameInput.addEventListener('input', () => {
    validateUsername();
});

emailInput.addEventListener('input', () => {
    validateEmail();
});

passwordInput.addEventListener('input', () => {
    validatePassword();
    if (confirmInput.value !== '') {
        validateConfirmPassword();
    }
});

confirmInput.addEventListener('input', () => {
    validateConfirmPassword();
});

// BLUR VALIDATION //
usernameInput.addEventListener('blur', () => {
    validateUsername();
});

emailInput.addEventListener('blur', () => {
    validateEmail();
});

passwordInput.addEventListener('blur', () => {
    validatePassword();
});

confirmInput.addEventListener('blur', () => {
    validateConfirmPassword();
});

// FORM SUBMIT EVENT HANDLER //
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();

    console.log('Submit attempted. Validation results:', {
        username: isUsernameValid,
        email: isEmailValid,
        password: isPasswordValid,
        ConfirmPassword: isConfirmValid
    });

    const allValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid;
    if (allValid) {
        // Save username to localStorage
        localStorage.setItem('registeredUsername', usernameInput.value);
        // Save email to sessionStorage
        sessionStorage.setItem('lastEmail', emailInput.value);
        // Reveal Success Message
        successMessage.style.display = 'block';
        setTimeout(() => {
            // Clear form fields
            form.reset();
            [usernameInput, emailInput, passwordInput, confirmInput].forEach(input => {
                input.classList.remove('input-valid', 'input-error');
            });

            // Hide the success message
            successMessage.style.display = 'none';

            // re-populate username from localStorage
            const saved = localStorage.getItem('registeredUsername');
            if (saved) {
                usernameInput.value = saved;
                usernameInput.classList.add('input-valid');
            }
        }, 3000);

    } else {
        // FAILURE PATH //
        if (!isUsernameValid) { usernameInput.focus(); }
        else if (!isEmailValid) { emailInput.focus(); }
        else if (!isPasswordValid) { passwordInput.focus(); }
        else if (!isConfirmValid) { confirmInput.focus(); }
    }
});

console.log('submit listener attached to form.');

// STORAGE INSPECTION UTILITY //
console.log('localStorage contents:');
if (localStorage.length === 0) {
    console.log('  (empty)');
} else {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(`  [${i}] ${key}:`, localStorage.getItem(key));
    }
}

console.log('sessionStorage contents:');
if (sessionStorage.length === 0) {
    console.log('  (empty)');
} else {
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        console.log(`  [${i}] ${key}:`, sessionStorage.getItem(key));
    }
}
