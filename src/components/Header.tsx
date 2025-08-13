import logo from "../img/logo.png";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 px-8 py-2 bg-linear-to-b from-white to-transparent z-10">
      <img src={logo} alt="logo" className="w-30" />
    </div>
  );
};

export default Header;
