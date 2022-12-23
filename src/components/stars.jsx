import kasa from '../assets/database/kasa.json'
import '../assets/css/product.css'
import { useParams } from 'react-router-dom'

import starFull from '../assets/img/StarFull.png'
import starEmpty from "../assets/img/starEmpty.png"


function StarsRating () {
    const { id } = useParams()
    let product = kasa.find(i => i.id === id)
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        if (i < product.rating) {
            stars.push(<img src={starFull} alt="Full star" key={i} />);
        } else {
            stars.push(<img src={starEmpty} alt="Empty star" key={i} />);
        }
    }

    return (
    <div className='star-container'>{stars}</div>
    )
}

export default StarsRating