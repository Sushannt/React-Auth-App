import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { TextInput, Label } from "keep-react";
import { useContext } from "react";
import { AppStateContext } from "../contexts/AppStateContext";

const EmailComponent = () => {
  const { email, handleEmail } = useContext(AppStateContext);

  return (
    <fieldset>
      <Label value="Email address" />
      <TextInput
        sizing="md"
        value={email.value}
        type="text"
        handleOnChange={handleEmail}
        color={
          email.value !== "" ? (email.isValid ? "info" : "danger") : "gray"
        }
        withBg={true}
        icon={
          email.value !== "" && email.isValid === false ? (
            <WarningCircle size={20} color="#d81818" weight="thin" />
          ) : (
            <CheckCircle
              size={20}
              color={(email.isValid && "#1034ea") || "#fff"}
              weight="fill"
            />
          )
        }
        iconPosition="right"
      />
    </fieldset>
  );
};

export default EmailComponent;
