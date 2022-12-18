import  '../assets/css/index.css'
import kasa from "../assets/database/kasa.json"
import { Link } from 'react-router-dom'


function Gallery(props) {

    return (
        <div className="gallery">
            <ul className='card-container'>
                {kasa.map((e) => (
                    <Link to={e.id} key={e.id} >
                    <li key={e.id} className="card">
                        <img key={e.cover} src={e.cover} alt='loft'></img>
                        <h3 key={e.title}>{e.title}</h3>
                        </li>
                        </Link>
                    ))}
            </ul>
        </div>
        )
    }

export default Gallery