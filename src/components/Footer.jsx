import logoFooter from "../assets/LOGOFOOTER.png";

function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="Kasa logo" />
      <p> © {new Date().getFullYear()} Kasa. All rights reserved </p>
    </footer>
  );
}

export default Footer;
