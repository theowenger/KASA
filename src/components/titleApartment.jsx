import kasa from '../assets/database/kasa.json'
import '../assets/css/product.css'
import { useParams } from 'react-router-dom'
import Tag from './tag'
import starFull from '../assets/img/StarFull.png'
import starEmpty from "../assets/img/starEmpty.png"

function TitleApartment() {
    const { id } = useParams()
    let product = kasa.find(i => i.id === id)

    console.log(product.rating)
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < product.rating) {
            stars.push(<img src={starFull} alt="Full star" key={i} />);
        } else {
            stars.push(<img src={starEmpty} alt="Empty star" key={i} />);
        }
    }

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
                <div className='star-container'>{stars}</div>
            </div>
        </div>
    )
}

export default TitleApartment