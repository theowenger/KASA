import kasa from '../assets/database/kasa.json'
import '../assets/css/product.css'
import { useParams } from 'react-router-dom'
import Tag from './tag'
import StarsRating from './stars'

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
            <div>
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