import Header from "./Header";

const Login = () => {
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
        <form className="w-3/12 absolute px-5 py-5 bg-[rgba(0,0,0,0.85)] my-36 mx-auto right-0 left-0 text-white rounded-md">
          <h1 className="font-bold text-2xl py-4">Sign In</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
