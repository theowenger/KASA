import kasa from '../assets/database/kasa.json'
import '../assets/css/product.css'
import { useParams } from 'react-router-dom'
import Tag from './tag'
import StarsRating from './stars'

//In the Return, we find the title, the location, the name and the picture of Host.
//In the end of the function, we find the component StarsRating who's display Stars

function TitleApartment() {
    const { id } = useParams()
    let product = kasa.find(i => i.id === id)

    return (
        <div className='product-container'>
            <div className='product-presentation'>
                <h1>{product.title}</h1>
                <h2>{product.location}</h2>
                <Tag />
            </div>
            <div className='host-ranked-container'>
                <div className='host-container'>
                    <h3>{product.host.name}</h3>
                    <img src={product.host.picture} alt="host" />
                </div>
                <StarsRating />
            </div>
        </div>
    )
}

export default TitleApartment