import '../assets/css/index.css'
import kasa from "../assets/database/kasa.json"
import { Link } from 'react-router-dom'


function Gallery() {

    return (
        <div className="gallery">
            <ul className='card-container'>
                {kasa.map((e) => (
                    <Link to={'apartments/' + e.id} key={e.id} >
                        <li key={e.id} className="card" style={{ backgroundImage: `url(${e.cover})` }}>
                            <div className='card-filter'>
                                <div className='card-txt'><h3 key={e.title}>{e.title}</h3></div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Gallery