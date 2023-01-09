import logo from "../assets/img/LOGO.png"
import {Link, useLocation} from "react-router-dom"

function Header() {
    const location = useLocation();

    return (
      <div className="header">
        <Link to="/"><img src={logo} alt="logo"></img></Link>
        <nav className="navigation">
          {/* ternary condition to underline the navigation link if we are on the right page */}
          <Link to="/" className={location.pathname === '/' ? 'underline' : ''}>
            <h2 className="acceuil">Accueil</h2>
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'underline' : ''}>
            <h2 className="propos">A Propos</h2>
          </Link>
        </nav>
      </div>
    );
  }

export default Header