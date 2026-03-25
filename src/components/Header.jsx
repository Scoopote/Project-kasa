import { NavLink } from "react-router-dom";
import logo from "../assets/logo-kasa.png"; // adapte le nom

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link--active" : ""}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link--active" : ""}`
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
