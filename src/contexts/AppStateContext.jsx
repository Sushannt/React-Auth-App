import { createContext, useState } from "react";
import isEmailValid from "../../utils/emailUtils";
import validatePasswordStrength from "../../utils/passwordUtils";
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
    strength: "weak",
  });

  const [newPassword, setNewPassword] = useState({
    value: "",
    isMatching: false,
  });

  //email handling functionality
  const handleEmail = (e) => {
    setEmail({
      value: e.target.value,
      isValid: isEmailValid(e.target.value),
    });
  };

  //password handling functionalities
  const handlePassword = (e) => {
    setPassword((prev) => ({
      ...prev,
      value: e.target.value,
      strength: validatePasswordStrength(password.value),
    }));
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
