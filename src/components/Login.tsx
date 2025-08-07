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
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="netflix_background"
          className="inset-0 bg-cover bg-center bg-no-repeat min-h-screen w-full -z-10"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-6/12 absolute px-5 py-5 bg-[rgba(0,0,0,0.85)] my-36 mx-auto right-0 left-0 text-white rounded-md"
        >
          <h1 className="font-bold text-2xl py-4 mx-12">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="p-4 my-4 mx-12 w-9/12 bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 mx-12 w-9/12 bg-gray-700 rounded-lg"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 mx-12 w-9/12 bg-gray-700 rounded-lg"
          />
          <p className="mx-13 w-11/12 text-red-600">{errorMessage}</p>
          <button
            className="p-4 my-6 mx-12  w-9/12 bg-red-700  rounded-lg cursor-pointer"
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
              : "New to Netflix? Sign Up now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
