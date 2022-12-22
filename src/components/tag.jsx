import kasa from '../assets/database/kasa.json'
import '../assets/css/product.css'
import { useParams } from 'react-router-dom'


function Tag() {
    const {id} = useParams()
    let product = kasa.find(i => i.id === id)
    return (
        <div className='tag-container'>
            {product.tags.map((tag, index) => {
                return (
                    <h3 key={index} className="tag-unite">{tag}</h3>
                )
            })}
        </div>
)}

export default Tag