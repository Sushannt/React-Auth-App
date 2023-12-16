import { Button, TextInput, Label } from "keep-react";
import { useContext } from "react";
import { AppStateContext } from "../contexts/AppStateContext";
import { Link as RouterLink } from "react-router-dom";
import OAuthComponent from "../components/OAuthComponent";
import EmailComponent from "../components/EmailComponent";
import PasswordComponent from "../components/PasswordComponent";
import PasswordStrengthVisualizer from "../components/PasswordStrengthVisualizer";

const SignUpPage = () => {
  const { newPassword, handleNewPassword, password } =
    useContext(AppStateContext);

  return (
    <main className="w-[90vw] md:w-[60vw] lg:w-[45vw] mx-auto flex flex-col justify-center mt-[2%] px-5 py-10 bg-white border-2 border-indigo-500 rounded-md">
      <h1 className="text-2xl font-semibold">Sign Up</h1>
      <h2 className="text-md font-semibold">Please provide your details</h2>
      <form action="#" className="flex flex-col gap-y-4 mt-5">
        <OAuthComponent className="w-[8%] md:w-[5%]" />

        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span className="relative z-10 bg-white px-6 text-slate-400">OR</span>
        </span>
        <EmailComponent />
        <PasswordComponent label="Password" />
        {password.value !== "" && <PasswordStrengthVisualizer />}
        <fieldset>
          <Label value="Repeat Password" />
          <TextInput
            sizing="md"
            type="password"
            value={newPassword.value}
            handleOnChange={handleNewPassword}
            color={
              (newPassword.value !== "" &&
                newPassword.isMatching &&
                "success") ||
              "gray"
            }
          />
        </fieldset>

        <Button type="primary" size="md" width="full">
          Continue
        </Button>
      </form>
      <p className="text-center mt-5">
        Already have an account?&nbsp;
        <RouterLink to="/" className="underline decoration-1 font-semibold">
          Sign In
        </RouterLink>
      </p>
    </main>
  );
};

export default SignUpPage;
