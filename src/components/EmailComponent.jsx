import { CheckCircle } from "@phosphor-icons/react";
import { TextInput, Label } from "keep-react";
import { useContext } from "react";
import { AppStateContext } from "../contexts/AppStateContext";

const EmailComponent = () => {
  const { email, handleEmail } = useContext(AppStateContext);

  return (
    <div>
      <Label value="Email address" />
      <TextInput
        sizing="md"
        value={email.value}
        type="text"
        handleOnChange={handleEmail}
        color={(email.isValid && "info") || "gray"}
        withBg={true}
        icon={
          <CheckCircle
            size={20}
            color={(email.isValid && "#1034ea") || "#fff"}
            weight="fill"
          />
        }
        iconPosition="right"
      />
    </div>
  );
};

export default EmailComponent;
