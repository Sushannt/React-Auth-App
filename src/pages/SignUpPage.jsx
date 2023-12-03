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
        <section className="flex justify-center gap-x-4 text-slate-400">
          <div>----------------</div>
          <div>OR</div>
          <div>----------------</div>
        </section>
        <EmailComponent />
        <PasswordComponent label="Password" />
        {password.value !== "" && <PasswordStrengthVisualizer />}

        <div>
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
        </div>

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
