import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {
  const [email, setEmail] = useState({
    value: "",
    isValid: false,
  });

  const [password, setPassword] = useState({
    value: "",
    type: "password",
  });

  const [newPassword, setNewPassword] = useState({
    value: "",
    isMatching: false,
  });

  const [passwordStrength, setPasswordStrength] = useState("weak");

  //email handling functionality
  const handleEmail = (e) => {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setEmail({
      value: e.target.value,
      isValid: emailRegex.test(String(e.target.value).toLowerCase()),
    });
  };

  //password validation
  const validatePassword = (inputPassword) => {
    // Define your password validation rules
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(inputPassword);
    const hasLowerCase = /[a-z]/.test(inputPassword);
    const hasNumber = /\d/.test(inputPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);

    // Check the strength of the password
    if (
      inputPassword.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    ) {
      setPasswordStrength("strong");
    } else if (
      inputPassword.length >= minLength &&
      (hasUpperCase || hasLowerCase || hasNumber || hasSpecialChar)
    ) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("weak");
    }
  };

  //password handling functionalities
  const handlePassword = (e) => {
    setPassword((prev) => ({ ...prev, value: e.target.value }));
    validatePassword(password.value);
  };

  const handlePasswordType = () => {
    setPassword((prev) => ({
      ...prev,
      type: prev.type === "text" ? "password" : "text",
    }));
  };

  //new password input for confirmation
  const handleNewPassword = (e) => {
    const inputValue = e.target.value;
    setNewPassword({
      value: inputValue,
      isMatching: inputValue === password.value ? true : false,
    });
  };

  return (
    <AppStateContext.Provider
      value={{
        email,
        handleEmail,
        password,
        handlePassword,
        handlePasswordType,
        passwordStrength,
        newPassword,
        handleNewPassword,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppStateProvider, AppStateContext };
