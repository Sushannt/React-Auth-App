import { Button } from "keep-react";
import { CheckBox } from "keep-react";
import { Link as RouterLink } from "react-router-dom";
import OAuthComponent from "../components/OAuthComponent";
import EmailComponent from "../components/EmailComponent";
import PasswordComponent from "../components/PasswordComponent";

const SignInPage = () => {
  return (
    <main className="w-[90vw] md:w-[60vw] lg:w-[45vw] mx-auto flex flex-col justify-center mt-[5%] px-5 py-10 bg-white border-2 border-indigo-500 rounded-md">
      <h1 className="text-2xl font-semibold">Sign In</h1>
      <h2 className="text-md font-semibold">Please enter your details</h2>
      <form action="#" className="flex flex-col gap-y-4 mt-5">
        <EmailComponent />
        <PasswordComponent />
        <div className="flex justify-between pb-4 text-sm">
          <span>
            <label htmlFor="checkbox">
              <CheckBox
                size="md"
                variant="square"
                label="Remember me"
                id="checkbox"
              />
            </label>
          </span>
          <span>
            <a href="#" className="text-slate-500">
              Forgot Password?
            </a>
          </span>
        </div>
        <Button type="primary" size="md" width="full">
          Sign In
        </Button>
        <OAuthComponent className="w-[8%] md:w-[5%]" />
      </form>
      <p className="text-center mt-5">
        Don&apos;t have an account?&nbsp;
        <RouterLink
          to="/signup"
          className="underline decoration-1 font-semibold"
        >
          Sign up
        </RouterLink>
      </p>
    </main>
  );
};

export default SignInPage;
