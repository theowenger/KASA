import "../assets/css/footer.css"
import logoFooter from "../assets/img/logo-footer.png"

function Footer() {
    return (
    <div className="footer">
        <img className="logo-footer" src={logoFooter}></img>
        <div className="kasa-footer"><h2>© 2020 Kasa. All rights reserved</h2></div>
    </div>
    )
}

export default Footer