import "../assets/css/footer.css"
import { Link } from "react-router-dom"
import logoFooter from "../assets/img/logo-footer.png"

function Footer() {
    return (
    <div className="footer">
        <Link to="/"><img className="logo-footer" src={logoFooter} alt="logo-footer"></img></Link>
        <div className="kasa-footer"><h2>© 2020 Kasa. All rights reserved</h2></div>
    </div>
    )
}

export default Footer