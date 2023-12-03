import { useContext } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { TextInput, Label } from "keep-react";
import { AppStateContext } from "../contexts/AppStateContext";

const PasswordComponent = () => {
  const { password, handlePassword, handlePasswordType } =
    useContext(AppStateContext);

  return (
    <div>
      <Label value="Password" />
      <TextInput
        sizing="md"
        type={password.type}
        value={password.value}
        handleOnChange={handlePassword}
        color="gray"
        withBg={true}
        addon={
          password.type === "password" ? (
            <EyeSlash
              size={20}
              color="#1034ea"
              weight="bold"
              onClick={handlePasswordType}
            />
          ) : (
            <Eye
              size={20}
              color="#1034ea"
              weight="bold"
              onClick={handlePasswordType}
            />
          )
        }
        addonPosition={password.value === "" || "right"}
        addonStyle="rounded-r-md border-l-0"
      />
    </div>
  );
};

export default PasswordComponent;
