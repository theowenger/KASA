import {Link} from "react-router-dom"
import '../assets/css/404.css'

function Body404() {
    return (
        <div className="body404">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/"><h3 className="acceuil">Retourner sur la page d'acceuil</h3></Link>
            </div>
    )
}



export default Body404