import logo from "../assets/img/LOGO.png"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <Link to="/"><img src={logo} alt="logo"></img></Link>
            <nav className="navigation">
                    <Link to="/"><h2 className="acceuil">Accueil</h2></Link>
                    <Link to="/about"><h2 className="propos">A Propos</h2></Link>
            </nav>
        </div>
    )
}

export default Header