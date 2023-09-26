function isValidEmail(email) {
  // Regular expression for a basic email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

// Get references to the HTML elements
const emailInput = document.getElementById("emailInput");
const validateButton = document.getElementById("validateButton");
const result = document.getElementById("result");

// Add an event listener to the button
validateButton.addEventListener("click", function () {
  const email = emailInput.value;

  if (isValidEmail(email)) {
    result.textContent = "Email is valid.";
  } else {
    result.textContent = "Email is not valid.";
  }
});

function checkPasswordStrength(password) {
  // Define criteria for password strength
  const lengthRegex = /^.{8,}$/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

  let strength = 0;

  if (lengthRegex.test(password)) strength++;
  if (uppercaseRegex.test(password)) strength++;
  if (lowercaseRegex.test(password)) strength++;
  if (digitRegex.test(password)) strength++;
  if (specialCharRegex.test(password)) strength++;

  return strength;
}

// Get references to the HTML elements
const passwordInput = document.getElementById("passwordInput1");
const strengthText = document.getElementById("strengthText");

// Add an event listener to the password input
passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);

  if (strength >= 5) {
    strengthText.textContent = "Strong password";
  } else if (strength >= 3) {
    strengthText.textContent = "Moderate password";
  } else if (strength >= 1) {
    strengthText.textContent = "Weak password";
  } else {
    strengthText.textContent = "";
  }
});

const password1Input = document.getElementById("passwordInput1");
const password2Input = document.getElementById("passwordInput2");
const matchMessage = document.getElementById("matchMessage");

// Add an event listener to the second password input
password2Input.addEventListener("input", function () {
  const password1 = password1Input.value;
  const password2 = password2Input.value;

  if (password1 === password2) {
    matchMessage.textContent = "Passwords match.";
  } else {
    matchMessage.textContent = "Passwords do not match.";
  }
});
