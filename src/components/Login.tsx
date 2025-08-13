import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSIgnInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const toggleSignInForm = () => {
    setIsSIgnInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current?.value || "",
      password.current?.value || ""
    );
    setErrorMessage(message);

    if (message === null) {
      // create new user
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-800 min-h-screen w-full -z-10"></div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-6/12 absolute px-5 py-5 bg-[rgba(61,34,179,0.16)] my-36 mx-auto right-0 left-0 text-white rounded-md"
        >
          <h1 className="font-bold text-2xl py-4 mx-12">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="p-4 my-4 mx-12 w-9/12bg-gradient-to-bl rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 mx-12 w-9/12 bg-gradient-to-bl rounded-lg"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 mx-12 w-9/12bg-gradient-to-bl rounded-lg"
          />
          <p className="mx-13 w-11/12 text-blue-950">{errorMessage}</p>
          <button
            className="p-4 my-6 mx-12  w-9/12 bg-blue-700  rounded-lg cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={toggleSignInForm}
            className="mx-13  w-9/12 cursor-pointer"
          >
            {isSignInForm
              ? "Already a user Sign in into your account"
              : "New to MovieGPT? Sign Up now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
