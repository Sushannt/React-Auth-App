const validatePasswordStrength = (inputPassword) => {
  // Define your password validation rules
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(inputPassword);
  const hasLowerCase = /[a-z]/.test(inputPassword);
  const hasNumber = /\d/.test(inputPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);

  if (
    inputPassword.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar
  ) {
    return "strong";
  } else if (
    inputPassword.length >= minLength &&
    (hasUpperCase || hasLowerCase || hasNumber || hasSpecialChar)
  ) {
    return "medium";
  } else {
    return "weak";
  }
};

export default validatePasswordStrength;
