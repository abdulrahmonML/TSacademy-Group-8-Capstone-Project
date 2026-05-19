import "./Navbar.css";
import planetLogo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src={planetLogo}
        alt="Planet Creative World"
        className="navbar__logo"
      />
    </nav>
  );
};

export default Navbar;
