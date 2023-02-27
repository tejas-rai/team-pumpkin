import { Link } from "react-router-dom";
import "../../src/styles/styles.css";
function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img
          className="logo-image"
          src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-hand-drawn-cute-vegetarian-green-leaf-logo-image_1337225.jpg"
          alt="Dummy Logo"
        />
      </Link>
      <Link to="/about-us">About Us</Link>
    </nav>
  );
}

export default Navbar;
