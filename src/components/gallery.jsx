import  '../assets/css/index.css'
import kasa from "../assets/database/kasa.json"



function Gallery(props) {

    return (
        <div className="gallery">
            <ul className='card-container'>
                {kasa.map((e) => (
                    <li key={e.id} className="card">
                        <img src={e.cover} alt='loft'></img>
                        <h3>{e.title}</h3>
                        </li>
                    ))}
            </ul>
        </div>
        )
    }

export default Gallery