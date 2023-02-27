import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/about-us">About Us</Link>
      <span>Contact information</span>
      <span>Privacy policy</span>
    </footer>
  );
}
export default Footer;
