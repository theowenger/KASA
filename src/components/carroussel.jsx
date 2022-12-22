import kasa from '../assets/database/kasa.json'
import '../assets/css/product.css'
import { useParams } from 'react-router-dom'

function Carroussel() {
    const {id} = useParams()
    let product = kasa.find(i => i.id === id)

    return (
        <div className='carroussel'><img src={product.pictures[1]} alt='carroussel'/></div>
)}

export default Carroussel