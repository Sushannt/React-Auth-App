import { Button } from "keep-react";
import PropTypes from "prop-types";
import appleIcon from "../assets/apple-icon.svg";
import googleIcon from "../assets/google-icon.svg";

const OAuthComponent = ({ className }) => {
  return (
    <fieldset className="flex flex-col pt-5 gap-4">
      <Button width="full">
        <img src={googleIcon} className={className} alt="Google icon" />
        &nbsp;Sign in with Google
      </Button>
      <Button width="full">
        <img src={appleIcon} className={className} alt="apple icon" />
        &nbsp;Sign in with Apple
      </Button>
    </fieldset>
  );
};

//props validation
OAuthComponent.propTypes = {
  className: PropTypes.string.isRequired,
};

export default OAuthComponent;
